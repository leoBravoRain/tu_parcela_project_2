import React, { Component } from "react";
// make request to server
import axios from 'axios';

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

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
        axios.get('http://192.168.1.9:4000/pieces_of_ground/questions_answers')

        	// if ok
            .then(response => {

            	// get data from API
            	var questions_answers = response.data;

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

				<h2>

					Preguntas frecuentes sobre bienes raíces

				</h2>

					{this.state.get_questions_answers 

						? 

					        this.state.questions_answers.map( (q_a, idx) => 

					        	<div key = {idx}>

					        		<b>

					        			{q_a.question}

					        		</b>

					        		<p>

					        			{q_a.answer}

					        		</p>


					        	</div>

					        )
						      

				    	:

				    		<div> Loading </div>

			    	}

			</Paper>
		);

	}

}

export default Questions_Answers;