//TODO:
    //Style the buttons I made somehow
    //Pretty it all up
    //Add more questions (final objective.  Don't wanna add more because playtesting will be weird)
    //Where did incorrect answers go??

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
    },
    { 
        title:'Upon encountering empty statements, what does the Javascript Interpreter do?',
        choices:['Throws an error', 'Ignores the statements', 'Gives a warning', 'None of the above'],
        answer:'Ignores the statements'
    },
    {
        title:'Which of the following methods can be used to display data in some form using Javascript?',
        choices:['document.write()','console.log()','window.alert()','All of the above'],
        answer:'All of the above'
    },
    {
        title:'How can a datatype be declared to be a constant type?',
        choices:['const','var','let','constant'],
        answer:'const'
    },
    {
        title:'When the switch statement matches the expression with the given labels, how is the comparison done?',
        choices:['Both the datatype and the result of the expression are compared','Only the datatype of the expression is compared','Only the value of the expression is compared','None of the above'],
        answer:'Both the datatype and the result of the expression are compared'
    },
    {
        title:'What keyword is used to check whether a given property is valid or not?',
        choices:['in','is in','exists','lies'],
        answer:'in'
    },
    {
        title:'What is the use of the <noscript> tag in Javascript?',
        choices:['The contents are displayed by non-JS-based browsers','Clears all the cookies and cache','Both A and B','None of the above'],
        answer:'The contents are displayed by non-JS-based browsers'
    },
    {
        title:'When an operators value is NULL, the typeof returned by the unary operator is: ',
        choices:['Boolean','Undefined','Object','Integer'],
        answer:'Undefined'
    },
    {
        title:'What does the Javascript "debugger" statement do?',
        choices:['It will debug all the errors in the program at runtime','It acts as a breakpoint in a program','It will debug error in the current statement if any','All of the above'],
        answer:'It acts as a breakpoint in a program'
    },
    {
        title:'What is the output of the following code snippet? print(NaN === NaN)',
        choices:['true','false','undefined','error'],
        answer:'false'
    },
    {
        title:'What will be the output of the following code snippet? print(typeof(NaN));',
        choices:['Object','Number','String','None of the above'],
        answer:'Number'
    },
    {
        title:'What does the \'toLocateString\' method do in JS?',
        choices:['Returns a localised object representation','Returns a parsed string','Returns a localized string representation of an object','None of the above'],
        answer:'Returns a localized string representation of an object'
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
    }
    
  
    displayHighscores() {
        scoresListEl.empty();
        console.log(this.scores);
        this.scores.forEach((entry) => {
            var newScoreListing = $('<li></li>').text(`${entry.name}: ${entry.score}`)
            scoresListEl.append(newScoreListing);
            });
    }}
  
var isScoreboardVisible = false;
const highscoreBoard = new HighscoreBoard();
var correctAnswers = 0;
var incorrectAnswers = 0;
let currentQuestion = 0;
var timerCount = 90;
var timer = $('#timer');
timer.text('Timer: ' + timerCount); //Set timer count to 90 until game starts

var startContainer = $('#start-screen');
var startBtn = $('#start-btn');
var restartBtn = $('.restart-btn');
var questionContainer = $('#question-container');
var saveScoreContainer = $('#save-score-container');
var lossContainer = $('#loss-container');
var lossMessageContainer = $('#loss-message');
var saveAnswerContainer = $('#answer-score');
var scoreTextContainer = $('#score-text');
var submitBtnEl = $('#submit-btn');
var nameInputEl = $('#name');
var scoreboardContainer = $('#scoreboard-container');
var scoresListEl = $('#scores');
var viewHighscoreButton = $('#view-hs-page');
var clearButton = $('#clear-btn');

function init(){
    timerCount = 90;
    timer.text('Timer ' + timerCount);
    saveScoreContainer.hide();
    scoreboardContainer.hide();
    lossContainer.hide();
}

