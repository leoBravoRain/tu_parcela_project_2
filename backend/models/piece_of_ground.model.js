// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Piece_of_Ground = new Schema({

	name: {

		type: String
	},

	size: {

		type: String
	},

	price: {

		type: Number,
	},
	
	latitude: {

		type: Number,
	},

	longitude: {

		type: Number,

	},

	available: {

		type: Boolean,

	},

	// Loteo foreign key
	loteo: {
	
		type: Schema.Types.ObjectId, ref: 'Loteos'
			
	}

})

// Export schema
module.exports = mongoose.model('Piece_of_Ground', Piece_of_Ground);