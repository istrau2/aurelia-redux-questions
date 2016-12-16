import {inject} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';
import {NEXT_QUESTION} from './action-types';

@inject(Store)
export class QuestionCustomElement {

    chosenAnswerIndex = undefined;

    constructor(store) {
        this.store = store;

        this.update();
    }

    bind() {
        this.unsubcribe = this.store.subscribe(this.update.bind(this));
        this.update();
    }

    deactivate() {
        this.unsubcribe();
    }

    update() {
        const newState = this.store.getState();
        const newChosenAnswerIndex = newState.answerIndexesByQuestionIndex[newState.currentQuestionIndex];
        this.question = newState.questions[newState.currentQuestionIndex];
        this.chosenAnswerIndex = newChosenAnswerIndex ? newChosenAnswerIndex.toString() : undefined;
    }

    next() {
        this.store.dispatch({
            type: NEXT_QUESTION,
            payload: {
                answerIndex: parseInt(this.chosenAnswerIndex, 10)
            }
        });
    }
}
