//MULTIPLE HTML

// const questions = [ 
//     { question: "How do you set a title of a webpages?", options: ["< title > Webpages < /title >", "< head > Webpages < /head > ", "< p > Webpages < / >", "< input >"], correctAnswer: "A" },
//     { question: "How can you create a line break of paragraph?", options: ["< br >", "< p > < /p > ", "< div > < /div >", "< input >"], correctAnswer: "A" },
//     { question: "How to make text bold?", options: ["< b > this is bold < /b >", "< strong > this is bold < /strong > ", "< bold > this is bold < /bold >", "< em > this is bold < /em>"], correctAnswer: "A" },
//     { question: "How to italicize text?", options: ["< i > italic < /i >", "< italic > italic < /italic >", "< em > italic < /em >", "< b > italic < /b >"], correctAnswer: "A" },
//     { question: "Which tag defines the largest heading?", options: ["< h1 > text < /h1 >", "< heading > text < /heading>", "< title > text < /title >", " < h2 > text < /h2 >"], correctAnswer: "A" },
//     { question: "Which tag defines the Smallest heading?", options: ["< h3 > text < /h3 >", "< h4 > text < /h4 >", "< h5 > text < /h5 >", " < h6 > text < /h6 >"], correctAnswer: "D" },
//     { question: "How to create a button?", options: ["< button > Click me < /button >", "< p > Click  me! < /p >", "< value > Click me! < /value >", " < botton > Click me! < botton >"], correctAnswer: "A" },
//     { question: "Which character indicates the end tag?", options: [" < ", " / ", " ! ", " > "], correctAnswer: "B" },
//     { question: "How can you create a paragraph?", options: ["< p > < /p >", " < div >  < /div >", "< hr >", " < br >"], correctAnswer: "A" },
//     { question: "How can you add a comment in HTML??", options: ["< !-- This is a comment -- >", "< -- This is a comment -- > ", "< -This is a comment - > ", " < This is a comment >"], correctAnswer: "A" },
//     { question: "Proper ways of creating a hyper link", options: ['< a href="htpp://www.Quizzical.Hub"> < /a > ', '< a href="http://www.Quizzical.Hub"> < /a >' , '< a="htpps://www.Quizzical.Hub"> < /a >', '< a href="https://www.Quizzical.Hub"> < /a >'], correctAnswer: "D" },
//     { question: "How to make an input field?", options: [ '< input type="name" name="username" >', '< input type="text" name="username" >', '< input type="value" object="username" >', '< input type="object" value="username" >'], correctAnswer: "B" },
//     { question: "which HTML elements is typically used to defined a navigation section??", options: ["< fieldset > < /fieldset >", "< header > < /header > ", "< nav > < /nav  >", "< footer >  < /footer >"], correctAnswer: "C" },
//     { question: "Which tag used to create a list of items?", options: ["< ul > < /ul >", "< li > < /li > ", "< dl > < /dl >", "< ol > < /ol >"], correctAnswer: "B" },
//     { question: "How do you do a footer in HTML?", options: ["< footer > < /footer >", "< section > < /section > ", "< fieldset > < /fieldset >", "< background >"], correctAnswer: "A" },
//     { question: "Which HTML tag is used to defined a container for inline elements?", options: ["< section > < /section >", "< span > < /span >", "< header > < /header >", "< div > < /div >"], correctAnswer: "B" },
//     { question: "Which element tag is used to group a block of content for styling?", options: ["< section > < /section > ", "< article > < /article > ", "< div > < /div >", "< block > < /block >"], correctAnswer: "C" },
//     { question: "Which attribute in the <a> tag is used to open the link in a new tab?", options: ['< target="_self">', '< target="_blank">', '< target="_parent">', '< target="_top">'], correctAnswer: "B" },
//     { question: "Which of the following tags is correct for adding an images in HTML?", options: ["< img >", "< images> ", "< pictures >", "< imgs >"], correctAnswer: "A" },
//     { question: "Which tag is used to defined a section of content that is related to a sidebar in HTML?", options: ["< aside >", "< footer >", "< nav >", "< section >"], correctAnswer: "A" },
//     { question: "Which of the following is NOT a valid input type in a HTML?", options: ["< text >", "< email >", "< checkbox >", "< select >"], correctAnswer: "D" },
//     { question: "Which tag is used to embed an external JavaScript file into HTML document?", options: [ ' < script src="script.js" > ', ' < link href="JavaScript.js >', ' < a href="JavaScript.js"> < /a > ','< script src="script.js" > < /script > '], correctAnswer:"D" },
//     { question: "Which of the following methods is the correct way to link an external CSS file to an HTML document?", options: ['  < link rel="stylesheet" href="Style.css"> ',' < link rel="stylesheet" href="CSS" > ', ' < link href="Style.css" > ','< a href="Style.css"> < /a >' ], correctAnswer: "A" },
//     { question: "which attribute in the <label> element is used to associate it with an input field?", options: [ 'id="name"', ' name="name" ', 'for="name"', ' type="name"' ], correctAnswer: "C" },
//     { question: "Which of the following is the correct way to call a whole div to an HTML element?", options: [' < div class="container"> < /div > ', '< div name="container"> < /div >  ', ' < div text="container"> < /div >  ','< div object="container"> < /div > '], correctAnswer: "A" },
// ];  

