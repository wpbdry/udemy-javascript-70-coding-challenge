function play() {
    switch (questions().askRandom()) {
        case 'exit':
            alert('You exited the game :(')
            break
        case true:
            console.log('Correct!')
            play()
            break
        case false:
            console.log('Incorrect!')
            play()
            break
        default:
            alert('500 this should never happen :(')
    }
}
play()

/* IDEAS
- remember a history of questions and how you answered them
*/