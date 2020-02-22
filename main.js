(function() {
    function Question(question, options, answerIndex) {
        this.question = question
        this.options = options
        this.answerIndex = answerIndex
    }
    
    Question.prototype.ask = function() {
        console.log(this.question)
        for (let i in this.options) {
            console.log(i + ': ' + this.options[i])
        }
        const userAnswer = prompt('Your answer:')
        this.checkAnswer(userAnswer)
    }
    
    Question.prototype.checkAnswer = function(userAnswer) {
        if (userAnswer == this.answerIndex) {
            console.log('Correct!')
            return
        }
        console.log('Incorrect!')
    }
    
    let questions = []
    
    questions.push(new Question(
        'What is the capital city of South Africa?',
        ['Cape Town', 'Pretoria', 'All of the above'],
        2
    ))
    questions.push(new Question(
        'What is the coolest university in the world?',
        ['HU', 'CODE', 'UCT', '42'],
        1
    ))
    questions.push(new Question(
        'How many different gender profiles are there?',
        ['None', 'One', 'Two', 'Three', 'Five', 'Eight', 'Thirteen', 'Twenty-one', 'Infinite'],
        8
    ))
    questions.push(new Question(
        'Is Windows a worthy operating system?',
        ['Yes', 'No'],
        1
    ))
    questions.push(new Question(
        `Which of the following are food?
            a) Dog
            b) Cat
            c) Pig
            d) Cow
        `,
        ['a and b', 'a and c', 'b and c', 'c and d', 'None of the above'],
        4
    ))
    questions.push(new Question(
        'What is the capital city of Germany?',
        ['Brandenburg', 'Cologne', 'Dresden', 'Berlin', 'Witzenhausen', 'Frankfurt', 'München'],
        3
    ))
    questions.push(new Question(
        'What is the coolest programming language?',
        ['Python', 'Pearl', 'Ruby', 'JavaScript', 'C++', 'Go', 'PHP'],
        3
    ))
    
    const askQuestion = function() {
        const questionIndex = Math.floor(Math.random() * questions.length)
        const question = questions[questionIndex]
        question.ask()
    }
    
    askQuestion()
})()


/* IDEAS
- refactor Question.prototype.ask into multiple functions
- askQuestion should be a method of a new Questions object
- refactor Question.prototype.checkAnswer into multiple functions
- display questions in the prompt, rather than in the console
- display more human-friendly question numbers
*/
