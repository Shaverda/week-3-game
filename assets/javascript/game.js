
var word_options = ["brown", "green", "red", "yellow", "blue"]; 
var secret_word = word_options[Math.floor(Math.random() * word_options.length)]; //chooses a random secret word from array
var secret_word_dashed = secret_word.replace(/[a-zA-Z]/g, '-'); //substitutes each char of secret word to a dash
var stored_guesses = [];
var guesses_remaining = 10;	
var userGuess;

function playAgain (){	//asks user if wants to play again; reloads if so
	var play_again = confirm("Wanna play again?");
	if (play_again ==true) {
		secret_word = word_options[Math.floor(Math.random() * word_options.length)];
		secret_word_dashed = secret_word.replace(/[a-zA-Z]/g, '-');
		stored_guesses = [];
		guesses_remaining = 10;	
		document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed; //rewrites dashed secret word to webpage
	 	document.querySelector(".stored-letters").innerHTML = stored_guesses; //rewrites letters guessed onto page
	 	document.querySelector(".remaining-guesses").innerHTML = guesses_remaining;	//writes how many guesses left onto page
	}
	return play_again;	 		
}

window.onload = function gameplay() {
	document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed; //rewrites dashed secret word to webpage
	
 	document.onkeyup = function(event) {	//once user presses a key
 		if (guesses_remaining > 0) {
	 		userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //logs pressed key into userGuess
	 		stored_guesses.push(userGuess);	//pushes user's guess into stored guesses array
	 		guesses_remaining--;	//decrements # of guesses

	 		document.querySelector(".stored-letters").innerHTML = stored_guesses; //rewrites letters guessed onto page
	 		document.querySelector(".remaining-guesses").innerHTML = guesses_remaining;	//writes how many guesses left onto page
	
	 		for (var i = 0; i <secret_word_dashed.length; i++){	//iterates through every char of secret word
	 			if (secret_word[i] == userGuess) {	//checks if it matches guess
	 				secret_word_dashed = secret_word_dashed.substring(0,i) + userGuess + secret_word_dashed.substring(i+1); //sets secret_word_dashed to incorporate your proper guessed words by diving into 2 substrings the
	 				//substrings then concatenating them, since strings are immutable in JS riiiight?
	 				document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed;
	 				if (secret_word === secret_word_dashed) {	//checks to see if win condition met
	 					alert("You won!! Hot diggity dog!!");
	 					if (playAgain() == true){	//calls play again function, if returns true, reruns gameplay function
	 						gameplay();
	 					}
	 				}
				}
	 		}
	 	}
	 	else {	//comes into play when guesses_remaining == 0
	 		alert("You're all out of guesses! You lose.");	//i hope this is self explanatory.
			if (playAgain() == true){	//calls play again function, if returns true, reruns gameplay function
				gameplay();
			}

	 	}
 	}
}
