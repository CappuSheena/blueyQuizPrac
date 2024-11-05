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

    // Check if the user is on "complete.html"
    if (window.location.pathname.includes("complete.html")) {

        // Retrieve and display the score on complete.html
        const finalScore = localStorage.getItem('finalScore') || 0;
        document.getElementById('final_score').innerHTML = finalScore;

    } else {

       setQuestions(); // Call this to set questions on page load

        document.getElementById('next_btn').addEventListener('click', function() {
            checkAnswers(currentQuestion);

            // Move to the next question regardless of answer correctness
            if (currentQuestion < questions.length - 1) {
                questions[currentQuestion].classList.remove('active');
                currentQuestion++;
                questions[currentQuestion].classList.add('active');
            }
        });



        // Make sure when the button goes back it clears the answer
        document.getElementById('back_btn').addEventListener('click', function() {
            if (currentQuestion > 0) {
                questions[currentQuestion].classList.remove('active');
                currentQuestion--;
                questions[currentQuestion].classList.add('active');
            }
        });


        // The button to complete the quiz and save score
        document.getElementById('complete_quiz_btn').addEventListener('click', function() {
            // Save score to local storage
            localStorage.setItem('finalScore', score);

            // Delay for saving, then redirect
            setTimeout(function() {
                window.location.href = "complete.html";
            }, 100); // 200ms delay to ensure score is saved
        });


        let currentQuestion = 0;
            
            //Using querySelectorAll allows us to futureproof adding questions. It means the user can have 5 questions or 60, it will count all
            const questions = document.querySelectorAll('.question_card');

            //This creates an array with the above questions. I have written it this way so that in the future, if we add an input for new questions (for admin), it will automatically fill the array with new questions. It will also fill(false) so that on load, all questions are initialsed as unchecked
            const scoreCounted = Array(questions.length).fill(false);

            // Show the first question
            questions[currentQuestion].classList.add('active');

   
    let score = 0; // Tracks the correct answer count

   
    function checkAnswers(currentQuestion) {

    // I asked GPT why this should be initialised as false;

    // Default Fallback: Setting isCorrect to false ensures that if no conditions are met (i.e., no answer or an incorrect answer is selected), the isCorrect variable will remain false, and the user will receive an "Incorrect answer" alert.

    // Single Responsibility: Each case in the switch statement only needs to check if the answer is correct. If it is, it updates isCorrect to true; otherwise, it doesn’t need to take further action, as isCorrect will default to false.

        let isCorrect = false;

        // Check the answer for the current question
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


        // This will now check if the question is correct AND if the question in the array has been counted toward the score. If it has not been counted before, it will add to the score, and mark it as true. This means if the user presses the back button to a question they have already answered, upon pressing the forward button, it will not add another to the score.
        if (isCorrect && !scoreCounted[currentQuestion]) {
            score++;

            //encasing it with [currentQuestion] allows it to pass whatever question the user is already on. This is already initialised at the top of the code
            scoreCounted[currentQuestion] = true;
        }

        // Update score display
        document.getElementById("current_score").innerHTML = score;
    }
}});








