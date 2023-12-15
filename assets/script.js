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


var timerCount = 90;
var timer = $('#timer');
timer.text('Timer: ' + timerCount); //Set timer count to 0 until game starts

var startContainer = $('#start-screen');
var startBtn = $('#start-btn');
var questionContainer = $('#question-container');


function startQuiz(){
    startContainer.hide();
    shuffleArray(questions);
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


function displayQuestion(index){
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
            if(choice.text() === questions[index].answer){
                console.log('true');
            } else {
                console.log('false, bitch');
            }
        } //Get this function to kick us out of the question somehow.  
            //Maybe clear everything in a seperate function and then populate the next question?
    }


startBtn.on('click', startQuiz);
