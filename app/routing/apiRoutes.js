//Dependancies
let path = require('path');
let friends = require('../data/friends.js');

//Export routes to server.js
module.exports = function(app){

    //To data
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });
};

