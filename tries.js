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