// let currentQuestion = 0;
// let score = 0;
// const nextButton = document.getElementById("next");
// const result = document.getElementById("result");
// const questionTitle = document.getElementById("questionTitle");

// function loadQuestion() {
// const currentQ = questions[currentQuestion];
// questionTitle.textContent = `Quiz no ${currentQuestion + 1}: ${currentQ.question}`;

// const cards = document.querySelectorAll(".card");
// currentQ.options.forEach((option, index) => {
//     cards[index].innerHTML = `<label>
//         <input type="radio" name="option" value="${String.fromCharCode(65 + index)}"> ${String.fromCharCode(65 + index)}. ${option}
//     </label>`;
// });
// }

// nextButton.addEventListener("click", function () {
// const selectedOption = document.querySelector('input[name="option"]:checked');

// if (!selectedOption) {
//     alert("Please select an answer!");
//     return;
// }

// if (selectedOption.value === questions[currentQuestion].correctAnswer) {
//     score++;
// }

// currentQuestion++;

// if (currentQuestion < questions.length) {
//     loadQuestion();
// } else {
//     result.textContent = `Your score : ${score} out of ${questions.length}`;
//     nextButton.disabled = true;

   

// }
// });

// loadQuestion();

const questions = [ 
    { question: "How do you set a title of a webpages?", options: ["< title > Webpages < /title >", "< head > Webpages < /head > ", "< p > Webpages < /p >", "< label > Webpages < /label >"], correctAnswer: "A" },
    { question: "How can you creat a line break of pharagraph?", options: ["< br >", "< p > < /p > ", "< div > < /div >", "< input >"], correctAnswer: "A" },
    { question: "How to make text bold?", options: ["< b > this is bold < /b >", "< strong > this is bold < /strong > ", "< bold > this is bold < /bold >", "< em > this is bold < /em>"], correctAnswer: "A" },
    { question: "How to italicize text?", options: ["< i > italic < /i >", "< italic > italic < /italic >", "< em > italic < /em >", "< b > italic < /b >"], correctAnswer: "A" },
    { question: "Which tag defines the largest heading?", options: ["< h1 > text < /h1 >", "< heading > text < /heading>", "< title > text < /title >", " < h2 > text < /h2 >"], correctAnswer: "A" },
    { question: "Which tag defines the Smallest heading?", options: ["< h3 > text < /h3 >", "< h4 > text < /h4 >", "< h5 > text < /h5 >", " < h6 > text < /h6 >"], correctAnswer: "D" },
    { question: "How to creat a button?", options: ["< button > Click me < /button >", "< p > Click  me! < /p >", "< value > Click me! < /value >", " < botton > Click me! < botton >"], correctAnswer: "A" },
    { question: "Which character indicates the end tag?", options: [" < ", " / ", " ! ", " > "], correctAnswer: "B" },
    { question: "How can you creat a pharagraph?", options: ["< p > < /p >", " < div >  < /div >", "< hr >", " < br >"], correctAnswer: "A" },
    { question: "How can you add a comment in HTML??", options: ["< !-- This is a comment -- >", "< -- This is a comment -- > ", "< -This is a comment - > ", " < This is a comment >"], correctAnswer: "A" },
    { question: "Propper ways of creating a hyper link", options: ['< a href="htpp://www.Quizical.Hub"> < /a > ', '< a href="http://www.Quizical.Hub"> < /a >' , '< a="htpps://www.Quizical.Hub"> < /a >', '< a href="https://www.Quizical.Hub"> < /a >'], correctAnswer: "D" },
    { question: "How to make an input field?", options: [ '< input type="name" name="username" >', '< input type="text" name="username" >', '< input type="value" object="username" >', '< input type="object" value="username" >'], correctAnswer: "B" },
    { question: "which HTML elements is typically used to defined a navigation section??", options: ["< fieldset > < /fieldset >", "< header > < /header > ", "< nav > < /nav  >", "< footer >  < /footer >"], correctAnswer: "C" },
    { question: "Which tag used to creat a list of items?", options: ["< ul > < /ul >", "< li > < /li > ", "< dl > < /dl >", "< ol > < /ol >"], correctAnswer: "B" },
    { question: "How do you do a footer in HTML?", options: ["< footer > < /footer >", "< section > < /secction > ", "< fieldset > < /fieldset >", "< background >"], correctAnswer: "A" },
    { question: "Which HTML tag is used to defined a container for inline elements?", options: ["< setion > < /section >", "< span > < /span >", "< header > < /header >", "< div > < /div >"], correctAnswer: "B" },
    { question: "Which element tag is used to group a block of content for styling?", options: ["< section > < /section > ", "< article > < /article > ", "< div > < /div >", "< block > < /block >"], correctAnswer: "C" },
    { question: "Which attribute in the <a> tag is used to open the link in a new tab?", options: ['< target="_self">', '< target="_blank">', '< target="_parent">', '< target="_top">'], correctAnswer: "B" },
    { question: "Which of the following tags is correct for adding an images in HTML?", options: ["< img >", "< images> ", "< pictures >", "< imgs >"], correctAnswer: "A" },
    { question: "Which tag is used to defined a section of content that is related to a sidebar in HTML?", options: ["< aside >", "< footer >", "< nav >", "< section >"], correctAnswer: "A" },
    { question: "Which of the following is NOT a valid input type in a HTML?", options: ["< text >", "< email >", "< checkbox >", "< select >"], correctAnswer: "D" },
    { question: "Which tag is used to embed an external JavaScript file into HTML doccument?", options: [ ' < script src="script.js" > ', ' < link href="JavaScript.js >', ' < a href="JavaScript.js"> < /a > ','< script src="script.js" > < /script > '], correctAnswer:"D" },
    { question: "Which of the following methods is the correct way to link an external CSS file to an HTML document?", options: ['  < link rel="stylesheet" href="Style.css"> ',' < link rel="stylesheet" href="CSS" > ', ' < link href="Style.css" > ','< a href="Style.css"> < /a >' ], correctAnswer: "A" },
    { question: "which attribute in the <label> element is used to associate it with an input field?", options: [ 'id="name"', ' name="name" ', 'for="name"', ' type="name"' ], correctAnswer: "C" },
    { question: "Which of the following is the correct way to call a whole div to an HTML element?", options: [' < div class="contrainer"> < /div > ', '< div name="contrainer"> < /div >  ', ' < div text="contrainer"> < /div >  ','< div object="contrainer"> < /div > '], correctAnswer: "A" },
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
        let currentPoints = localStorage.getItem(loggedInUser.username + "_html_choice");
        if (currentPoints === null) {
            currentPoints = 0;
        }
        currentPoints = parseInt(currentPoints) + score;
    
        localStorage.setItem(loggedInUser.username + "_html_choice", currentPoints);
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