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

Questions.prototype.askRandom = function(prevCorrect, score) {
    const questionIndex = Math.floor(Math.random() * this.questions.length)
    const currentTry = new Try(this.questions[questionIndex])
    currentTry.ask(prevCorrect, score)
    return currentTry
}