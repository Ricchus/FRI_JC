export type Answer = {
    text: () => string;
    currentUserForecast: {
        (): number;
        (value: number): void;
        subscribe: (callback: (value: number) => void) => { dispose: () => void };
    };
};
export type Question = {
    questionId: number;
    name: () => string;
    answers: () => Answer[];
};

export type Questions = Question[];