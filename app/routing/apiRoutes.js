//Dependancies
let path = require('path');
let friends = require('../data/friends');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});


	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){

        //Create an object to store the match values from the friend array
		let match = {
			name: "",
			photo: "",
			matchDifference: 1000
		};

		// Set variables using the user's input.
		let userInput 	= req.body;
		let userName 	= userInput.name;
		let userPhoto 	= userInput.photo;
		let userScores 	= userInput.scores;
		let difference = 0;

		// Loop through all the friend objects in the friends array, then loop through their scores. 
		for  (let i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			difference = 0;

			for (let j=0; j< friends[i].scores[j]; j++){

				difference += (Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j])));

				// When the difference value is lower than the friend values
				if (difference <= match.matchDifference){

					// Set the match object with new values 
					match.name = friends[i].name;
					match.photo = friends[i].photo;
					match.matchDifference = difference;
				}
			}
		}

		//Push the user's input into the friends array
		friends.push(userInput);

		// Return a JSON with the user's friend match. 
        res.json(match);
        console.log(match)

	});

}