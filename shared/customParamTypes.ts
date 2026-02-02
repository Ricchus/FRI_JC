import { z } from 'zod';

export const jsonNumberArray = z.preprocess((v) => {
    if (typeof v === 'string') {
        try { return JSON.parse(v); } catch { return []; }
    }
    return v;
}, z.array(z.number()).default([]));

export const json2DNumberArray = z.preprocess((v) => {
    if (typeof v === 'string') {
        try { return JSON.parse(v); } catch { return []; }
    }
    return v;
}, z.array(z.array(z.number())).default([]));

export const jsonUnknownArray = z.preprocess((v) => {
    if (typeof v === 'string') {
        try { return JSON.parse(v); } catch { return []; }
    }
    return v;
}, z.array(z.unknown()).default([]));

export const historicalDataSchema = z.preprocess((v) => {
    if (typeof v === 'string') {
        try { return JSON.parse(v); } catch { return []; }
    }
    return v;
}, z.array(z.object({
    date: z.string(),
    value: z.number(),
})).default([]));
