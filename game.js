function Game() {
    this.questions = questions()
    this.tries = new Tries()
}

Game.prototype.score = function() {
    return `${this.tries.correct()}/${this.tries.total()} tries`
}

Game.prototype.play = function() {
    const currentTry = this.questions.askRandom(
        this.tries.total() ? this.tries.last().correct() : null,
        this.score()
    )
    switch (currentTry.command()) {
        case 'exit':
            alert('You exited the game :(')
            break
        case 'help':
            alert(`Enter the number corresponding to the correct answer.
Type 'exit' to stop playing or 'help' to see this prompt.`)
            this.play()
            break
        default:
            this.tries.add(currentTry)
            this.play()
    }
}