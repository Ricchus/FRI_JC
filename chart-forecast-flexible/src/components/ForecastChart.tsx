import {
    CategoryScale,
    Chart,
    Colors,
    Legend,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip,
} from 'chart.js';
import dragDataPlugin from 'chartjs-plugin-dragdata';
import { useEffect, useRef } from 'react';

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    dragDataPlugin,
    Colors,
);

export function ForecastChart({
    labels,
    matrix,
    onPointChange,
}: {
    labels: string[];
    matrix: number[][];
    onPointChange: (answerIdx: number, questionIdx: number, value: number) => void;
}) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const seriesColors = ['#e76f51', '#2a9d8f'];
        const datasets = matrix.map((row, ai) => ({
            label: `Series ${ai + 1}`, // TODO: switch to labels
            data: row,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.2,
            borderColor: seriesColors[ai],
            backgroundColor: seriesColors[ai],
            pointBackgroundColor: seriesColors[ai],
            pointBorderColor: seriesColors[ai],
        }));

        const chart = new Chart(ref.current, {
            type: 'line',
            data: { labels, datasets },
            options: {
                animation: false,
                scales: {
                    y: { min: 0, max: 100 },
                },
                plugins: {
                    dragData: {
                        round: 1,
                        onDragEnd: (
                            _e: any,
                            datasetIndex: number,
                            index: number,
                            value: number
                        ) => {
                            onPointChange(datasetIndex, index, value);
                        },
                    },
                },
            } as any,
        });

        return () => chart.destroy();
    }, [labels, matrix, onPointChange]);

    return <canvas ref={ref} />;
}
