//FILL IN THE BLANK HTML
// let currentSet = 1;
    
//     function nextSet() {

//     let unanswered = false;
//     let questions = document.querySelectorAll(`#questions-set${currentSet} .question input`);
    
//     for (let question of questions) {
//         if (question.value.trim() === "") {
//             unanswered = true;
//             break;
//         }
//     }

//     if (unanswered) {
//         alert("Please answer all the questions before proceeding.");
//         return;
//     }

//     document.getElementById(`questions-set${currentSet}`).style.display = "none";
    
//     currentSet++;
    
//     if (document.getElementById(`questions-set${currentSet}`)) {
//         document.getElementById(`questions-set${currentSet}`).style.display = "block";
//     }
    
//     if (currentSet === 5) {
//         document.querySelector("button[type='button']").textContent = "Submit";
//         document.querySelector("button[type='button']").setAttribute("onclick", "checkAnswers()");
//     }
// }
    
//     function checkAnswers() {
//         let answers = {
//             question1: "html",
//             question2: "body",
//             question3: "href",
//             question4: "src",
//             question5: "tr",
//             question6: "html",
//             question7: "head",
//             question8: "title",
//             question9: "meta",
//             question10: "style",
//             question11: "text",
//             question12: "img",
//             question13: "method",
//             question14: "href",
//             question15: "li",
//             question16: "li",
//             question17: "td",
//             question18: "class",
//             question19: "class",
//             question20: "type",
//             question21: "src",
//             question22: "href",
//             question23: "src",
//             question24: "src",
//             question25: "for"
//         };
        
//         let score = 0;
//         let result = document.getElementById('result');
        
//         for (let i = 1; i <= 25; i++) {
//             let answer = document.getElementById(`question${i}`).value.toLowerCase();
//             if (answer === answers[`question${i}`]) score++;
//         }

//         result.style.display = "block";
//         result.innerHTML = `Your Score is ${score}/25`;

        // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        // let currentPoints = localStorage.getItem(loggedInUser.username + "_html_blank");
        // if (currentPoints === null) {
        //     currentPoints = 0;
        // }
        // currentPoints = parseInt(currentPoints) + score;

        // localStorage.setItem(loggedInUser.username + "_html_blank", currentPoints);
//     }

let currentSet = 1;
    let incorrectAnswers = [];

    function nextSet() {
        let unanswered = false;
        let questions = document.querySelectorAll(`#questions-set${currentSet} .question input`);
        
        for (let question of questions) {
            if (question.value.trim() === "") {
                unanswered = true;
                break;
            }
        }

        if (unanswered) {
            alert("Please answer all the questions before proceeding.");
            return;
        }

        document.getElementById(`questions-set${currentSet}`).style.display = "none";
        
        currentSet++;
        
        if (document.getElementById(`questions-set${currentSet}`)) {
            document.getElementById(`questions-set${currentSet}`).style.display = "block";
        }

        if (currentSet === 5) {
            document.querySelector("button[type='button']").textContent = "Submit";
            document.querySelector("button[type='button']").setAttribute("onclick", "checkAnswers()");
        }
    }

    function back() {
        if(currentSet > 1){
            document.getElementById(`questions-set${currentSet}`).style.display = "none";
            currentSet--;
            document.getElementById(`questions-set${currentSet}`).style.display = "block";
        }
    }

    function checkAnswers() {
        let answers = {
            question1: "html",
            question2: "body",
            question3: "href",
            question4: "src",
            question5: "tr",
            question6: "html",
            question7: "head",
            question8: "title",
            question9: "meta",
            question10: "style",
            question11: "text",
            question12: "img",
            question13: "method",
            question14: "href",
            question15: "li",
            question16: "li",
            question17: "td",
            question18: "class",
            question19: "class",
            question20: "type",
            question21: "src",
            question22: "href",
            question23: "src",
            question24: "src",
            question25: "for"
        };

        let score = 0;
        let result = document.getElementById('result');
        let wrongAnswersHTML = "<h3>Incorrect Answers:</h3>";

        incorrectAnswers = [];

        for (let i = 1; i <= 25; i++) {
            let userAnswer = document.getElementById(`question${i}`).value.trim().toLowerCase();
            if (userAnswer === answers[`question${i}`]) {
                score++;
            } else {
                incorrectAnswers.push({
                    questionNumber: i,
                    userAnswer: userAnswer,
                    correctAnswer: answers[`question${i}`] || 'Not Available'
                });
            }
        }

        result.style.display = "block";
        if (score === 0) {
            result.innerHTML = `You didn't get any correct answers. Keep trying!`;
        } else if (score <= 10) {
            result.innerHTML = `Your score is ${score}/25. Nice effort, but there's room for improvement!`;
        } else if (score <= 20) {
            result.innerHTML = `Your score is ${score}/25. Well done! You're getting there.`;
        } else {
            result.innerHTML = `Your score is ${score}/25. Excellent! You really know your stuff!`;
        }

        if (incorrectAnswers.length > 0) {
            document.getElementById("view-incorrect").style.display = "block";
        }

        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        let currentPoints = localStorage.getItem(loggedInUser.username + "_html_blank");
        if (currentPoints === null) {
            currentPoints = 0;
        }
        currentPoints = parseInt(currentPoints) + score;
        
        localStorage.setItem(loggedInUser.username + "_html_blank", currentPoints);
    }

    function showIncorrectAnswers() {
        let result = document.getElementById('result');
        let wrongAnswersHTML = "<h3>Incorrect Answers:</h3>";

        for (let incorrect of incorrectAnswers) {
            wrongAnswersHTML += `<p>Question ${incorrect.questionNumber}: Your answer: <strong>${incorrect.userAnswer}</strong> | Correct answer: <strong>${incorrect.correctAnswer}</strong></p>`;
        }

        result.innerHTML += wrongAnswersHTML; 
        document.getElementById("view-incorrect").style.display = "none";
    }
