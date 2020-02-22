function Game() {
    this.correctTries = 0
    this.totalTries = 0
    this.lastTryWasCorrect = null
    this.questions = questions()
}

Game.prototype.score = function() {
    return `${this.correctTries}/${this.totalTries} tries`
}

Game.prototype.play = function() {
    switch (this.questions.askRandom(this.lastTryWasCorrect, this.score())) {
        case 'exit':
            alert('You exited the game :(')
            break
        case true:
            this.lastTryWasCorrect = true
            this.correctTries += 1
            this.replay()
            break
        case false:
            this.lastTryWasCorrect = false
            this.replay()
            break
        default:
            alert('500 this should never happen :(')
    }
}

Game.prototype.replay = function() {
    this.totalTries += 1
    this.play()
}
