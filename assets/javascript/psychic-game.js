//Set up the variables
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;


//
var computerGuess =
    alphabet[
        Math.round(Math.random() * 26)
    ];

console.log(computerGuess);

//function to capture user's keyboard input and make the input lowercase
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter (usersKeypress) {


    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        alert(usersKeypress + "   You already guessed this letter. Try again!");

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        //show user's input in browser
        showLettersGuessed();
        //is user's input a match to computer guess
        guessMatch(usersKeypress);
    }

}

//function to show letters guessed in browser
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}
//Display wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
    console.log("wins" + wins);
}

//Display losses
function showLosses() {
    document.getElementById("numLosses").innerHTML = losses;
    console.log("losses" + losses);
}
//Display guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}
function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("YAY! You win!");
        wins = wins + 1;
        showWins();
        //toggleGame();

    } else if (guessesLeft === 0) {
        alert("Aw, shucks. You got this! Lets start over.");
        losses = losses + 1;
        showLosses();
        // resetVariables ();
        
        

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
    computerGuess =
        alphabet[
            Math.round(Math.random() * 26)
        ];

    console.log(lettersGuessed);
    console.log(guessesLeft);
    console.log(computerGuess);

}

function startGame() {
    showGuessesRemaining();
    showLettersGuessed();
    showWins();
    showLosses();
}


startGame();

$("#startOver").on("click", function() {
    console.log("clicked start over");
    resetVariables();
    startGame();
})



