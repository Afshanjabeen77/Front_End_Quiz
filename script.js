const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "High-Level Text Markup Language", "Hyperlink Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to include external JavaScript files in an HTML document?",
        options: ["<script>", "<js>", "<javascript>", "<scripting>"],
        correctAnswer: "<script>"
    },
    {
        question: "What is the purpose of CSS (Cascading Style Sheets) in web development?",
        options: ["To define the structure of a webpage", "To add interactivity and functionality to a webpage", "To control the presentation and layout of a webpage", "To store data on the server"],
        correctAnswer: "To control the presentation and layout of a webpage"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "text-style"],
        correctAnswer: "color"
    },
    {
        question: "In JavaScript, what is the purpose of the 'addEventListener' method?",
        options: ["To create a new HTML element", "To change the background color of a webpage", "To bind event handlers to HTML elements", "To calculate mathematical expressions"],
        correctAnswer: "To bind event handlers to HTML elements"
    },
    {
        question: "What is the box model in CSS?",
        options: ["It defines the layout of text within a box.", "It specifies the dimensions of an HTML element.", "It describes how elements are displayed in a grid.", "It defines the spacing and layout of an element, including padding, border, and margin."],
        correctAnswer: "It defines the spacing and layout of an element, including padding, border, and margin."
    },
    {
        question: "Which CSS property is used to create rounded corners for an element?",
        options: ["border-radius", "corner-radius", "rounded-border", "box-corners"],
        correctAnswer: "border-radius"
    },
    {
        question: "What is the purpose of media queries in CSS?",
        options: ["To create animations and transitions", "To specify the fonts used in a webpage", "To apply styles based on the device's screen size and characteristics", "To control the z-index of HTML elements"],
        correctAnswer: "To apply styles based on the device's screen size and characteristics"
    },
    {
        question: "Which HTML element is used to define an unordered list?",
        options: ["<list>", "<ol>", "<ul>", "<li>"],
        correctAnswer: "<ul>"
    },
    {
        question: "What is the role of the Document Object Model (DOM) in web development?",
        options: ["It defines the structure of an HTML document.", "It provides a way to interact with HTML and XML documents through JavaScript.", "It controls the layout and styling of a webpage.", "It defines the content of a webpage."],
        correctAnswer: "It provides a way to interact with HTML and XML documents through JavaScript."
    }
];


const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-button");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const options = currentQuestion.options;
    optionsElement.innerHTML = "";

    options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionElement);
    });

    startTimer(30);
}

function startTimer(seconds) {
    let timeLeft = seconds;
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            checkAnswer(null);
        }
    }, 1000);
}

displayQuestion(); 

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.textContent = "";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    restartButton.style.display = "block";
}

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    resultElement.textContent = "";
    restartButton.style.display = "none";
    optionsElement.style.display = "block";
    submitButton.style.display = "block";
});

submitButton.addEventListener("click", () => {
    checkAnswer(null); 
});
