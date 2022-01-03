/**
 * Variables that represent the elements in my document that I will use
 */
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion = 0;
let score = 0;

/**
 * Questions and answers section
 */
let questions = [
    
    {
        question: "What does “www” stand for in a website browser?",
        answers: [
            {option: "World Wide Web", answer: true},
            {option: "Were When Was", answer: false},
        ]
    },
    {
        question: "Which country invented ice cream?",
        answers: [
            {option: "Italy of course! Gelato gelato", answer: false},
            {option: "China", answer: true},
        ]
    },
    {
        question: "What is the rarest M&M color?",
        answers: [
            {option: "Brown", answer: true},
            {option: "Green", answer: false},
        ]
    }
]

/**
 * Calls the functions when clicked on
 */
submitBtn.addEventListener("click", submit);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
restartBtn.addEventListener("click", restart);

/**
 * Function starts when the page loads and the script gets excecuted
 */
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    prevBtn.classList.add("hide");
}

beginQuiz();

function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next() {
    currentQuestion++;
    if(currentQuestion >2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion <2) {
            next();
        }
    }

    prevBtn.classList.remove("hide");
}

function submit() {
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    questionText.innerHTML ="Congratualtions on completing the Quiz!";
}