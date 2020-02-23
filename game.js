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
            this.exit()
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

Game.prototype.exit = function() {
    if (confirm('Game ended. Would you like to view the game history?')) {
        this.showTries()
    }
}

Game.prototype.showTries = function() {
    console.log('Game history:\n')
    this.tries.logToConsole()
    console.log(`Score: ${this.score()} correct!`)
    console.log(`Total time: ${this.tries.totalTime() / 1000} seconds.`)
    console.log(`Average time per try: ${this.tries.averageTime() / 1000} seconds.`)
    alert('Your game history has been logged to the console.')
}