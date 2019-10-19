import React, { Component } from "react";

// material ui
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

class Loteo_Description extends React.Component {
	
	// render method
	render() {

		return (
			
			<Paper
				style = {{
					margin: 20,
					padding: 20
				}}
			>

				{this.props.get_pieces_of_ground 

				?

					<Container>

						<h2>

							Descripción de {this.props.loteo.name}

						</h2>

                        <Container>
                            {this.props.loteo.description}
                        </Container>

					</Container>
				:

					<Container>

						Loading

					</Container>

				}

			</Paper>



		)

	}

}

export default Loteo_Description;