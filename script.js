let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("question-number");

function loadQuestion() {
    const current = questions[currentQuestion];
    let answered = false;

    questionText.textContent = current.question;
    optionsContainer.innerHTML = "";

    current.options.forEach((option) => {
        const button = document.createElement("button");

        button.textContent = option;
        button.type = "button";

        button.addEventListener("click", () => {
            if (option === current.answer) {
                score++;
            }
            
            answered = true;

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

    nextButton.textContent =
        currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

nextButton.addEventListener("click", () => {
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
