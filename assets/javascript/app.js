$(document).ready(function() {

	// Item factory
	var createQuestion = function(question, a, b, c, d, answer, src, correct, wrong) {
	  
		var qThing   = {
		  Quest: question,
		  A: a,
		  B: b,
		  C: c,
		  D: d,
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
		"Join the Night’s Watch", 
		"Become a Sellsword", 
		"C", 
		"assets/images/night-watch.jpg", 
		"Correct! Members of the Night's Watch 'Take the Black'!", 
		"Um...No. Taking the Black means joining the Night's Watch."
	));

	qItems.push(createQuestion(
		"Which of the following is NOT one of Dany’s dragons?", 
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

	console.log(qItems[0].Wrong);


}); // END OF SCRIPT