// //FILL IN THE BLANK CSS
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
            question1: "background-color",
            question2: "#id",
            question3: "font-size",
            question4: "padding",
            question5: "color",
            question6: "size",
            question7: "50",
            question8: "1px",
            question9: "align",
            question10: "type",
            question11: "flex",
            question12: "hover",
            question13: "pointer",
            question14: "family",
            question15: "height",
            question16: "px",
            question17: "width",
            question18: "contet",
            question19: "max-width",
            question20: "sizing",
            question21: "spacing",
            question22: "none",
            question23: "duration",
            question24: "position",
            question25: "visibility: hidden"
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
        let currentPoints = localStorage.getItem(loggedInUser.username + "_css_blank");
        if (currentPoints === null) {
            currentPoints = 0;
        }
        currentPoints = parseInt(currentPoints) + score;

        localStorage.setItem(loggedInUser.username + "_css_blank", currentPoints);

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