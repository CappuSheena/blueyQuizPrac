// Function to set questions on page load
function setQuestions() {
    // Initializes the questions    
    let questions = [
        "What is Bluey's Dads name?",
        "Who is this?", 
        "What breed is Bluey?",
        "What game do Bluey and Bingo like to play?",
        "What is the dads occupation?",
        "What is Bluey's mums name?",
        "What country is Bluey from?",
        "What are the names of the grannies?",
        "Who is this?",
        "What is Bluey's mums job?"
    ];

    for (let i = 0; i < questions.length; i++) {
        document.getElementById("q" + i).innerHTML = questions[i];
    }
}

document.addEventListener('DOMContentLoaded', function() {

    







    setQuestions(); // Call this to set questions on page load
    let currentQuestion = 0;
    let counter = 0; // Tracks the correct answer count
    const questions = document.querySelectorAll('.question_card');

    // Show the first question
    questions[currentQuestion].classList.add('active');

    document.getElementById('next_btn').addEventListener('click', function() {
        checkAnswers(currentQuestion);

        // Move to the next question regardless of answer correctness
        if (currentQuestion < questions.length - 1) {
            questions[currentQuestion].classList.remove('active');
            currentQuestion++;
            questions[currentQuestion].classList.add('active');
        }
    });

    document.getElementById('back_btn').addEventListener('click', function() {
        if (currentQuestion > 0) {
            questions[currentQuestion].classList.remove('active');
            currentQuestion--;
            questions[currentQuestion].classList.add('active');
        }
    });

    function checkAnswers(currentQuestion) {

    // I asked GPT why this should be initialised as false;

    // Default Fallback: Setting isCorrect to false ensures that if no conditions are met (i.e., no answer or an incorrect answer is selected), the isCorrect variable will remain false, and the user will receive an "Incorrect answer" alert.

    // Single Responsibility: Each case in the switch statement only needs to check if the answer is correct. If it is, it updates isCorrect to true; otherwise, it doesn’t need to take further action, as isCorrect will default to false.

        let isCorrect = false;

        // Check the answer for the current question and increment the score if correct
        switch (currentQuestion) {
            case 0:
                const ansQ0 = document.querySelector('input[name="ansq0"]:checked');
                isCorrect = ansQ0 && ansQ0.value.toLowerCase() === "bandit";
                break;

            case 1:
                const ansQ1 = document.getElementById('ansq1').value;
                isCorrect = ansQ1.toLowerCase() === "bingo";
                break;

            case 2:
                const ansQ2 = document.querySelector('input[name="ansq2"]:checked');
                isCorrect = ansQ2 && ansQ2.value.toLowerCase() === "blue heeler";
                break;

            case 3:
                const ansQ3 = document.querySelector('input[name="ansq3"]:checked');
                isCorrect = ansQ3 && ansQ3.value.toLowerCase() === "keepy uppy";
                break;

            case 4:
                const ansQ4 = document.querySelector('input[name="ansq4"]:checked');
                isCorrect = ansQ4 && ansQ4.value.toLowerCase() === "archaeologist";
                break;

            case 5:
                const ansQ5 = document.getElementById('ansq5').value;
                isCorrect = ansQ5.toLowerCase() === "chilli";
                break;

            case 6:
                const ansQ6 = document.querySelector('input[name="ansq6"]:checked');
                isCorrect = ansQ6 && ansQ6.value.toLowerCase() === "australia";
                break;

            case 7:
                const ansQ7 = document.querySelector('input[name="ansq7"]:checked');
                isCorrect = ansQ7 && ansQ7.value.toLowerCase() === "janet and rita";
                break;

            case 8:
                const ansQ8 = document.getElementById('ansq8').value;
                isCorrect = ansQ8.toLowerCase() === "judo";
                break;

            case 9:
                const ansQ9 = document.querySelector('input[name="ansq9"]:checked');
                isCorrect = ansQ9 && ansQ9.value.toLowerCase() === "airport security";
                break;

        }

        if (isCorrect) {
            counter++;
        }

        // Update score display
        document.getElementById("current_score").innerHTML = counter;
    }
});
