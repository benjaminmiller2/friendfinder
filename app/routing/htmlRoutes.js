//Dependancies
let path = require('path');

//Export routes to server.js
module.exports = function(app){
    
    //To home.html
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });

    //To survey.html
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
};