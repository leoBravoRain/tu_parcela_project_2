// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
// let Piece_of_Ground = new Schema({
let Loteos = new Schema({

	name: {

		type: String
	},

	description: {

		type: String
	},

	access: {

		type: String
	},

	weather: {

		type: String
	},

	ground: {

		type: String
	},

	highlight: {

		type: String
	},

	location_name: {

		type: String
	},

	hectare: {

		type: String
	},

	rounded_price: {

		type: Number,
	},
	
	latitude: {

		type: Number,
	},

	longitude: {

		type: Number,

	}

})

// Export schema
// module.exports = mongoose.model('Piece_of_Ground', Piece_of_Ground);
module.exports = mongoose.model('Loteos', Loteos);