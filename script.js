let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("question-number");
const scoreText = document.getElementById("score");
const feedbackText = document.getElementById("answer-feedback");

function loadQuestion() {
    const current = questions[currentQuestion];

    if (!current) {
        return;
    }

    let answered = false;
    nextButton.disabled = true;
    nextButton.textContent = "Next";
    if (feedbackText) {
    feedbackText.textContent = "";
}

    questionText.textContent = current.question;
    optionsContainer.innerHTML = "";

    current.options.forEach((option) => {
        const button = document.createElement("button");

        button.textContent = option;
        button.type = "button";

        button.addEventListener("click", () => {
    if (option === current.answer) {
    score++;
    button.classList.add("correct");

    if (scoreText) {
        scoreText.textContent = `Score: ${score}`;
    }

    if (feedbackText) {
        feedbackText.textContent = "Correct answer!";
    }
} else {
    button.classList.add("incorrect");

    Array.from(optionsContainer.children).forEach((btn) => {
        if (btn.textContent === current.answer) {
            btn.classList.add("correct");
        }
    });

    if (feedbackText) {
        feedbackText.textContent = "Incorrect answer.";
    }
}

    answered = true;
    nextButton.disabled = false;

            Array.from(optionsContainer.children).forEach((btn) => {
                btn.disabled = true;
            });

            button.classList.add("selected");
        });

        optionsContainer.appendChild(button);
    });

    if (progressText) {
        progressText.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;
    }

    if (scoreText) {
    scoreText.textContent = `Score: ${score}`;
}

    nextButton.textContent =
        currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

nextButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        localStorage.setItem("quizScore", score);
        localStorage.setItem("quizTotal", questions.length);
        window.location.href = "result.html";
    }
});

loadQuestion();
