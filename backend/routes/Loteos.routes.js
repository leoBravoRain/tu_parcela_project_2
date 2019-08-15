let Loteos = require('../models/loteo.model');

module.exports = function(routes){

	// Routing control for get requests
	routes.route('/loteos').get(function(req, res) {

		// Pick up the pieces of ground
		Loteos.find(function(err, loteos) {

			// if it gets error
			if (err) {

				// display error in console
				console.log(err);

			} else {

				// return pieces of ground in json format
				res.json(loteos);

			};

		});

	});

	// Routing control for add new piece of ground
	routes.route('/add_loteo').post(function(req, res) {

		// new instace of Piece of Ground. it get data from req body
		let loteos = new Loteos(req.body);

		// save instace in DB
		loteos.save()

			// if correctly saved
			.then( loteos => {

				res.status(200).json({'loteos': 'Piece of ground added successfully'});

			})

			// if error
			.catch(err => {

				res.status(400).send('Adding new piece of ground failed');

			});

	});

	// Routing control for update a piece of ground
	routes.route('/update_loteo/:id').post(function(req, res) {

		// Find the instance in DB
		Loteos.findById(req.params.id, function(err, loteo) {

			// If it NOT gets the instance
			if (!loteo) {

				res.status(404).send('data is not found');

			}

			// if it gets the instance
			else {

				// update all files
				loteo.name = req.body.name;
				loteo.highlight = req.body.highlight;
				loteo.location_name = req.body.location_name;
				loteo.hectare = req.body.hectare;
				loteo.rounded_price = req.body.rounded_price;
				loteo.latitude = req.body.latitude;
				loteo.longitude = req.body.longitude;

				// // update instance in DB
				loteo.save().then(loteo => {

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