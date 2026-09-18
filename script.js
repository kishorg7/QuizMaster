let currentQuestion = 0;
let score = 0;
let answered = false;

function calculatePercentage(score, total) {
    if (total === 0) {
        return 0;
    }

    return (score / total) * 100;
}

function resetQuizState() {
    currentQuestion = 0;
    score = 0;
    localStorage.removeItem("quizScore");
    localStorage.removeItem("quizTotal");
}

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const scorePercentageText = document.getElementById("score-percentage");

if (scorePercentageText) {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");

    if (savedScore !== null && savedTotal !== null) {
        const percentage = calculatePercentage(
    Number(savedScore),
    Number(savedTotal)
);

        scorePercentageText.textContent =
    `Percentage: ${percentage.toFixed(1)}%`;
    }
}

const progressText = document.getElementById("question-number");
const scoreText = document.getElementById("score");
const feedbackText = document.getElementById("answer-feedback");

function saveQuizResult() {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", questions.length);
}

function finishQuiz() {
    saveQuizResult();
    window.location.href = "result.html";
}

function updateScoreDisplay() {
    if (scoreText) {
        scoreText.textContent = `Score: ${score}`;
    }
}

function updateProgressDisplay() {
    if (progressText) {
        progressText.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;
    }
}

function disableAnswerButtons() {
    Array.from(optionsContainer.children).forEach((btn) => {
        btn.disabled = true;
    });
}

function loadQuestion() {
    if (!questions || questions.length === 0) {
        return;
    }

    const current = questions[currentQuestion];

    if (!current) {
        return;
    }

    answered = false;
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
    if (answered) {
        return;
    }

    if (option === current.answer) {
    score++;
    button.classList.add("correct");

    updateScoreDisplay();

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

            disableAnswerButtons();

            button.classList.add("selected");
        });

        optionsContainer.appendChild(button);
    });

    updateProgressDisplay();

    if (scoreText) {
    scoreText.textContent = `Score: ${score}`;
}

    nextButton.textContent =
        currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        finishQuiz();
    }
    });
}

if (questionText && optionsContainer && nextButton) {
    resetQuizState();
    loadQuestion();
}

const finalScoreText = document.getElementById("final-score");

if (finalScoreText) {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");

    if (savedScore !== null && savedTotal !== null) {
        finalScoreText.textContent =
            `Your Score: ${savedScore} / ${savedTotal}`;
    }
}

const performanceText = document.getElementById("performance-message");

if (performanceText) {
    const savedScore = localStorage.getItem("quizScore");
    const savedTotal = localStorage.getItem("quizTotal");

    if (savedScore !== null && savedTotal !== null) {
        const percentage = calculatePercentage(
    Number(savedScore),
    Number(savedTotal)
);

        if (percentage >= 80) {
            performanceText.textContent = "Excellent performance!";
        } else if (percentage >= 50) {
            performanceText.textContent = "Good job! Keep practicing.";
        } else {
            performanceText.textContent = "Keep practicing and try again.";
        }
    }
}