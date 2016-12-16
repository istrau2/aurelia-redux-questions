/**
 * Created by istrauss on 12/16/2016.
 */

export class IsNavigableValueConverter {
    toView(answerIndexesByQuestionIndex, questionIndex) {
        return questionIndex === 0 || answerIndexesByQuestionIndex[questionIndex - 1] || answerIndexesByQuestionIndex[questionIndex - 1] === 0;
    }
}

export class NegateValueConverter
{
    toView(value) {
        return !value;
    }
}
