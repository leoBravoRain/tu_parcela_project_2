let Piece_of_Ground = require('../models/piece_of_ground.model');
let Loteo = require('../models/loteo.model');

module.exports = function(routes){

	// Routing control for get requests
	routes.route('/pieces_of_ground/:id_loteo').get(function(req, res) {

		// Pick up the pieces of ground
		Loteo.findById(req.params.id_loteo, function(err, loteo) {

			// if it gets error
			if (err) {

				// display error in console
				console.log(err);

				// send error
				res.status(500).send(err);

			} else {

				// if there is a loteo (loteo != null)
				if (loteo) {

					// Get piece of ground of loteo
					Piece_of_Ground.find({loteo: loteo._id}, function(err, pieces_of_ground) {	

						// if error
						if (err) {

							// display error in console
							console.log(err);

							// data was not found
							res.status(500).send(err);

						}

						// if there is not error
						else {

							// return pieces of ground
							res.json(pieces_of_ground);
							
						};

					});

				}

				// If there is not loteo
				else {

					res.status(404).send('data is not found');

				};

			};

		});

	});

	// Routing control for add new piece of ground
	routes.route('/add_piece_of_ground').post(function(req, res) {

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

				res.status(400).send('Adding new piece of ground failed\nError:  ' + err);

			});

	});

	// Routing control for update a piece of ground
	routes.route('/update_piece_of_ground/:id').post(function(req, res) {

		// Find the instance in DB
		Piece_of_Ground.findById(req.params.id, function(err, piece_of_ground) {

			// If it NOT gets the instance
			if (!piece_of_ground) {

				res.status(404).send('data is not found');

			}

			// if it gets the instance
			else {

				// update all files
				piece_of_ground.name = req.body.name;
				piece_of_ground.size = req.body.size;
				piece_of_ground.price = req.body.price;
				piece_of_ground.available = req.body.available;
				piece_of_ground.loteo = req.body.loteo;
				piece_of_ground.latitude = req.body.latitude;
				piece_of_ground.longitude = req.body.longitude;

				// // update instance in DB
				piece_of_ground.save().then(piece_of_ground => {

					// json response
					res.json('Updated!');

				})

				// if there is an error
				.catch(err => {

					// json response
					res.status(400).send('Update not possible');

				});

			};


		})

	})
 
}