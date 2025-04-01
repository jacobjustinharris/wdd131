const questions = [
    { category: "Animal Facts", points: [100, 200, 300, 400, 500], questions: [
        { q: "What is the fear of animals called?", a: "Zoophobia" },
        { q: "How many species of ants are there?", a: "12,000" },
        { q: "What is the most intelligent animal on Earth?", a: "Chimpanzee" },
        { q: "What is the largest animal on Earth?", a: "Blue Whale" },
        { q: "Who is man's best friend?", a: "Dog" }
    ]},
    { category: "History", points: [100, 200, 300, 400, 500], questions: [
        { q: "Who was the 12th president?", a: "Zachary Taylor" },
        { q: "When was the first camera invented?", a: "1816" },
        { q: "When was the United States of America founded?", a: "1776" },
        { q: "When was the first Bicycle invented?", a: "1817" },
        { q: "How old is the Sun?", a: "4.6 billion years" }
    ]},
    { category: "Riddles", points: [100, 200, 300, 400, 500], questions: [
        { q: "The more you take, the more you leave behind. What am I?", a: "Footsteps" },
        { q: "I speak without a mouth and hear without ears. What am I?", a: "An echo" },
        { q: "What has hands but cannot clap?", a: "A clock" },
        { q: "What has to be broken before you can use it?", a: "An egg" },
        { q: "What has a head, a tail, is brown, and has no legs?", a: "A penny" }
    ]},
    { category: "Food Facts", points: [100, 200, 300, 400, 500], questions: [
        { q: "What is the most widely eaten fish in the world?", a: "Herring" },
        { q: "Which fruit contains the most vitamin C?", a: "Guava" },
        { q: "What country is known for inventing pizza?", a: "Italy" },
        { q: "What is the most consumed drink in the world after water?", a: "Tea" },
        { q: "What is the only food that never spoils?", a: "Honey" }
    ]},
    { category: "Film Trivia", points: [100, 200, 300, 400, 500], questions: [
        { q: "What was the first feature-length animated movie ever released?", a: "Snow White and the Seven Dwarfs" },
        { q: "Who played Jack in Titanic?", a: "Leonardo DiCaprio" },
        { q: "What is the highest-grossing film of all time?", a: "Avatar" },
        { q: "Which movie features the song 'My Heart Will Go On'?", a: "Titanic" },
        { q: "What year was the first Star Wars movie released?", a: "1977" }
    ]}
];

const gameBoard = document.getElementById("game-board");
const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const showAnswerBtn = document.getElementById("show-answer");
const closeQuestionBtn = document.getElementById("close-question");

questions.forEach((category, colIndex) => {
    category.points.forEach((point, rowIndex) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerText = point;
        card.onclick = () => showQuestion(colIndex, rowIndex);
        gameBoard.appendChild(card);
    });
});

function showQuestion(col, row) {
    const question = questions[col].questions[row];
    questionText.innerText = question.q;
    answerText.innerText = question.a;
    answerText.classList.add("hidden");
    questionBox.classList.remove("hidden");
}

showAnswerBtn.onclick = () => answerText.classList.remove("hidden");
closeQuestionBtn.onclick = () => questionBox.classList.add("hidden");
