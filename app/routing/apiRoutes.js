//Dependancies
let path = require('path');
let friends = require('../data/friends.js');

//Export routes to server.js
module.exports = function(app){

    //To data
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

app.post('/api/friends', function(req, res){

    //Assigns input from user on the front end to variables
    //for use by the server
    let userScores = req.body.scores;
    let scoreArray = [];
    let matchScore = 0;
    let matchedFriend;

    //Loop through the friends list in the data 
    for(let i = 0; i < friendList.length; i++){
        let difference = 0;

        //Loop through each of the friend's scores 
        //Then, calculate the absolute difference from the user's input
        for(let j = 0; j < userScores.length; j++){
            difference += (Math.abs(parseInt(userScore[j]) - parseInt(friendList[i].scores[j])));
        }
    //Push the score difference into an array for comparison later
    scoreArray.push(difference);
    };
    
    //Compare the scores in the scoreArray to the match value (0)
    //if they are equal or less than 0, then they become the new match value
    for(let k = 0; k < scoreArray.length; k++){
        if(scoreArray[k] <= scoreArray[matchScore]){
            matchScore = k;
        };
    };

    //Assigns the friend from the friends list to the matched friend variable
    //based on the matchScore
    matchedFriend = friendList[matchScore]
})
};

