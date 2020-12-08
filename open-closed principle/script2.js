// open for extention but closed for modification

//  we want to be able to add more questions with different types as well
// the idea is to never should change the code in the main class
// but have the ability to add new types with no changes in the previous logic
// solution: break code from switch statemnt into new classes

class BooleanQuestion {
    constructor (description){
        this.description = description
    }
    printQuestionChoices() {
        console.log('1.True')
        console.log('1. False')
    }
}

class MultipleChoiceQuestion {
    constructor (description, options) {
        this.description = description
        this.options = options
    }
    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}

class TextQuestion {
    constructor (description) {
        this.description = description
    }
    printQuestionChoices() {
        console.log('Answer: ________')
    }
}

class RangeQuestion {
    constructor (description) {
        this.description = description
    }
    printQuestionChoices() {
        console.log('Minimum: ____')
        console.log('Maximum: ____')
    }
}

function printQuiz (questions) {
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoices()
        console.log('')
    })
}

const questions = [
   new BooleanQuestion('Question1'),
   new MultipleChoiceQuestion('question2', ['answer1', 'answer2']),
   new RangeQuestion('question3'),
   new TextQuestion('question4')
]

printQuiz(questions)