import {inject} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';

@inject(Store)
export class App {
    constructor(store) {
        this.store = store;
    }

    activate() {
        this.update();
        this.unsubcribe = this.store.subscribe(this.update.bind(this));
    }

    deactivate() {
        this.unsubcribe();
    }

    update() {
        const newState = this.store.getState();

        this.questions = newState.questions;
        this.currentQuestionIndex = newState.currentQuestionIndex;
    }
}
