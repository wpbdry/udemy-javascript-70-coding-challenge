function setup() {
    const data = [
        {
            question: 'What is the capital city of South Africa?',
            options: ['Cape Town', 'Pretoria', 'All of the above'],
            answerIndex: 2
        },
        {
            question: 'What is the coolest university in the world?',
            options: ['HU', 'CODE', 'UCT', '42'],
            answerIndex: 1
        },
        {
            question: 'How many different gender profiles are there?',
            options: ['None', 'One', 'Two', 'Three', 'Five', 'Eight', 'Thirteen', 'Twenty-one', 'Infinite'],
            answerIndex: 8
        },
        {
            question: 'Is Windows a worthy operating system?',
            options: ['Yes', 'No'],
            answerIndex: 1
        },
        {
            question: `Which of the following are food?
        a) Dog
        b) Cat
        c) Pig
        d) Cow`,
            options: ['a and b', 'a and c', 'b and c', 'c and d', 'None of the above'],
            answerIndex: 4
        },
        {
            question: 'What is the capital city of Germany?',
            options: ['Brandenburg', 'Cologne', 'Dresden', 'Berlin', 'Witzenhausen', 'Frankfurt', 'München'],
            answerIndex: 3
        },
        {
            question: 'What is the coolest programming language?',
            options: ['Python', 'Pearl', 'Ruby', 'JavaScript', 'C++', 'Go', 'PHP'],
            answerIndex: 3
        }
    ]
    
    const questions = new Questions()
    questions.addMultiple(data)
    return questions
}