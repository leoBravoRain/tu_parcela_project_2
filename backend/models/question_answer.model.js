// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Question_Answer = new Schema({

	question: {

		type: String
	},

	answer: {

		type: String
	},

})

// Export schema
module.exports = mongoose.model('Question_Answer', Question_Answer);