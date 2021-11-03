const questions = [
    {
        question: 'How old is Marcin?',
        a: '10',
        b: '24',
        c: '55',
        d: '27',
        correct: 'b'
    }, {
        question: 'What is my favourite programming language?',
        a: 'JavaScript',
        b: 'Python',
        c: 'PHP',
        d: 'C#',
        correct: 'a'
    }, {
        question: 'What is my favourite movie?',
        a: 'Lord of the Rings: Fellowship of the Ring',
        b: 'Matrix',
        c: 'Gladiator',
        d: 'The Godfather II',
        correct: 'a'

    }, {
        question: 'What is my favourite game of all time?',
        a: 'Gothic II',
        b: 'Planescape Torment',
        c: 'Witcher 3',
        d: 'Fortnite',
        correct: 'a'
    }, {
        question: 'What was the first country I ever visited?',
        a: 'Germany',
        b: 'Italy',
        c: 'England',
        d: 'Greece',
        correct: 'c'
    }, {
        question: 'What is my most beloved dog breed?',
        a: 'German Shepherd',
        b: 'English Mastiff',
        c: 'Border Collie',
        d: 'Husky',
        correct: 'a'
    }, {
        question: 'What is my favourite TV show?',
        a: 'Game of Thrones? Surely not after season 8!',
        b: 'The Wire',
        c: 'The Last Kingdom',
        d: 'Breaking Bad',
        correct: 'b'
    }

];



const quizSelector = document.getElementById('quiz')
const answerss = document.querySelectorAll('.answer')
const questionHeader = document.querySelector('.quiz-header')

const questionEl = document.getElementById('question')

const aOption = document.getElementById('a-text')
const bOption = document.getElementById('b-text')
const cOption = document.getElementById('c-text')
const dOption = document.getElementById('d-text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let answer = '';
let score = 0;

loadQuiz()




function loadQuiz() {

    deselect()

    const currentQuestion = questions[currentQuiz];
    questionEl.innerHTML = currentQuestion.question;


    aOption.innerHTML = currentQuestion.a;

    bOption.innerHTML = currentQuestion.b;

    cOption.innerHTML = currentQuestion.c;

    dOption.innerHTML = currentQuestion.d;



}


function deselect() {
    answerss.forEach((answers) => {
        answers.checked = false;
    })
}
function selectedQuestion() {


    let answer = ''
    answerss.forEach((e) => {
        if (e.checked) {
            answer = e.id;
        }
    })

    return answer
}
submitBtn.addEventListener('click', () => {

    const answer = selectedQuestion()

    if (answer) {
        if (answer === questions[currentQuiz].correct) {
            score++;
            loadQuiz();

        }

        currentQuiz++;
        if (currentQuiz < questions.length) {
            loadQuiz();
        }

        else {
            quizSelector.innerHTML = `<h1>You've got  ${score}/${questions.length} questions right</h1>  <button onclick="location.reload()">Reload</button>`

        }
    }


});


