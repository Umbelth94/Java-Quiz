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
function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while(currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}


var timerCount = 90;
var timer = $('#timer');
timer.text('Timer: ' + timerCount); //Set timer count to 0 until game starts

var startContainer = $('#start-screen');
var startBtn = $('#start-btn');
var questionContainer = $('#question-container');


function startQuiz(){
    startContainer.hide();
    shuffle(questions);
    var timerInterval = setInterval(countDown, 1000);
    //Create Elements from the questions array and append them to the questioncontainer.



    function countDown(){
        timer.text('Timer: ' + timerCount);
        if (timerCount === 0){
            clearInterval(timerInterval);
            console.log('Hello');
        } else {
        timerCount --;
        }
    }
}

function displayQuestion(randomlySortedQuestions){
    var question = 0;
}


startBtn.on('click', startQuiz);
