//Dependencies

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

//Express app
let app = express();
let PORT = process.env.PORT || 3000;

//Middleware to apply Body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//Create connection to routes
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);

//Confirm server functionality
app.listen(PORT, function(){
    console.log('App is listening on PORT ' + PORT)
});