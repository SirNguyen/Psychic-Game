alert("You have 9 guesses!");

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesSofar = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var computerGuess = alphabet[(Math.floor(Math.random() *26))];

function scoreboard(){
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}

var reset = function() {
    totalGuesses = 9;
    guesses = 9;
    guessedLetters = [];
    }

