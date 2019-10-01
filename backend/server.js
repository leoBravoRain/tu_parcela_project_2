// import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// crate express instance
const app = express();

// Create express router instance
const routes = express.Router();

// define PORT
const PORT = 4000;

// express app is going to use cors
app.use(cors());

// express app is going to parse the body content in JSON format
app.use(bodyParser.json());

// route take control of request starting with path /piece_of_ground
app.use('/pieces_of_ground', routes)

// connect to local mongodb
mongoose.connect('mongodb://127.0.0.1:27017/piece_of_ground', { useNewUrlParser: true });

// create connection object
const connection = mongoose.connection;

// once the connection is opened
connection.once('open', function() {

    console.log("MongoDB database connection established successfully");

});


// Add Loteos routes from own file
require('./routes/Loteos.routes')(routes);

// Add Pieces of Ground routes from own file
require('./routes/Piece_of_Ground.routes')(routes);

// Add Questions Anwser routes from own file
require('./routes/Question_Answer.routes')(routes);

// app is listening
app.listen(PORT, function() {

    console.log("Server is running on Port: " + PORT);

});