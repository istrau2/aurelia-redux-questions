import {inject, computedFrom} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';
import {GO_TO_PREVIOUS_QUESTION} from './action-types';

@inject(Store)
export class NavbarCustomElement {
    constructor(store) {
        this.store = store;
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

        this.questions = newState.questions;
        this.currentQuestionIndex = newState.currentQuestionIndex;
        this.answerIndexesByQuestionIndex = newState.answerIndexesByQuestionIndex;
    }

    goToIndex(index) {
        //if (index >= this.currentQuestionIndex) {
        //    return;
        //}

        this.store.dispatch({
            type: GO_TO_PREVIOUS_QUESTION,
            payload: {
                questionIndex: index
            }
        });
    }
}
