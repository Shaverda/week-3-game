//read a text file into an array... FUCK THIS I'LL DO THIS LATER, for now setting custom words

window.onload = function () {

	var word_options = ["brown", "green", "red", "yellow", "blue"]; //l2 read from file later
	var secret_word = word_options[Math.floor(Math.random() * word_options.length)]; //chooses a random secret word from array
  	console.log(secret_word); //testing secret word

  	var secret_word_dashed = secret_word.replace(/[a-zA-Z]/g, '-'); //substitutes each char of secret word to a dash
  	console.log(secret_word_dashed);

	document.querySelector(".secret-word-dashed").innerHTML = secret_word_dashed; //rewrites dashed secret word to webpage

 	var stored_guesses = [];
 	var guesses_remaining = 10;	//currently has no consequences, need to add a while loop that stops the game

 	document.onkeyup = function(event) {
 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //logs pressed key into userGuess
 		console.log(userGuess);
 		guesses_remaining--;
 		console.log(guesses_remaining);
 		
 		stored_guesses.push(userGuess);	//pushes user's guess into stored guesses array

 		for (var i = 0; i <secret_word_dashed.length; i++){
 			if (secret_word[i] == userGuess) {
 				console.log(stored_guesses + i);

 				secret_word_dashed = secret_word_dashed.substring(0,i) + userGuess + secret_word_dashed.substring(i+1); //sets secret_word_dashed to incorporate your proper guessed words by diving into 2 substrings the
 				//substrings then concatenating them, since strings are immutable in JS riiiight?
 				console.log(secret_word_dashed);

 				if (secret_word === secret_word_dashed) {
 					console.log("you won!!!");
 				}

 				//Idk do i even need to do anything if they match?
 		//prolly a better way		secret_word_dashed = secret_word.replace(/[^#{@stored_guesses}]/g, "-");
 		//		console.log(secret_word_dashed + " here's thesecret word dashed");
 			}
 		}



 	};
}
