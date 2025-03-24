//MULTIPLE CHOICE

const questions = [ 
    { question: "What CSS stands for?", options: ["Colorful style sheet", "Creative style sheet", " Computer Style Sheet ", " Cascading Style Sheet"], correctAnswer: "D" },
    { question: "What is the correct HTml for referring to an external style sheet?", options: [" < stylesheet >Mystyle.css< /stylesheet > ",'< link rel="stylesheet" href="Style.css" >','< link rel="Style" link="Stylsheet.css" >','< script =src="Style.css"> < /script > '], correctAnswer: "B" },
    { question: "How to center a text on CSS?", options: ["text-align: center;", "align-items: center;","justify-content: center;","text-align: text center;"], correctAnswer: "A" },
    { question: "How to call out a <div> class on CSS?", options: [" .class { };", " #class { };", " ,class { }; ", " class { }; "], correctAnswer: "A" },
    { question: "How can you apply a background color to all <div> elements on a Webpages using CSS?", options: [" div { background-color: #ffff }; ", " div{ color: #ffff }; ", " div{ background: #ffff }; ", " div{ background-decoration: #ffff }; "], correctAnswer: "A" },
    { question: "How can you add space between a content?", options: [" margin: ", " padding: ", " add-space: ", " spacing: "], correctAnswer: "B" },
    { question: "Which is teh correct CSS syntax?", options: [" {body: color = black; } ", "  {body; color = black; } ", "  body { color: = black; } ", " body { color; = black; } "], correctAnswer: "C" },
    { question: "How to adjust a container?", options: [" position: relative; ", " position: absolute; ", " position: fixed; ", " position: sticky; "], correctAnswer: "A" },
    { question: "How color a text?", options: [" text-color: red ;", " text: black ; ", " color: yellow ; ", " color-text: white; "], correctAnswer: "C" },
    { question: "How adjust size of a text?", options: [" size: 3rem; ", " text-size: 3rem; ", " size-font: 3rem; ", " font-size: 3rem; "], correctAnswer: "D" },
    { question: "How to bold a text?", options: [" weight-text: ; ", " bold-text:  ", " font-weight: ; ", " font-bold: ; "], correctAnswer: "C" },
    { question: "How to round a corner of border?", options: [" border-corner: 1rem; ", " border-radius: 1rem; ", " border-sides: 1rem;", " border-round: 1rem; "], correctAnswer: "A" },
    { question: "How to do a box shadow?", options: [" box-shadow: ; ", " box-shading ", " box-shade: ; ", " box-background: ; "], correctAnswer: "A" },
    { question: "Which of these CSS positions is not right?", options: [" position: static; ", " position: flexible; ", " position: sticky; ", " position: fixed; "], correctAnswer: "B" },
    { question: "How to make a text shadow?", options: [" text-shadow: ; ", " shadow-text: ; ", " text-background: ;", "text-background-color: ; "], correctAnswer: "A" },
    { question: "Which of these are correct 2 selector for CSS style?", options: [" .class { };, #id{ } ;", " ,class { } ;, $id { };", "  class { };, id{ }  ", "  ;class { };, ]id{ }  "], correctAnswer: "A" },
    { question: "How to do a spacing latter?", options: [" latter-spacing ", " text-spacing ", " spacing ", " space-latter "], correctAnswer: "A" },
    { question: "How to add a border ?", options: [" border: 1rem solid red; ", " color-border: 1rem solid red;", " border: 1rem color: red ", " color: 1rem solid red; "], correctAnswer: "A" },
    { question: "Which CSS property is used to change the stacking order of elements on the page?", options: [" position ", " opacity ", " float ", " z-index "], correctAnswer: "D" },
    { question: "which of the following is used to hide the scrollbar in Webpage?", options: [" overflow: hidden; ", " display: none; ", " visibility: hidden; ", " overflow: visible; "], correctAnswer: "A" },
    { question: "How would you defined and use a CSS variable for the primary color of your website?", options: ["var (--primary-color: #3498db); ", " --primary-color: #3498db; ", " :root{ --primary-color:}; ", " primary-color: #3498db; "], correctAnswer: "C" },
    { question: "What is the purpose of the grid-template-columns?", options: [" grid-template-columns 1fr 1fr 1fr", " grid-template-columns: repeat(3, 1fr) ", "grid-template-columns: (3, 1fr) ", " grid-template-columns: repeat 3, 1fr; "], correctAnswer: "B" },
    { question: "Which is the correct normal media queries?", options: [" @media only screen and (max-width: 1px) { }; ", " @media and screen only to (max-width: 1px){ }; ", " @media only and (max - width: 1px)", " @media only screen (max-width: 1px) "], correctAnswer: "A" },
    { question: "How can you apply difference styles for mobile devices with a maximum width of 768px?", options: [" @media (min-width: 768px)", " @media only screen and (max-width: 768px)", "  @media only screen and (width: 768px) ", "  @media only screen and (min-width: 1px) "], correctAnswer: "B" },
    { question: "What is the correct CSS style for content spacing?", options: [" padding ", " margin ", " space ", " con-space "], correctAnswer: "B" },
];  


let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");
const resultModal = document.getElementById("resultModal");
const closeModal = document.querySelector(".close");
const finalResult = document.getElementById("finalResult");
const questionTitle = document.getElementById("questionTitle");

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionTitle.textContent =` Question ${currentQuestion + 1}: ${currentQ.question}`;

    const cards = document.querySelectorAll(".card");
    currentQ.options.forEach((option, index) => {
        cards[index].innerHTML = `<label>
            <input type="radio" name="option" value="${String.fromCharCode(65 + index)}"> ${String.fromCharCode(65 + index)}. ${option}
        </label>`;
    });
}

backButton.addEventListener("click", function () {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

nextButton.addEventListener("click", function () {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    if (selectedOption.value === questions[currentQuestion].correctAnswer) {
        score++;
    } else {
        incorrectAnswers.push({
            question: questions[currentQuestion].question,
            userAnswer: selectedOption.value,
            correctAnswer: questions[currentQuestion].correctAnswer
        });
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();

        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        let currentPoints = localStorage.getItem(loggedInUser.username + "_css_choice");
        if (currentPoints === null) {
            currentPoints = 0;
        }
        currentPoints = parseInt(currentPoints) + score;
    
        localStorage.setItem(loggedInUser.username + "_css_choice", currentPoints);
    }

});

function showResult() {
    let resultContent = `You scored: ${score} out of ${questions.length}.<br><br>`;
    resultContent += `<strong>Incorrect  <br> <br> Answers:</strong>  <br> <br>` ;

    if (incorrectAnswers.length > 0) {
        incorrectAnswers.forEach((answer, index) => {
            resultContent += `<strong>${index + 1}:</strong> ${answer.question}<br>`;
            resultContent +=  `<br> <strong>Your Answer:</strong> ${answer.userAnswer} <br> <br> <strong>Correct Answer:</strong> ${answer.correctAnswer} <br><br>`;
        });
    } else {
        resultContent += "No incorrect answers! Great job!";
    }

    finalResult.innerHTML = resultContent;
    resultModal.style.display = "block";
}

closeModal.addEventListener("click", function () {
    resultModal.style.display = "none";

});

loadQuestion();
