import React, { Component } from "react";

// carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// material ui
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

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

				{this.props.get_loteo 

				?

					<Container>

						<h2>

							Detalles del {this.props.loteo.name}

						</h2>

						<p>

							{this.props.loteo.description}

						</p>

						<Container className = 'container'>

							<Carousel
								// showIndicators = {false}
							>

								{this.props.loteo.images.map( (img, idx) =>


									<img 
										src = {img}
										// width = "50px"
										// height = "50px"
									/>

								)}

							</Carousel>


						</Container>

						<Grid container spacing={3}>
							
							<Grid item xs={4}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Ubicación </h5>

									{this.props.loteo.location_description}

								</Card>

							</Grid>


							<Grid item xs={4}>

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

							<Grid item xs={4}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>
									<h5> Acceso </h5>

									{this.props.loteo.access}

								</Card>

							</Grid>

							<Grid item xs={4}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Atractivo turístico </h5>

									{this.props.loteo.tourist_attraction}

								</Card>

							</Grid>

							<Grid item xs={4}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Por definir 1 </h5>

									{this.props.loteo.define_1}

								</Card>

							</Grid>
							
							<Grid item xs={4}>

								<Card
									style = {{
										margin: 5,
										padding: 20
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<h5> Por definir 2 </h5>

									{this.props.loteo.define_2}

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