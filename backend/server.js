// import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// import Piece_of_Ground model
let Piece_of_Ground = require('./piece_of_ground.model');

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


// Routing control for get requests
routes.route('/').get(function(req, res) {

	// Pick up the pieces of ground
	Piece_of_Ground.find(function(err, pieces_of_ground) {

		// if it gets error
		if (err) {

			// display error in console
			console.log(err);

		} else {

			// return pieces of ground in json format
			res.json(pieces_of_ground);

		};

	});

});

// Routing control for add new piece of ground
routes.route('/add').post(function(req, res) {

	// new instace of Piece of Ground. it get data from req body
	let piece_of_ground = new Piece_of_Ground(req.body);

	// save instace in DB
	piece_of_ground.save()

		// if correctly saved
		.then( piece_of_ground => {

			res.status(200).json({'piece_of_ground': 'Piece of ground added successfully'});

		})

		// if error
		.catch(err => {

			res.status(400).send('Adding new piece of ground failed');

		});

});

// app is listening
app.listen(PORT, function() {

    console.log("Server is running on Port: " + PORT);

});