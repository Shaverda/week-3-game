
var word_options = ["brown", "green", "red", "yellow", "blue"]; 
var secret_word = word_options[Math.floor(Math.random() * word_options.length)]; //chooses a random secret word from array
var secret_word_dashed = secret_word.replace(/[a-zA-Z]/g, '-'); //substitutes each char of secret word to a dash
var stored_guesses = [];
var guesses_remaining = 10;	
var userGuess;

function playAgain (){	//asks user if wants to play again; reloads if so
	var play_again = confirm("Wanna play again?");
	if (play_again ==true) {
		location.reload();
	}	 		
}

window.onload = function () {
	document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed; //rewrites dashed secret word to webpage
	
 	document.onkeyup = function(event) {	//once user presses a key
 		if (guesses_remaining > 0) {
	 		userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //logs pressed key into userGuess
	 		guesses_remaining--;	//decrements # of guesses
	 		stored_guesses.push(userGuess);	//pushes user's guess into stored guesses array

	 		document.querySelector(".stored-letters").innerHTML = stored_guesses; //rewrites letters guessed onto page
	 		document.querySelector(".remaining-guesses").innerHTML = guesses_remaining;	//writes how many guesses left onto page
	
	 		for (var i = 0; i <secret_word_dashed.length; i++){	//iterates through every char of secret word
	 			if (secret_word[i] == userGuess) {	//checks if it matches guess
	 				secret_word_dashed = secret_word_dashed.substring(0,i) + userGuess + secret_word_dashed.substring(i+1); //sets secret_word_dashed to incorporate your proper guessed words by diving into 2 substrings the
	 				//substrings then concatenating them, since strings are immutable in JS riiiight?
	 				document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed;
	 				if (secret_word === secret_word_dashed) {	//checks to see if win condition met
	 					alert("You won!! Hot diggity dog!!");
	 					playAgain();
	 				}

				}
	 		}
	 	}
	 	else {	//comes into play when guesses_remaining == 0
	 		alert("You're all out of guesses! You lose.");
	 		playAgain();
	 	}
 	}
}
