(function() {
    const questions = setup()
    const userAnswerIsCorrect = questions.askRandom()
    if (userAnswerIsCorrect) console.log('Correct!')
    else console.log('Incorrect!')
})()


/* IDEAS
- display more human-friendly question numbers
*/
