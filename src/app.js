import {inject} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';

@inject(Store)
export class App {
    constructor(store) {
        this.store = store;

        this.store.subscribe(this.update.bind(this));
        this.update();
    }

    update() {
        const newState = this.store.getState();

        this.questions = newState.questions;
        this.currentQuestionIndex = newState.currentQuestionIndex;
    }
}
