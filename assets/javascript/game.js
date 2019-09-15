//1) Create an array of words
var computerGuess = ["a"];
var guessedLettersArray = []
var wins = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var puzzleAnswers = ["morpheus", "trinity", "architect", "neo", "merovingian", "trainman"];



//2) Choose a word at random and store the answer in a variable
function startGame() {
    guessesLeft = 10;

    var randomPuzzleAnswer = puzzleAnswers[Math.floor(Math.random() * puzzleAnswers.length)];

    var blanks = [];

    var splitAnswer = randomPuzzleAnswer.split("");

    for (i = 0; i < splitAnswer.length; i++) {
        blanks.push("_");
    }

    document.getElementById("currentHangmanWord").innerHTML = blanks.join(" ");

    document.getElementById("wins").innerHTML = "Total Wins = " + wins;

    document.getElementById("remainingGuesses").innerHTML = "# of Guesses Remaining = " + guessesLeft;

    document.getElementById("guesses").innerHTML = "Letters Already Guessed: " + guessedLettersArray;

}

function checkLetters(letter) {


}

document.addEventListener("DOMContentLoaded",function(event) {
    startGame();
});

document.onkeyup = function(event) {
    console.log(event)

}






//3) Display # of wins so far in "wins" id (starts at 0)


//4) Display # of guesses left in "remainingGuesses" id (starts at 10)


//5) Display array of letters guessed so far in "guesses" id (starts empty)


//6) Display randomPuzzleAnswer with either a filled in letter from guesses array or place holder underscores in currentHangmanWord div

// document.onkeyup = function (event) {
//     var userGuess = event.key
//     if (userGuess == computerGuess) {
//         console.log('this if statement is working')
//         var used = guessedLettersArray.push(userGuess);
//         console.log(guessedLettersArray);
//         document.getElementById("guesses").innerHTML = "Letters Already Guessed: " + guessedLettersArray;
//     }
//     else {

//     }
// }





// draw(randomPuzzleAnswer(guesses, word)) {

//     if guesses.includes(randomPuzzleAnswer[i]) {

//         print [i]

//     else

//         print "_ "

//     }
// }

// for(i = 0; i < randomPuzzleAnswer.length; i++) {
//     document.getElementById("currentHangmanWord").innerHTML += "_ ";

// }


//7) Get user input (letters only)

//8) Determine if guessed letter is correct

//9) If Correct, push to currentHangmanWord array

//7) If wrong, push to guessed letter array




