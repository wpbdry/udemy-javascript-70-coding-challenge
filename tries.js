function Tries() {
    this.tries = []
}

Tries.prototype.add = function(t) {
    this.tries.push(t)
}

Tries.prototype.correct = function() {
    return this.tries.reduce((n, t) => n + t.correct(), 0)
}

Tries.prototype.total = function() {
    return this.tries.reduce((n, t) => n + !t.command(), 0)
}

Tries.prototype.last = function() {
    return this.tries[this.tries.length - 1]
}

Tries.prototype.logToConsole = function() {
    this.tries.forEach((t, i) => t.logToConsole(`Try #${i + 1}:`))
}

Tries.prototype.totalTime = function() {
    let time = 0
    for (let i in this.tries) time += this.tries[i].time()
    return time
}

Tries.prototype.averageTime = function() {
    return this.totalTime() / this.total()
}