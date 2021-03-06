import {inject} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';
import {NEXT_QUESTION} from './action-types';

@inject(Store)
export class ResultsCustomElement {
    constructor(store) {
        this.store = store;
    }

    bind() {
        this.unsubcribe = this.store.subscribe(this.update.bind(this));
        this.update();
        this.calculateNumCorrect();
    }

    deactivate() {
        this.unsubcribe();
    }

    update() {
        const newState = this.store.getState();

        this.questions = newState.questions;
        this.answerIndexesByQuestionIndex = newState.answerIndexesByQuestionIndex;
    }

    calculateNumCorrect() {
        this.numCorrect = this.questions.reduce((_numCorrect, question, questionIndex) => {
            return this.answerIndexesByQuestionIndex[questionIndex] === question.correct_answer - 1 ? _numCorrect + 1 : _numCorrect;
        }, 0);
    }

    startOver() {
        this.store.dispatch({
            type: NEXT_QUESTION
        });
    }
}
