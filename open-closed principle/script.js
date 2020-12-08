// open for extention but closed for modification
// start version



function printQuiz (questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean' :
                console.log('1. True')
                console.log('1. False')
            break
            case 'multipleChoice' :
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`)
                })
            break
            case 'text':
                console.log('Answer: ________')
                break
        }
        console.log('')
    })

}

const questions = [
    {
        type: 'boolean',
        description: 'question1'
    },
    {
        type: 'multipleChoice',
        description: 'question2',
        options: ['opt1', 'opt2']
    }
]

printQuiz(questions)