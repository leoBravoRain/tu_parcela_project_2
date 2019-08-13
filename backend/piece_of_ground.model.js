// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Piece_of_Ground = new Schema({

	name: {

		type: String
	},

	latitude: {

		type: Number,
	},

	longitude: {

		type: Number,

	}

})

// Export schema
module.exports = mongoose.model('Piece_of_Ground', Piece_of_Ground);