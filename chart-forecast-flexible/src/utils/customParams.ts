import { z } from 'zod';
import { historicalDataSchema } from '../../../shared/customParamTypes';

export const CustomParamsSchema = z.object({
    // Labels and axes
    customText: z.string().optional(),
    // xLabel: z.string().optional(),
    // yLabel: z.string().optional(),
    // xAxisType: z.enum(['category', 'linear', 'time']).optional(),
    // xTimeScale: z.string().optional(),

    // // Domain
    // xMin: z.coerce.number().optional(),
    // xMax: z.coerce.number().optional(),

    // // Data/config
    // defaultChartValues: json2DNumberArray,
    historicalData: historicalDataSchema,

    // // Interactions and visuals
    // yZoom: z.coerce.boolean().default(true),
    // yBuffer: z.coerce.number().default(2.0),
    // jitter: z.coerce.number().optional(),

    // // Bounds
    // yLowerBound: z.coerce.boolean().default(false),
    // yLowerBoundValue: z.coerce.number().optional(),
    // yUpperBound: z.coerce.boolean().default(false),
    // yUpperBoundValue: z.coerce.number().optional(),

    // Quantiles/monotonicity
    quantiles: z.coerce.boolean().default(false),
    // validateQuantiles: z.coerce.boolean().default(true),

    // quantileConnector: z.enum(['bar', 'area']).optional(),
    // monotonicity: z.string().optional(),
}).superRefine((val, ctx) => {
    // if (val.yLowerBound && val.yLowerBoundValue === undefined) {
    //     ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         path: ['yLowerBoundValue'],
    //         message: 'yLowerBoundValue is required when yLowerBound is true',
    //     });
    // }
    // if (val.yUpperBound && val.yUpperBoundValue === undefined) {
    //     ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         path: ['yUpperBoundValue'],
    //         message: 'yUpperBoundValue is required when yUpperBound is true',
    //     });
    // }
});

export type ParsedCustomParams = z.infer<typeof CustomParamsSchema>;

export function parseCustomParams(raw?: Record<string, unknown>): ParsedCustomParams {
    const input = raw ?? {};
    const parsed = CustomParamsSchema.safeParse(input);
    if (!parsed.success) {
        console.error('Invalid customParams:', parsed.error.flatten((issue) => issue.message));
        // Return schema defaults to keep the UI functional
        return CustomParamsSchema.parse({});
    }
    return parsed.data;
}