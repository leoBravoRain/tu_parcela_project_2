import React, { Component } from "react";
// make request to server
// import axios from 'axios';
import {fs} from "../../libraries/firebase/firebase";

// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CircularProgress } from "@material-ui/core";

const q_a = [

	{
		'question': 'aoisjdaiosjd?',
		'answer': 'asdasiojd',
	}
]
class Questions_Answers extends  React.Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// flag of get data from server
			get_questions_answers: false,
			// list of questions_answers:
			// [ {question: 'aiusdj', answer: 'aisojdaisdj'} ]
			questions_answers: null,

		}

	}

	// life cycle component
	componentDidMount(){

		// get request for get data
        // axios.get('http://192.168.1.9:4000/pieces_of_ground/questions_answers')
		fs.collection('questions_answers').get()
        	// if ok
            // .then(response => {
			.then( snapshotquery => {

            	// get data from API
				const questions_answers = [];

				// iterate over each item
				snapshotquery.forEach(doc => {

					// add quesion_answer to list
					questions_answers.push(doc.data());

				});

            	// update state
                this.setState({ 

                	// flag of getting data from API
                	get_questions_answers: true, 

                	// update questions_answers
                	questions_answers: questions_answers,

                });

            })

            // if error
            .catch(function (error){

            	// dislpay error in console
                console.log(error);

            });

	}

	// render method
	render(){

		return(

			<Paper
                style = {{
                    margin: 20,
                    padding: 20,
                }}
            >

				<Box
					style = {{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "start",
					}}
				>

					<Typography align="center" variant="h3" component="h2" gutterBottom 
						style={{ 
							// fontWeight: "bold" 
							margin: 20,
						}}
						
					>

						Preguntas frecuentes sobre bienes raíces

					</Typography>

						{this.state.get_questions_answers 

							? 

								this.state.questions_answers.map( (q_a, idx) => 

									<Box key = {idx}>

										<Typography align="center" variant="body2" component="p" gutterBottom
											style={{
												fontWeight: "bold",
												margin: 20,
											}}

										>

											{q_a.question}

										</Typography>

										<Typography align="center" variant="body2" component="p" gutterBottom
											style={{
												// fontWeight: "bold" 
												margin: 20,
											}}

										>

											{q_a.answer}

										</Typography>


									</Box>

								)
								

							:

								<CircularProgress />

						}

				</Box>
			</Paper>
		);

	}

}

export default Questions_Answers;