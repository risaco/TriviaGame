$(document).ready(function() {

	// Item factory
	var createQuestion = function(question, a, b, c, d, answer, src, correct, wrong) {
	  
		var qThing   = {
		  Quest: question,
		  choiceA: a,
		  choiceB: b,
		  choiceC: c,
		  choiceD: d,
		  Ans: answer,
		  Image: src,
		  Correct: correct,
		  Wrong: wrong
		};
	  return qThing; 
	};

	// array of quiz items
	var qItems = [];

	// pushes quiz objects to the array
	qItems.push(createQuestion(
		"Who does 'Mother of Dragons' refer to?", 
		"Viserys Targaryen", 
		"Aegon Targaryen", 
		"Rhaegar Targaryen", 
		"Daenerys Targaryen", 
		"D", 
		"assets/images/daenerys-targaryen.jpg", 
		"Correct! Daenerys is the Mother of Dragons!", 
		"Um...No. Daenerys is the Mother of Dragons."
	));

	qItems.push(createQuestion(
		"What does Take the Black mean?", 
		"Become a Maester", 
		"Commit Suicide", 
		"Join the Night's Watch", 
		"Become a Sellsword", 
		"C", 
		"assets/images/night-watch.jpg", 
		"Correct! Members of the Night's Watch 'Take the Black'!", 
		"Um...No. Taking the Black means joining the Night's Watch."
	));

	qItems.push(createQuestion(
		"Which of the following is NOT one of Dany's dragons?", 
		"Drogon", 
		"Varys", 
		"Rhaegal", 
		"Viserion", 
		"B", 
		"assets/images/dragons.gif", 
		"Correct! Drogon, Rhaegal, and Viserion are the dragons!", 
		"Um...No. Varys is not a dragon."
	));

	qItems.push(createQuestion(
		"What does Arya Stark call her sword?", 
		"Stick", 
		"Nymeria", 
		"Needle", 
		"A sword has no name", 
		"C", 
		"assets/images/needle.gif", 
		"Correct! Arya calls her sword Needle!", 
		"Um...No. Arya calls her sword Needle."
	));

	qItems.push(createQuestion(
		"Who killed Tywin Lannister?", 
		"Jamie Lannister", 
		"Tyrion Lannister", 
		"Rhaegar Targaryen", 
		"Jon Snow", 
		"B", 
		"assets/images/tyrion.gif", 
		"Correct! Tyrion killed his father!", 
		"Um...No. Tywin is killed by his son, Tyrion"
	));

	qItems.push(createQuestion(
		"What does the Dothraki 'Me nem nesa' mean?", 
		"All is well", 
		"It is written", 
		"It is known", 
		"You know nothing", 
		"C", 
		"assets/images/me-nem-nesa.gif", 
		"Correct! It is known!", 
		"Um...No. It is known..."
	));

	qItems.push(createQuestion(
		"Who is the 'Queen of Thorns'?", 
		"Cersei Lannister", 
		"Margaery Tyrell", 
		"Ellaria Sand", 
		"Olenna Tyrell", 
		"D", 
		"assets/images/olenna-tyrell.gif", 
		"Correct! Lady Olenna is the Queen of Thorns!", 
		"Um...No. Lady Olenna is the Queen of Thorns."
	));

	console.log(qItems);

	// console.log(qItems[0].Wrong);

	// ******* COUNTDOWN TIMER *******
	var timeRemaining = 30;

    var intervalId;

    var userGuess;

    var correctGuess = 0;

    var wrongGuess = 0;

    var unanswered = 0;

    var q = 0; // question indicator (array index)

    var x = qItems.length;

    $("#startButton").on("click", playGame); // initial start of game

    // ******* FUNCTIONS *******

    function run() {

      intervalId = setInterval(decrement, 1000); // runs the timer

    }

    function decrement() {

      timeRemaining--;  // decrease time by 1

      $("div.timer").html("<h2>Time Remaining: " + timeRemaining + " seconds</h2>"); // display current time on screen

      if (timeRemaining == 0) {  // if time runs out...

      	stop(); // stop the timer...

        q++; // increment indication to move to next question

        unanswered += 1; // increase count of unanswered by one
        console.log("unanswered: " + unanswered);
        
        $("div.trivia").css("display", "none"); // hide trivia screen...
        $("div.timeup").css("display", "block"); // display timeup screen

        populate(qItems[q]); // change the question
        setTimeout(changeScreen, 1000 * 3); // wait five seconds and then change back to the trivia screen

      }
    } // end decrement function

    function playGame () {

    	$("div.timer").css("display", "block"); // unhide the timer

    	populate(qItems[q]); // populate trivia questions
		console.log(qItems[q]);

		changeScreen(); // change to trivia display screen, start timer

    	if (q < x) {  // if there are more items...do this

    			$("button.tButton").on("click", function(){  // when an answer button is selected...

    				stop();  // stop the clock, clear the interval, reset timeRemaining back to 30 seconds

    				userGuess = $(this).val(); // user's click stores the value of the button "A" "B" "C" "D"
    				console.log(userGuess);

    				if (userGuess == qItems[q].Ans) {  // if the user's guess is the same as the answer...

    					correctGuess += 1;  // increase correct answers by one
    					console.log("correct: " + correctGuess);

    					answer(qItems[q].Correct); // display the answer screen for correct guesses

    					q++; // increment the indicator to move to the next question

    					if (q == x) {

							stop();

				    		results();

				    		setTimeout(showResults, 1000 * 3);

				    	}
    					
    					else {

	    					populate(qItems[q]); // fill the screen with the new question info

	    					setTimeout(changeScreen, 1000 * 3); // wait on the answer screen for 5 seconds before moving on
	    				}
    				}

    				else { // if the user guess is not the correct answer...

    					wrongGuess += 1; // increment the wrong guesses by one
    					console.log("wrong: " + wrongGuess);

    					answer(qItems[q].Wrong); // display the answer screen for wrong guesses

    					q++; // increment the indicator to move to the next question

    					if (q == x) {

							stop();

							results();

				    		setTimeout(showResults, 1000 * 3);
				    	}
    					
    					else {

	    					populate(qItems[q]); // fill the screen with the new question info

	    					setTimeout(changeScreen, 1000 * 3); // wait on the answer screen for 5 seconds before moving on
	    				}
	    			}

    			}); // end of trivia button onclick function
    		
    	} // end of main IF statement
    
    } // end of playGame function

    function answer(type) {

    	$("#answers").text(type); // displays the response for correct/incorrect to the screen
    	document.getElementById("answerImage").src= qItems[q].Image; // displays associated image to screen
    	$("div.trivia").css("display", "none"); // hides trivia screen
    	$("div.answer").css("display", "block"); // displays the answer screen
    } // end of answer function
    

    function stop() {

      clearInterval(intervalId); // clears interval that has been decreasing
      timeRemaining = 30; // resets time to 30
     
    } // end stop function
 
 	function populate(object) {

 		//clear buttons
 		$(".tButton").empty(); // clears the buttons

 		// populate trivia questions
		$("#questions").text(object.Quest);  // displays the question
		$("#button-1").append(object.choiceA); // displays the first choice
		$("#button-2").append(object.choiceB); // displays the second choice
		$("#button-3").append(object.choiceC); // displays the third choice
		$("#button-4").append(object.choiceD); // displays the  fourth choice
		
 	}

 	function changeScreen() {

 		$("div.trivia").css("display", "block"); // displays the trivia screen
    	$("div.answer").css("display", "none"); // hides the answer screen
    	$("div.start").css("display", "none"); // hides the start screen
    	$("div.timeup").css("display", "none"); // hides the timeup screen
    	$("div.results").css("display", "none"); // hides the results screen

    	run();
 	}

 	function showResults () {

 		$("div.answer").css("display", "none");
 		$("div.timer").css("display", "none");
		$("div.results").css("display", "block");

		resetAnswers();

		$("#restartButton").on("click", playGame);
 	}

 	function results() {

 		$("#correct").text(" Correct Answers: " + correctGuess);
 		$("#incorrect").text(" Incorrect Answers: " + wrongGuess);
 		$("#unanswered").text(" Unanswered: " + unanswered);
 	}

 	function resetAnswers() {

 		correctGuess = 0;
 		console.log("correct: " + correctGuess);

 		wrongGuess = 0;
 		console.log("wrong: " + wrongGuess);

 		unanswered = 0;
 		console.log("unanswered: " + unanswered);

 		console.log("last q value: " + q);

 		q = 0;

 		stop();

 		console.log("new q value: " + q);
 		console.log(qItems);

 		$(".tButton").empty();
 	}


}); // END OF SCRIPT