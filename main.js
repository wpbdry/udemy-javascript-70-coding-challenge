(function() {
    const questions = setup()
    const userAnswerIsCorrect = questions.askRandom()
    if (userAnswerIsCorrect) console.log('Correct!')
    else console.log('Incorrect!')
})()