function startQuiz(){
    scoresListEl.textContent='';
    correctAnswers=0;
    incorrectAnswers=0;
    // scoreTextContainer.text('');
    // scoreboardContainer.text('');
    timerCount = 90;
    startContainer.hide();
    scoreboardContainer.hide();
    lossContainer.hide();
    questionContainer.show();
    currentQuestion = 0;
    shuffleArray(questions);
    var timerInterval = setInterval(countDown, 1000);
    displayQuestion(currentQuestion);
 
       function countDown(){
        
        timer.text('Timer: ' + timerCount);
        if (timerCount <= 0){
            clearInterval(timerInterval);
            questionContainer.hide();
            lossContainer.show();
            presentLossScreen();
            timerCount = 0;
            timer.text('Timer: ' + timerCount);
        } else if (currentQuestion === questions.length){
            clearInterval(timerInterval);
        } else {
        timerCount --;
        timer.text('Timer: ' + timerCount);
        }
    }
}


function displayQuestion(index){
        questionContainer.empty();
        // var questionTitle = $('<h2></h2>').text(questions[index].title);
        // questionContainer.append(questionTitle);
        // Figure out how to loop through these questions.choices and make each one a button
        // var choice1 = $('<button class="choice-button"></button>').text(questions[index].choices[0]);
        // choice1.on('click', function(){ checkIfCorrect(choice1)});
        // var choice2 = $('<button class="choice-button"></button>').text(questions[index].choices[1]);
        // choice2.on('click', function(){ checkIfCorrect(choice2)});
        // var choice3 = $('<button class="choice-button"></button>').text(questions[index].choices[2]);
        // choice3.on('click', function(){ checkIfCorrect(choice3)});
        // var choice4 = $('<button class="choice-button"></button>').text(questions[index].choices[3]);
        // choice4.on('click', function(){ checkIfCorrect(choice4)});
        // $('').addClass('choice-button');
        // questionContainer.append(choice1, choice2, choice3, choice4);

       
        var questionTitle = $('<h2></h2>').text(questions[index].title);
        questionContainer.append(questionTitle);
        for (let i = 0; i < questions[index].choices.length; i++){
            var listChoices = $('<button class="choice-button">').text(questions[index].choices[i]);
            // listChoices.addClass('choice-button');
            questionContainer.append(listChoices);
        }
        $('.choice-button').on('click',function(){
            var choice = $(this).text();
            checkIfCorrect(choice);
        })

        function checkIfCorrect(choice){
            var correctPopUp = $("<h3></h3>").text("Correct!");
            console.log(choice, questions[index].answer)
            if(choice === questions[index].answer){
                console.log('correct')
                correctAnswers ++;
                questionContainer.append(correctPopUp);
            } else {
                timerCount -= 5;
                console.log('incorrect');
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
            }, 300);
        }
    }

function presentWinScreen(){
    scoreTextContainer.empty();
    saveAnswerContainer.empty();
    var congrats = $('<h3></h3>').text('Congratulations, you answered all the questions!  Your score is: ' + timerCount);
    var correctAnswersEl = $('<h4></h4>').text('Correct answers: ' + correctAnswers);
    var incorrectAnswersEl = $('<h4></h4>').text('Incorrect answers: ' + incorrectAnswers);
    scoreTextContainer.append(congrats)
    saveAnswerContainer.append(correctAnswersEl, incorrectAnswersEl);
}

function presentLossScreen(){
    $('#loss-message').empty();
    var getGood = $('<h3></h3>').text('Oof, you ran out of time!  Looks like you will need to practice more');
    var correctAnswersEl = $('<h4></h4>').text('Correct answers: ' + correctAnswers);
    var incorrectAnswersEl = $('<h4></h4>').text('Incorrect answers: ' + incorrectAnswers);
    lossMessageContainer.append(getGood)
    lossMessageContainer.append(correctAnswersEl, incorrectAnswersEl);
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
    // highscoreBoard.displayHighscores();
});

init();
