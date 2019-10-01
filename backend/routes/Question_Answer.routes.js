let Question_Answer = require('../models/question_answer.model');

module.exports = function(routes){

	// Routing control for get requests
	routes.route('/questions_answers').get(function(req, res) {

		// Pick up the instances
		Question_Answer.find(function(err, questions_answers) {

			// if it gets error
			if (err) {

				// display error in console
				console.log(err);

			} else {

				// return in json format
				res.json(questions_answers);

			};

		});

	});

	// Routing control for add new piece of ground
	routes.route('/add_question_answer').post(function(req, res) {

		// new instace of Piece of Ground. it get data from req body
		let question_anwser = new Question_Answer(req.body);

		// save instace in DB
		question_anwser.save()

			// if correctly saved
			.then( question_anwser => {

				res.status(200).json({'question_anwser': 'Question_Answer added successfully'});

			})

			// if error
			.catch(err => {

				res.status(400).send('Adding new question_answer failed\nError:  ' + err);

			});

	});

	// // Routing control for update a piece of ground
	// routes.route('/update_piece_of_ground/:id').post(function(req, res) {

	// 	// Find the instance in DB
	// 	Piece_of_Ground.findById(req.params.id, function(err, piece_of_ground) {

	// 		// If it NOT gets the instance
	// 		if (!piece_of_ground) {

	// 			res.status(404).send('data is not found');

	// 		}

	// 		// if it gets the instance
	// 		else {

	// 			// update all files
	// 			piece_of_ground.name = req.body.name;
	// 			piece_of_ground.size = req.body.size;
	// 			piece_of_ground.price = req.body.price;
	// 			piece_of_ground.available = req.body.available;
	// 			piece_of_ground.loteo = req.body.loteo;
	// 			piece_of_ground.latitude = req.body.latitude;
	// 			piece_of_ground.longitude = req.body.longitude;

	// 			// // update instance in DB
	// 			piece_of_ground.save().then(piece_of_ground => {

	// 				// json response
	// 				res.json('Updated!');

	// 			})

	// 			// if there is an error
	// 			.catch(err => {

	// 				// json response
	// 				res.status(400).send('Update not possible');

	// 			});

	// 		};


	// 	})

	// })
 
}