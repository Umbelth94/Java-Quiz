# <Javascript-Quiz>

## Description

In this project, we attempted to stretch our knowledge of web-API's and DOM manipulation to make a timed Javascript Quiz that utilizes local data storage to keep track of personal records, with the points for a quiz being based on how much time you have left after answering all of the questions.

I set up the quiz questions using an Array, and then randomized the order of it so that every run of the quiz display questions in a different order.

I also used this project as an opportunity to learn some Jquery, as I knew that it specializes in handling DOM manipulation and comes with some convenient tools.  While I was at it, I utilized making a Class for the first time to handle everything to do with the scoreboard.  The class handles storing, sorting, retrieving, and displaying all of the data needed for the scoreboard functionality.  Organizing it into a class made it a lot easier for me to organize and handle.  

I utilized some of Jquery's show() and hide() functionality to help navigate through the various menus, which saved me from having to do that like I normally do (Adding/toggling CSS classes), and I have to admit that Jquery made this much less of a headache than I was expecting it to be.  

## Usage

Simply start the quiz and get to answering!  Your score will be based on how much time you have left at the end of the quiz.  However, every time you submit an incorrect answer, 5 seconds will be taken from the timer, thus affecting your score!  Afterwards, you can submit your score and name into the locally stored scoreboard so that you can boast to your cat, dog, or significant other about how much more Javascript you know than them.  


## Credits

I used Jquery, and got some help from chatGPT in regards to building a class.  It didn't build it for me, it just answered all my very specific, stupid questions.  I would also like to thank my tutor, Phillip Loy, for helping me figure out how to stop my elements from cloning themselves every time I ran through the program.  

The questions I used can be found [Here](https://www.interviewbit.com/javascript-mcq/)



