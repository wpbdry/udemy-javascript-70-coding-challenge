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

Question.prototype.ask = function(correct, score) {
    let promptText = ''
    if (correct != null) {
        promptText += correct ? 'Correct!' : 'Incorrect!'
        promptText += '\n'
    }
    promptText += `${score} correct.\n\n${this.questionAndOptions()}`
    return prompt(promptText)
}

Question.prototype.checkAnswer = function(userAnswer) {
    return userAnswer == this.answerIndex + 1
}