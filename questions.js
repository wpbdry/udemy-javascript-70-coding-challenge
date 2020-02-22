function Questions() {
    this.questions = []
}

Questions.prototype.add = function(question, options, answerIndex) {
    this.questions.push(new Question(question, options, answerIndex))
}

Questions.prototype.addMultiple = function(data) {
    for (const i in data) {
        const question = data[i]
        this.add(question.question, question.options, question.answerIndex)
    }
}

Questions.prototype.askRandom = function() {
    const questionIndex = Math.floor(Math.random() * this.questions.length)
    this.questions[questionIndex].askAndCheckAnswer()
}