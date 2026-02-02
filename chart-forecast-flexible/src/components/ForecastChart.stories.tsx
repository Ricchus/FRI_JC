import type { Meta, StoryObj } from '@storybook/react';
import { ForecastChart } from './ForecastChart';

const meta: Meta<typeof ForecastChart> = {
    title: 'Charts/ForecastChart',
    component: ForecastChart,
    args: {
        labels: ['2026', '2027', '2028'],
        matrix: [
            [10, 20, 30],
            [15, 25, 35],
        ],
        onPointChange: () => {},
    },
};

export default meta;

type Story = StoryObj<typeof ForecastChart>;

export const Default: Story = {};
