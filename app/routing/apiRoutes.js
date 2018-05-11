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

    let userScores = req.body.scores;
    let scoreArray = [];
    let match = 0;

    for(let i = 0; i < friendList.length; i++){
        let difference = 0;

        for(let j = 0; j < userScores.length; j++){
            difference += (Math.abs(userScore[j] - friendList[i].scores[j]))
        }
    scoreArray.push(difference);
    }
})
};

