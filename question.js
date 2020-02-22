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