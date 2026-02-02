export type DemoCfg = { container: string };

type Props = { cfg: DemoCfg };

function Demo({ cfg }: Props) {
    return <div>Demo Chart!</div>;
}

export default Demo;
