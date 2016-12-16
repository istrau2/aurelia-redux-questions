/**
 * Created by istrauss on 12/15/2016.
 */

import * as actionTypes from './action-types';

export function rootReducer(state, action) {
    switch(action.type) {
        case actionTypes.NEXT_QUESTION:
            let nextState;

            if (state.currentQuestionIndex === state.questions.length) {
                nextState = {
                    currentQuestionIndex: 0,
                    answerIndexesByQuestionIndex: {}
                };
            }
            else {
                nextState = {
                    currentQuestionIndex: state.currentQuestionIndex + 1,
                    answerIndexesByQuestionIndex: {
                        ...state.answerIndexesByQuestionIndex,
                        ...{
                            [state.currentQuestionIndex]: action.payload.answerIndex
                        }
                    }
                };
            }

            return {
                ...state,
                ...nextState
            };

        case actionTypes.GO_TO_PREVIOUS_QUESTION:
            return {
                ...state,
                ...{
                    currentQuestionIndex: action.payload.questionIndex
                }
            };
    }

    return state;
}
