import quizData from './quizData.js';

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('home-button').addEventListener('click', resetQuiz);

function startQuiz() {
    const selectedWeek = document.getElementById('week-select').value;
    let questions = [];

    if (selectedWeek === 'all') {
        questions = Object.values(quizData).flat(); // Collect questions from all weeks
        questions = shuffleArray(questions); // Shuffle all questions if 'all' is selected
    } else {
        questions = quizData[selectedWeek] || [];
    }

    renderQuiz(questions);
}

function renderQuiz(questions) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear previous quiz
    quizContainer.scrollTo(0, 0); // Reset scroll position

    questions.forEach((questionObj, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<h3>Question ${index + 1}:</h3><p>${questionObj.question}</p>`;
        
        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        questionObj.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectAnswer(optionElement, questionObj.correctAnswerIndex, i));
            optionsElement.appendChild(optionElement);
        });

        questionElement.appendChild(optionsElement);
        quizContainer.appendChild(questionElement);
    });

    document.getElementById('home-button').style.display = 'block'; // Show home button
}

function selectAnswer(selectedOption, correctAnswerIndex, selectedIndex) {
    const options = selectedOption.parentElement.children;
    for (let option of options) {
        option.classList.remove('correct', 'incorrect'); // Reset all options
    }

    if (selectedIndex === correctAnswerIndex) {
        selectedOption.classList.add('correct'); // Correct answer
    } else {
        selectedOption.classList.add('incorrect'); // Incorrect answer
        options[correctAnswerIndex].classList.add('correct'); // Highlight correct answer
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function resetQuiz() {
    document.getElementById('quiz-container').innerHTML = ''; // Clear quiz
    document.getElementById('home-button').style.display = 'none'; // Hide home button
}
