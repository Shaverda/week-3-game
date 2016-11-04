//read a text file into an array... FUCK THIS I'LL DO THIS LATER, for now setting custom words

window.onload = function () {

	var word_options = ["brown", "green", "red", "yellow", "blue"]; //l2 read from file later
	var secret_word = word_options[Math.floor(Math.random() * word_options.length)]; //chooses a random secret word from array
  	console.log(secret_word); //testing secret word

  	var secret_word_dashed = secret_word.replace(/[a-zA-Z]/g, '-'); //substitutes each char of secret word to a dash
  	console.log(secret_word_dashed); //testing sw-dashed

	document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed; //rewrites dashed secret word to webpage

	var stored_guesses = [];
 	var guesses_remaining = 10;	//currently has no consequences, need to add a while loop that stops the game

 	document.onkeyup = function(event) {	//once user presses a key
 		if (guesses_remaining > 0) {
	 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //logs pressed key into userGuess
	 		console.log(userGuess); //4testing purposes
	 		guesses_remaining--;	//decrements # of guesses
	 		document.querySelector(".remaining-guesses").innerHTML = guesses_remaining;
	 		console.log(guesses_remaining); //4 testing purposes
	 		stored_guesses.push(userGuess);	//pushes user's guess into stored guesses array
	 		document.querySelector(".stored-letters").innerHTML = stored_guesses;

	
	 		for (var i = 0; i <secret_word_dashed.length; i++){	//iterates through every char of secret word
	 			if (secret_word[i] == userGuess) {	//checks if it matches guess
	 			//	console.log(stored_guesses + i); //4 testing purposes
	 				secret_word_dashed = secret_word_dashed.substring(0,i) + userGuess + secret_word_dashed.substring(i+1); //sets secret_word_dashed to incorporate your proper guessed words by diving into 2 substrings the
	 				//substrings then concatenating them, since strings are immutable in JS riiiight?
	 				document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed;
	 			//	console.log(secret_word_dashed);	//4 testing purposes
	 				if (secret_word === secret_word_dashed) {
	 					alert("You won!! Hot diggity dog!!")
	 					var play_again = confirm("Wanna play again?");
	 					if (play_again ==true) {
	 						location.reload();
	 					}
	 				}

				}
	 		}
	 	}
	 	else {	//comes into play when guesses_remaining == 0
	 		alert("You're all out of guesses! You lose.");
			var play_again = confirm("Wanna play again?");
			if (play_again ==true) {
				location.reload();
			}	 		
	 	}
 	}
}
