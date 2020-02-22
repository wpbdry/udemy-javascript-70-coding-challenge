(function() {
    const questions = setup()
    const userAnswerIsCorrect = questions.askRandom()
    if (userAnswerIsCorrect) console.log('Correct!')
    else console.log('Incorrect!')
})()


/* IDEAS
- display questions in the prompt, rather than in the console
- display more human-friendly question numbers
*/
