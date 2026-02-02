import { createRoot } from 'react-dom/client';
import Demo, { type DemoCfg } from './components/Demo';

function App({ cfg }: { cfg: DemoCfg }) {
    return (
        <div>
            <Demo cfg={cfg} />
        </div>
    );
}

export function quorumInitJS(cfg: DemoCfg) {
    const aliasElements = document.querySelectorAll('.' + cfg.container);

    if (aliasElements.length === 1) {
        const container = aliasElements[0] as HTMLElement;

        const mountEl = document.createElement('div');
        container.appendChild(mountEl);

        const root = createRoot(mountEl);
        root.render(<App cfg={cfg} />);
    } else if (aliasElements.length === 0) {
        console.error('No element with class "' + cfg.container + '" found.');
    } else {
        console.error('More than one element with class "' + cfg.container + '" found.');
    }
}

declare global {
    interface Window {
        quorumCustomScripts?: Record<number, (cfg: DemoCfg) => void>;
    }
}

window.quorumCustomScripts = window.quorumCustomScripts || {};
window.quorumCustomScripts[77] = quorumInitJS;


