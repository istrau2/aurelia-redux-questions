/**
 * Created by istrauss on 12/15/2016.
 */

import * as actionTypes from './action-types';

export function rootReducer(previousState, action) {
    switch(action.type) {
        case actionTypes.NEXT_QUESTION:
            let nextState;

            if (previousState.currentQuestionIndex === previousState.questions.length) {
                nextState = {
                    currentQuestionIndex: 0,
                    answerIndexesByQuestionIndex: {}
                };
            }
            else {
                nextState = {
                    currentQuestionIndex: previousState.currentQuestionIndex + 1,
                    answerIndexesByQuestionIndex: {
                        ...previousState.answerIndexesByQuestionIndex,
                        ...{
                            [previousState.currentQuestionIndex]: action.payload.answerIndex
                        }
                    }
                };
            }

            return {
                ...previousState,
                ...nextState
            };

        case actionTypes.GO_TO_PREVIOUS_QUESTION:
            return {
                ...previousState,
                ...{
                    currentQuestionIndex: action.payload.questionIndex
                }
            };
    }

    return previousState;
}
