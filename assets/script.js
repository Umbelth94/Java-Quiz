//Array of question objects
var questions = [
    {
        title:'What type of language is Javascript?',
        choices:['Object-Oriented', 'Object-Based','Procedural','None of the Above'],
        answer: 'Object-Oriented'
    },
    {
        title:'Which of the following keywords is used to define a variable in Javascript?',
        choices:['var','let','Both A and B', 'None of the Above'],
        answer:'Both A and B'
    },
    {
        title:'Which of the following methods is used to access HTML elements using Javascript?',
        choices:['getElementbyId()','getElementsByClassName()','Both A and B','None of the above'],
        answer:'Both A and B'
    }
]
//Shuffle the questions array so that the questions appear in a different order every run.
function shuffleArray(array){
    let currentIndex = array.length, randomIndex;
    while(currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

class HighscoreBoard {
    constructor() {
      this.scores = JSON.parse(localStorage.getItem('highscores')) || [];
    }
  
    addScore(name, score) {
      this.scores.push({ name, score });
      this.scores.sort((a, b) => b.score - a.score); // Sort in descending order
      localStorage.setItem('highscores', JSON.stringify(this.scores));
    }

    clearHighscores(){
        if (confirm('Are you sure?  This will delete the local score storage')){
        console.log('clear highscores');
        this.scores = [];
        localStorage.removeItem('highscores');
        this.displayHighscores();}
        else {
            return;
        }
    }
    
  
    displayHighscores() {
      this.scores.forEach((entry) => {
        var newScoreListing = $('<li></li>').text(`${entry.name}: ${entry.score}`)
        scoresListEl.prepend(newScoreListing);
      });
    }}
  
var isScoreboardVisible = false;
const highscoreBoard = new HighscoreBoard();
var correctAnswers = 0;
var incorrectAnswers = 0;
let currentQuestion = 0;
var timerCount = 20;
var timer = $('#timer');
timer.text('Timer: ' + timerCount); //Set timer count to 90 until game starts

var startContainer = $('#start-screen');
var startBtn = $('#start-btn');
var restartBtn = $('#restart-btn');
var questionContainer = $('#question-container');
var saveScoreContainer = $('#save-score-container');
var saveAnswerContainer = $('#answer-score');
var scoreTextContainer = $('#score-text');
var submitBtnEl = $('#submit-btn');
var nameInputEl = $('#name');
var scoreboardContainer = $('#scoreboard-container');
var scoresListEl = $('#scores');
var viewHighscoreButton = $('#view-hs-page');
var clearButton = $('#clear-btn');
saveScoreContainer.hide();
scoreboardContainer.hide();



function startQuiz(){
    timerCount = 5;
    startContainer.hide();
    scoreboardContainer.hide();
    questionContainer.show();
    currentQuestion = 0;
    shuffleArray(questions);
    var timerInterval = setInterval(countDown, 1000);
    displayQuestion(currentQuestion);
 
       function countDown(){
        
        timer.text('Timer: ' + timerCount);
        if (timerCount <= 0){
            clearInterval(timerInterval);
            console.log('Hello');
            timerCount = 0;
            timer.text('Timer: ' + timerCount);
        } else if (currentQuestion === questions.length){
            clearInterval(timerInterval);
        } else {
        timerCount --;
        }
    }
}


function displayQuestion(index){
        questionContainer.empty();
        var questionTitle = $('<h2></h2>').text(questions[index].title);
        questionContainer.append(questionTitle);
        //Figure out how to loop through these questions.choices and make each one a button
        var choice1 = $('<button class="choice-button"></button>').text(questions[index].choices[0]);
        choice1.on('click', function(){ checkIfCorrect(choice1)});
        var choice2 = $('<button class="choice-button"></button>').text(questions[index].choices[1]);
        choice2.on('click', function(){ checkIfCorrect(choice2)});
        var choice3 = $('<button class="choice-button"></button>').text(questions[index].choices[2]);
        choice3.on('click', function(){ checkIfCorrect(choice3)});
        var choice4 = $('<button class="choice-button"></button>').text(questions[index].choices[3]);
        choice4.on('click', function(){ checkIfCorrect(choice4)});
        $('').addClass('choice-button');
        questionContainer.append(choice1, choice2, choice3, choice4);

        function checkIfCorrect(choice){
            var correctPopUp = $("<h3></h3>").text("Correct!");
            if(choice.text() === questions[index].answer){
                correctAnswers ++;
                questionContainer.append(correctPopUp);
            } else {
                timerCount -= 10;
                incorrectAnswers ++;
                correctPopUp.text('Incorrect! :(');
                questionContainer.append(correctPopUp);
            }
            
            setTimeout(function() {
                currentQuestion ++;
                if (currentQuestion < questions.length){
                    displayQuestion(currentQuestion);
                } else if (currentQuestion = questions.length){
                    questionContainer.hide();
                    saveScoreContainer.show();
                    presentWinScreen();
                }
            }, 800);
        }
    }

function presentWinScreen(){
    var congrats = $('<h3></h3>').text('Congratulations, you answered all the questions!  Your score is: ' + timerCount);
    var correctAnswersEl = $('<h4></h4>').text('Correct answers: ' + correctAnswers);
    var incorrectAnswersEl = $('<h4></h4>').text('Incorrect answers: ' + incorrectAnswers);
    scoreTextContainer.append(congrats)
    saveAnswerContainer.append(correctAnswersEl, incorrectAnswersEl);
}
startBtn.on('click', startQuiz);
restartBtn.on('click',startQuiz);


submitBtnEl.on('click', function(event){;
    event.preventDefault();
    saveScoreContainer.hide();
    scoreboardContainer.show();
    highscoreBoard.addScore(nameInputEl.val(), timerCount)
    highscoreBoard.displayHighscores();;
});

viewHighscoreButton.on('click',function(){
    if( !isScoreboardVisible){
        console.log('displaying scoreboard');
        saveScoreContainer.hide();
        startContainer.hide();
        scoreboardContainer.show();
        highscoreBoard.displayHighscores();
        isScoreboardVisible = true;
    } else {
        isScoreboardVisible = false;
        return;
    }
});

clearButton.on('click', ()=>{
    highscoreBoard.clearHighscores();
    highscoreBoard.displayHighscores();
});

