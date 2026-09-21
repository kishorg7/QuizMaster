# QuizMaster – Interactive Quiz Web Application

## 1. Project Overview

QuizMaster is a simple interactive web-based quiz application developed as a Software Configuration Management (SCM) final group project.

The application allows users to answer multiple-choice questions, receive immediate feedback, track their score, and view their final result and percentage.

The project was developed using HTML, CSS, and JavaScript, with Git and GitHub used for source code management and team collaboration.

## 2. Objectives

The main objectives of the project are:

- To develop a simple and functional quiz web application.
- To provide multiple-choice questions with answer options.
- To provide immediate feedback for selected answers.
- To track the user's score during the quiz.
- To calculate and display the final score and percentage.
- To provide a clean and responsive user interface.
- To demonstrate Software Configuration Management practices using Git and GitHub.
- To provide meaningful individual contributions from all team members.

## 3. Features

- Multiple-choice quiz questions
- Question navigation
- Quiz progress display
- Live score tracking
- Immediate correct/incorrect answer feedback
- Correct and incorrect answer highlighting
- Final score calculation
- Percentage calculation
- Performance message
- Restart Quiz option
- Return to Home option
- Responsive user interface
- Accessibility-focused HTML elements

## 4. Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Source Code Management

- Git
- GitHub
- Git Bash

### Browser Storage

JavaScript localStorage is used to temporarily store quiz result information between the quiz and result pages.

## 5. Project Structure

QuizMaster/
│
├── index.html
├── quiz.html
├── result.html
├── style.css
├── questions.js
├── script.js
└── README.md

### File Description

index.html
- Contains the QuizMaster home page.
- Provides project information.
- Provides the Start Quiz option.

quiz.html
- Displays quiz questions and answer options.
- Displays question progress and score.
- Provides quiz navigation and feedback.

result.html
- Displays the final quiz score.
- Displays the score percentage.
- Displays the performance message.
- Provides Restart Quiz and Return Home options.

questions.js
- Contains the quiz question bank.
- Stores questions, answer options, and correct answers.

script.js
- Controls quiz functionality.
- Handles question navigation.
- Checks selected answers.
- Updates the score.
- Handles quiz completion and result display.

style.css
- Controls the visual appearance of the application.
- Provides layout, spacing, buttons, cards, answer states, and responsive styling.

README.md
- Contains project documentation, setup instructions, team contributions, and SCM workflow information.

## 6. How to Run the Project

### Requirements

Only a modern web browser and Git are required.

### Steps

1. Clone the repository:

git clone https://github.com/kishorg7/QuizMaster.git

2. Open the project folder:

cd QuizMaster

3. Open index.html in a web browser.

On Windows Git Bash, you can use:

start index.html

No backend server or database is required.

## 7. Application Workflow

The application follows this flow:

Home Page
    ↓
Start Quiz
    ↓
Display Question
    ↓
Select Answer
    ↓
Correct / Incorrect Feedback
    ↓
Next Question
    ↓
Complete Quiz
    ↓
Calculate Score and Percentage
    ↓
Result Page
    ↓
Restart Quiz / Return Home

## 8. Team Members and Individual Contributions

### Member 1 – Kishor

Branch: feature/frontend-pages

Contributions:
- Developed the initial frontend structure.
- Created the Home, Quiz, and Result page structures.
- Established the basic project files and website foundation.
- Added initial HTML structure and accessibility improvements.

### Member 2 – Manya M

Branch: feature/quiz-functionality

Contributions:
- Implemented quiz functionality.
- Added question navigation.
- Implemented answer checking.
- Added correct/incorrect feedback.
- Implemented score tracking and quiz state handling.
- Implemented result data handling.

### Member 3 – Ankitha

Branch: feature/question-bank

Contributions:
- Developed and expanded the quiz question bank.
- Added multiple-choice questions.
- Structured question data for JavaScript.
- Maintained the question bank for the application.

### Member 4 – Annapoorna

Branch: feature/result-handling

Contributions:
- Developed result-handling functionality.
- Added final score display.
- Added percentage calculation.
- Added performance message.
- Improved result-page structure and accessibility.

### Member 5 – Pavan

Branch: feature/ui-styling

Contributions:
- Developed the visual styling of the application.
- Connected CSS to all pages.
- Improved typography, layout, buttons, and cards.
- Styled quiz answer states and feedback.
- Added responsive design.
- Performed final UI styling and cleanup.

## 9. Git and GitHub Workflow

The project uses a feature-branch workflow for collaborative development.

### Workflow

Team Member
     ↓
Feature Branch
     ↓
Development
     ↓
Meaningful Commits
     ↓
Push to GitHub
     ↓
Pull Request
     ↓
Review / Integration
     ↓
Integration Branch
     ↓
Final Integrated Project

Each team member worked on an assigned feature branch.

Feature branches used:

feature/frontend-pages
feature/quiz-functionality
feature/question-bank
feature/result-handling
feature/ui-styling

Pull Requests were used to integrate completed feature work into the shared integration branch.

## 10. Individual SCM Contribution

Each team member made meaningful contributions through their assigned feature branch.

The project includes:

- Separate feature branches
- Meaningful commit history
- GitHub repository collaboration
- GitHub Pull Requests
- Feature integration
- Final integration testing
- Individual contributions from all five members

Each member completed 25 or more meaningful commits as part of the project contribution requirement.

## 11. Testing and Validation

The following areas were tested during development.

### Functional Testing

- Home page opens correctly.
- Start Quiz navigation works.
- Questions load correctly.
- Answer options can be selected.
- Correct and incorrect answers are identified.
- Answer buttons are disabled after selection.
- Next button moves to the next question.
- Final question leads to the Result page.
- Final score is displayed.
- Percentage is calculated and displayed.
- Performance message is displayed.
- Restart Quiz works.
- Return Home works.

### UI Testing

- CSS loads correctly on all pages.
- Header and content cards display correctly.
- Buttons and links are styled.
- Quiz answer states are visible.
- Result information is displayed clearly.
- Responsive styling is included for smaller screens.

## 12. Future Enhancements

Possible future improvements include:

- Multiple quiz categories
- Difficulty levels
- Timer-based quizzes
- Randomized questions
- User accounts
- Quiz history
- Database integration
- Backend functionality
- Leaderboard

These features are not part of the current implementation and can be considered for future versions.

## 13. Conclusion

QuizMaster demonstrates the development of a simple interactive quiz application while applying Software Configuration Management practices using Git and GitHub.

The project demonstrates:

- Web application development using HTML, CSS, and JavaScript.
- Feature-based development.
- Git branching.
- Meaningful commits.
- GitHub collaboration.
- Pull Requests.
- Feature integration.
- Individual team contributions.
- Final application testing and validation.

## 14. Team

Kishor
Manya M
Ankitha
Annapoorna
Pavan

QuizMaster – SCM Final Group Project, 2026
