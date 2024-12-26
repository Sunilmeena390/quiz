// container first////////

let userCreated = false;
const box = document.querySelector(".box");
const userInput = document.querySelector("#username");
const createUserButton = document.querySelector(".createuser");
const quitButton = document.querySelector(".quit-btn");
createUserButton.addEventListener("click", () => {
    box.style.display = "block";
});

quitButton.addEventListener("click", () => {
    box.style.display = "none";
});

function create() {
    const usernameValue = userInput.value.trim();

    if (usernameValue === "") {
        alert("Please enter a username.");
        return;
    }

    createUserButton.textContent = usernameValue;
    box.style.display = "none";
    userCreated = true;
    alert("USER CREATED SUCCESSFULLY");
}

function startQuiz() {
    if (!userCreated) {
        alert("PLEASE CREAT USER .");
        return;
    }


}

// container second///////////


const homebutton = document.getElementById("home-button");


function startQuiz() {
    if (!userCreated) {
        alert("PLEASE CREATE A USER.");
        return;
    }

    // Hide the first container and show the second container
    document.getElementById("first-container").style.display = "none";
    document.getElementById("second-container").style.display = "block";
}

homebutton.addEventListener("click", (home) => {
    home.preventDefault();
    document.getElementById("first-container").style.display = "block";
    document.getElementById("second-container").style.display = "none";
})



// const questions = {
//     Music: [
//         { question: "Who is known as the King of Pop?", answers: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"], correct: 0 },
//         { question: "Which instrument has 88 keys?", answers: ["Piano", "Guitar", "Violin", "Drum"], correct: 0 },
//         { question: "What is the term for a group of singers?", answers: ["Choir", "Band", "Orchestra", "Trio"], correct: 0 },
//         { question: "Who composed 'Fur Elise'?", answers: ["Beethoven", "Mozart", "Bach", "Chopin"], correct: 0 },
//         { question: "What is the highest male voice type?", answers: ["Tenor", "Baritone", "Bass", "Alto"], correct: 0 },
//     ],
//     "Modern Art": [
//         { question: "Who painted 'The Persistence of Memory'?", answers: ["Salvador Dalí", "Pablo Picasso", "Van Gogh", "Da Vinci"], correct: 0 },
//         { question: "What art movement is Andy Warhol known for?", answers: ["Pop Art", "Cubism", "Impressionism", "Surrealism"], correct: 0 },
//         // Add more questions for Modern Art
//     ],
//     Coding: [
//         { question: "What does HTML stand for?", answers: ["HyperText Markup Language", "Hyper Transfer Markup Language", "HyperText Makeup Language", "HighText Markup Language"], correct: 0 },
//         { question: "Which programming language is known as the 'language of the web'?", answers: ["JavaScript", "Python", "C++", "Java"], correct: 0 },
//         // Add more questions for Coding
//     ],
// };

// let currentTopic = "";
// let currentQuestionIndex = 0;
// let score = 0;
// let timerInterval;

// function startQuiz(topic) {
//     currentTopic = topic;
//     currentQuestionIndex = 0;
//     score = 0;

//     document.getElementById("topics").classList.add("hidden");
//     document.getElementById("quiz").classList.remove("hidden");

//     showQuestion();
// }

// function showQuestion() {
//     const topicQuestions = questions[currentTopic];
//     if (currentQuestionIndex >= topicQuestions.length) {
//         endQuiz();
//         return;
//     }

//     const questionObj = topicQuestions[currentQuestionIndex];
//     document.getElementById("question").textContent = questionObj.question;

//     const answersDiv = document.getElementById("answers");
//     answersDiv.innerHTML = "";
//     questionObj.answers.forEach((answer, index) => {
//         const button = document.createElement("button");
//         button.textContent = answer;
//         button.onclick = () => checkAnswer(index);
//         answersDiv.appendChild(button);
//     });

//     startTimer();
// }

// function startTimer() {
//     let timeLeft = 10;
//     const timerElement = document.getElementById("timer");
//     timerElement.textContent = `Time left: ${timeLeft}s`;

//     clearInterval(timerInterval);
//     timerInterval = setInterval(() => {
//         timeLeft--;
//         timerElement.textContent = `Time left: ${timeLeft}s`;

//         if (timeLeft <= 0) {
//             clearInterval(timerInterval);
//             currentQuestionIndex++;
//             showQuestion();
//         }
//     }, 1000);
// }

// function checkAnswer(index) {
//     const topicQuestions = questions[currentTopic];
//     if (index === topicQuestions[currentQuestionIndex].correct) {
//         score++;
//     }
//     currentQuestionIndex++;
//     showQuestion();
// }

// function endQuiz() {
//     clearInterval(timerInterval);
//     document.getElementById("quiz").classList.add("hidden");
//     document.getElementById("result").classList.remove("hidden");
//     document.getElementById("score").textContent = score;
// }

// function restartQuiz() {
//     document.getElementById("result").classList.add("hidden");
//     document.getElementById("topics").classList.remove("hidden");
// }
