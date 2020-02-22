(function() {
    function Question(question, options, answerIndex) {
        this.question = question
        this.options = options
        this.answerIndex = answerIndex
    }
    
    Question.prototype.optionsToString = function() {
        return this.options.map((option, i) => `${i}: ${option}`).join('\n')
    }

    Question.prototype.questionAndOptions = function() {
        return this.question + '\n' + this.optionsToString()
    }
    
    Question.prototype.ask = function() {
        console.log(this.questionAndOptions())
        return prompt('Your answer:')
    }
    
    Question.prototype.checkAnswer = function(userAnswer) {
        if (userAnswer == this.answerIndex) {
            console.log('Correct!')
            return
        }
        console.log('Incorrect!')
    }
    
    Question.prototype.askAndCheckAnswer = function() {
        this.checkAnswer(this.ask())
    }

    function Questions() {
        this.questions = []
    }

    Questions.prototype.add = function(question, options, answerIndex) {
        this.questions.push(new Question(question, options, answerIndex))
    }

    Questions.prototype.askRandom = function() {
        const questionIndex = Math.floor(Math.random() * this.questions.length)
        this.questions[questionIndex].askAndCheckAnswer()
    }
    
    const questions = new Questions()
    
    questions.add(
        'What is the capital city of South Africa?',
        ['Cape Town', 'Pretoria', 'All of the above'],
        2
    )
    questions.add(
        'What is the coolest university in the world?',
        ['HU', 'CODE', 'UCT', '42'],
        1
    )
    questions.add(
        'How many different gender profiles are there?',
        ['None', 'One', 'Two', 'Three', 'Five', 'Eight', 'Thirteen', 'Twenty-one', 'Infinite'],
        8
    )
    questions.add(
        'Is Windows a worthy operating system?',
        ['Yes', 'No'],
        1
    )
    questions.add(
        `Which of the following are food?
            a) Dog
            b) Cat
            c) Pig
            d) Cow
        `,
        ['a and b', 'a and c', 'b and c', 'c and d', 'None of the above'],
        4
    )
    questions.add(
        'What is the capital city of Germany?',
        ['Brandenburg', 'Cologne', 'Dresden', 'Berlin', 'Witzenhausen', 'Frankfurt', 'München'],
        3
    )
    questions.add(
        'What is the coolest programming language?',
        ['Python', 'Pearl', 'Ruby', 'JavaScript', 'C++', 'Go', 'PHP'],
        3
    )
    
    questions.askRandom()
})()


/* IDEAS
- refactor Question.prototype.checkAnswer into multiple functions
- display questions in the prompt, rather than in the console
- display more human-friendly question numbers
- create setup function to add questions
- refactor into multiple files
*/
