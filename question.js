function Question(question, options, answerIndex) {
    this.question = question
    this.options = options
    this.answerIndex = answerIndex
}

Question.prototype.optionsToString = function() {
    return this.options.map((option, i) => `    ${i + 1}: ${option}`).join('\n')
}

Question.prototype.questionAndOptions = function() {
    return this.question + '\n' + this.optionsToString()
}

Question.prototype.ask = function() {
    return prompt(this.questionAndOptions())
}

Question.prototype.checkAnswer = function(userAnswer) {
    return userAnswer == this.answerIndex + 1
}

Question.prototype.askAndCheckAnswer = function() {
    return this.checkAnswer(this.ask())
}