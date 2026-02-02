import { useEffect, useState } from 'react';
import { Answer, Question, Questions } from '../../../shared/quorumTypes';
import { parseCustomParams } from '../utils/customParams';
import { ForecastChart } from './ForecastChart';

export type ChartForecastFlexibleCfg = {
    container: string;
    customParams?: Record<string, string>;
    questions?: Questions;
};

type Props = { cfg: ChartForecastFlexibleCfg };

function ChartForecastFlexible({ cfg }: Props) {
    console.log('Initializing ChartForecastFlexible');
    console.log('cfg:', cfg);

    // TODO: Parse cfg.customParams
    // --> use this if you want more consise code <--
    const parsedParams = parseCustomParams(cfg.customParams as any);
    console.log('parsedParams:', parsedParams);

    // --> use this if you want specific constants for each parameter <--
    // const {
    //     customText,
    //     quantiles
    // } = useMemo(() => parseCustomParams(cfg.customParams as any), []);

    // Extract questions from cfg
    const questions = cfg.questions;
    console.log('Questions:', questions);

    // Get series labels (horizontal axis in Quorum)
    const seriesLabels = questions?.map((q: Question) => q.name());
    console.log('Series labels:', seriesLabels);

    // Get value labels (vertical axis in Quorum)
    const valueLabels = questions?.[0].answers().map((a: Answer) => a.text());
    console.log('Value labels:', valueLabels);

    // Initialize forecast matrix
    const [forecastMatrix, setForecastMatrix] = useState<number[][]>([]);
    console.log('Forecast matrix:', forecastMatrix);

    // Subscribe to Knockout observables and sync with React state
    useEffect(() => {
        const qs = questions ?? [];
        if (!qs.length) return;

        // Build initial matrix from KO values
        const aCount = qs[0]?.answers()?.length ?? 0;
        const initialMatrix = Array.from({ length: aCount }, (_, ai) =>
            qs.map(q => q.answers()[ai]?.currentUserForecast() ?? 0)
        );
        setForecastMatrix(initialMatrix);

        // Subscribe to KO updates
        const subs: any[] = [];
        for (let ai = 0; ai < aCount; ai++) {
            for (let qi = 0; qi < qs.length; qi++) {
                const obs = qs[qi].answers()[ai].currentUserForecast;
                const sub = obs.subscribe((v: number) => {
                    setForecastMatrix(prev => {
                        const next = prev.map(r => r.slice());
                        if (next[ai]?.[qi] !== v) {
                            next[ai][qi] = v;
                        }
                        return next;
                    });
                });
                subs.push(sub);
            }
        }

        return () => subs.forEach(s => s?.dispose?.());
    }, [questions]);

    console.log('Forecast matrix after subscription:', forecastMatrix);

    // Handle point changes from dragging
    const handlePointChange = (answerIdx: number, questionIdx: number, value: number) => {
        // Write back to Knockout observable
        const ans = questions?.[questionIdx]?.answers()?.[answerIdx];
        if (ans) {
            ans.currentUserForecast(value);
        }

        // Optional: optimistic UI update (though the KO subscription should handle this)
        setForecastMatrix(prev => {
            const next = prev.map(r => r.slice());
            if (next[answerIdx]?.[questionIdx] !== value) {
                next[answerIdx][questionIdx] = value;
            }
            return next;
        });

        console.log('Updated KO observable for answerIdx:', answerIdx, 'questionIdx:', questionIdx, 'value:', value);
    };

    // Early return if no questions
    if (!questions?.length) {
        console.error('Questions is empty or missing', { questions, cfg });
        return <div>No questions data available</div>;
    }

    const labels = seriesLabels ?? [];

    return (
        <div>
            <h3>Chart Forecast Flexible</h3>
            <ForecastChart
                labels={labels}
                matrix={forecastMatrix}
                onPointChange={handlePointChange}
            />
        </div>
    );
}

export default ChartForecastFlexible;
