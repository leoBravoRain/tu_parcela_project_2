import React, { Component } from "react";

// carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// material ui
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Loteo_Details extends React.Component {
	
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

							Detalles del {this.props.loteo.name}

						</h2>

						<Container className = 'container'>

							<Carousel
								// showIndicators = {false}
							>

								{[1,2,3].map( (loteo, idx) =>


									<img 
										src = 'https://media-cdn.tripadvisor.com/media/photo-s/0a/23/87/75/postal-de-valdivia.jpg'
										// width = "50px"
										// height = "50px"
									/>

								)}

							</Carousel>


						</Container>

						<Grid container spacing={1}>
							
							<Grid item xs={3}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Accesos </h5>

									{this.props.loteo.description}

								</Card>

							</Grid>


							<Grid item xs={3}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Accesos </h5>

									{this.props.loteo.access}

								</Card>

							</Grid>

							<Grid item xs={3}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>
									<h5> Clima </h5>

									{this.props.loteo.weather}

								</Card>

							</Grid>

							<Grid item xs={3}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Suelos </h5>

									{this.props.loteo.ground}

								</Card>

							</Grid>

						</Grid>
						
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

export default Loteo_Details;