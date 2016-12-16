/**
 * Created by istrauss on 12/15/2016.
 */

import * as actionTypes from './action-types';

export function rootReducer(state, action) {
    let nextState = {};

    switch(action.type) {
        case actionTypes.NEXT_QUESTION:
            nextState = {
                currentQuestionIndex: state.currentQuestionIndex === state.questions.length ? 0 : state.currentQuestionIndex + 1,
                answerIndexesByQuestionIndex: state.currentQuestionIndex === state.questions.length ? {} : state.answerIndexesByQuestionIndex
            };
            break;

        case actionTypes.GO_TO_QUESTION:
            nextState = {
                currentQuestionIndex: action.payload.questionIndex
            };
            break;

        case actionTypes.ANSWER_QUESTION:
            nextState = {
                answerIndexesByQuestionIndex: {
                    ...state.answerIndexesByQuestionIndex,
                    ...{
                        [state.currentQuestionIndex]: action.payload.answerIndex
                    }
                }
            };
            break;
    }

    return {
        ...state,
        ...nextState
    };
}
