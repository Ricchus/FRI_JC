import * as ko from 'knockout';
import { quorumInitJS } from './index';

const questionsJson = [
    {
        questionId: 115184,
        setId: 10173,
        name: '2026-01-01',
        text: 'First series description',
        answers: [
            {
                text: 'Item 1',
                answerId: 1,
                currentUserForecast: 10,
                defaultValue: 'blank',
                outcome: null,
                conditionalData: null,
            },
            {
                text: 'Item 2',
                answerId: 2,
                currentUserForecast: 15,
                defaultValue: 'blank',
                outcome: null,
                conditionalData: null,
            },
        ],
        currentUserRationales: [],
        teammateComments: [],
        forecastTotal: 0,
        units: null,
        arrayOfUserForecasts: [],
        primaryQuestionIds: [],
        savedCurrentForecast: [null, null, null],
        groundTruth: [],
        altId: 1764,
        altName: 'Number (1)',
    },
    {
        questionId: 115185,
        setId: 10173,
        name: '2028-01-01',
        text: 'Second series description',
        answers: [
            {
                text: 'Item 1',
                answerId: 3,
                currentUserForecast: 15,
                defaultValue: 'blank',
                outcome: null,
                conditionalData: null,
            },
            {
                text: 'Item 2',
                answerId: 4,
                currentUserForecast: 15,
                defaultValue: 'blank',
                outcome: null,
                conditionalData: null,
            },
        ],
        currentUserRationales: [],
        teammateComments: [],
        forecastTotal: 0,
        units: null,
        arrayOfUserForecasts: [],
        primaryQuestionIds: [],
        savedCurrentForecast: [null, null, null],
        groundTruth: [],
        altId: 1765,
        altName: 'Number (2)',
    },
    {
        questionId: 115186,
        setId: 10173,
        name: '2029-01-01',
        text: 'Third series description',
        answers: [
            {
                text: 'Item 1',
                answerId: 5,
                currentUserForecast: 80,
                defaultValue: 'blank',
                outcome: null,
                conditionalData: null,
            },
            {
                text: 'Item 2',
                answerId: 6,
                currentUserForecast: 80,
                defaultValue: 'blank',
                outcome: null,
                conditionalData: null,
            },
        ],
        currentUserRationales: [],
        teammateComments: [],
        forecastTotal: 0,
        units: null,
        arrayOfUserForecasts: [],
        primaryQuestionIds: [],
        savedCurrentForecast: [null, null, null],
        groundTruth: [],
        altId: 1765,
        altName: 'Number (2)',
    },
];

// The parts of the observable that we use in the graph.
const questions = questionsJson.map((q) => ({
    questionId: q.questionId,
    name: ko.observable(q.name),
    text: ko.observable(q.text),
    answers: ko.observableArray(
        q.answers.map((a) => ({
            text: ko.observable(a.text),
            answerId: ko.observable(a.answerId),
            currentUserForecast: ko.observable(a.currentUserForecast),
        })),
    ),
    forecastTotal: ko.observable(q.forecastTotal),
}));

document.addEventListener('DOMContentLoaded', function () {
    const cfg = {
        container: 'chart-forecast-flexible-container',
        customParams: {
            customText: 'Variant 1',
            historicalData: [{"date": "2023-01-01", "value": 10}],
        },
        questions: questions,
    } as const;

    quorumInitJS(cfg as any);
});
