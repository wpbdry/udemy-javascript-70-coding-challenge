function Try(question) {
    this.question = question
    this.startTime = new Date()
    this.endTime = new Date()
    this.userAnswer = ''
}

Try.prototype.ask = function(prevCorrect, score) {
    this.startTime = Date.now()
    this.userAnswer = this.question.ask(prevCorrect, score)
    this.endTime = Date.now()
}

Try.prototype.time = function() {
    return this.endTime - this.startTime
}

Try.prototype.command = function() {
    if (safeWords().indexOf(this.userAnswer) != -1) return 'exit'
    if (this.userAnswer === 'help') return 'help'
    return null
}

Try.prototype.correct = function() {
    return this.question.checkAnswer(this.userAnswer)
}

Try.prototype.logToConsole = function(heading) {
    console.log(heading)
    const q = this.question
    console.log(q.question)
    console.log(`Possible answers:\n${q.optionsToString()}`)
    console.log(`Correct answer: ${q.answerIndex + 1}: ${q.options[q.answerIndex]}`)
    console.log(`Your answer: ${this.userAnswer}`)
    console.log(this.correct() ? 'Correct!' : 'Incorrect!')
    console.log(`Time: ${this.time() / 1000} seconds`)
    console.log('')
}