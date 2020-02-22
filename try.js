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
    return null
}

Try.prototype.correct = function() {
    return this.question.checkAnswer(this.userAnswer)
}