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

let questions = [
    {
        question: "What was the first toy to be advertised on television?",
        answers: [
            {option: "Playmobile!", answer: false},
            {option: "Mr. Potato Head", answer: true},
        ]
    },
    {
        question: "On a farm, what is a kid?",
        answers: [
            {option: "An adult person", answer: false},
            {option: "A baby goat", answer: true},
        ]
    },
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