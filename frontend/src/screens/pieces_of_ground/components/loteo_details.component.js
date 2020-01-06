import React, { Component } from "react";

// carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import theme from "../../../libraries/material-ui/theme";
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';

class Loteo_Details extends React.Component {
	
	// render method
	render() {

		return (
			
			<Box
				style = {{
					margin: 20,
					padding: 20
				}}
			>

				{this.props.get_loteo 

				?

					<Box>

						<Typography align="center" variant="h3" component="h2" gutterBottom style={{ fontWeight: "bold", margin: theme.margin.big }}>

							Información del {this.props.loteo.name}

						</Typography>

						<Typography align="center" variant="body2" component="p" gutterBottom 
							style={{
								margin: theme.margin.big,
								color: "gray",
							}}
						>

							{this.props.loteo.description}

						</Typography>

						<Container
							style = {{
								maxWidth: "50%",
								// margin: theme.margin.normal,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",

							}}
						>

							<Carousel
								autoPlay = {true}
								infiniteLoop = {true}
								// centerMode = {true}
								// width = "500px"
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

						<Grid container spacing={2}>
							
							<Grid item xs={4}>

								<Card
									style = {{
										margin: 5,
										// padding: 20,
										textAlign: "center",
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<CardHeader
										title= "Ubicación"
										style = {{
											fontWeight: "bold",
										}}
										// subheader={loteo.description}
									/>
									
									<CardContent>

										<Typography variant="body2" gutterBottom
											style = {{
												color: "gray",
											}}
										>

											{this.props.loteo.location_description}

										</Typography>

									</CardContent>

								</Card>

							</Grid>


							<Grid item xs={4}>
								
								<Card
									style={{
										margin: 5,
										// padding: 20,
										textAlign: "center",
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<CardHeader
										title="Clima"
										style={{
											fontWeight: "bold",
										}}
									// subheader={loteo.description}
									/>

									<CardContent>

										<Typography variant="body2" gutterBottom
											style={{
												color: "gray",
											}}
										>

											{this.props.loteo.weather}

										</Typography>

									</CardContent>

								</Card>

							</Grid>

							<Grid item xs={4}>
								
								<Card
									style={{
										margin: 5,
										// padding: 20,
										textAlign: "center",
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<CardHeader
										title="Acceso"
										style={{
											fontWeight: "bold",
										}}
									// subheader={loteo.description}
									/>

									<CardContent>

										<Typography variant="body2" gutterBottom
											style={{
												color: "gray",
											}}
										>

											{this.props.loteo.access}

										</Typography>

									</CardContent>

								</Card>

							</Grid>

							<Grid item xs={4}>
									
								<Card
									style={{
										margin: 5,
										// padding: 20,
										textAlign: "center",
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<CardHeader
										title="Atractivo turístico"
										style={{
											fontWeight: "bold",
										}}
									// subheader={loteo.description}
									/>

									<CardContent>

										<Typography variant="body2" gutterBottom
											style={{
												color: "gray",
											}}
										>

											{this.props.loteo.tourist_attraction}

										</Typography>

									</CardContent>

								</Card>

							</Grid>

							<Grid item xs={4}>

								<Card
									style={{
										margin: 5,
										// padding: 20,
										textAlign: "center",
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<CardHeader
										title="Por definir 1"
										style={{
											fontWeight: "bold",
										}}
									// subheader={loteo.description}
									/>

									<CardContent>

										<Typography variant="body2" gutterBottom
											style={{
												color: "gray",
											}}
										>

											{this.props.loteo.define_1}

										</Typography>

									</CardContent>

								</Card>

							</Grid>
							
							<Grid item xs={4}>

								<Card
									style={{
										margin: 5,
										// padding: 20,
										textAlign: "center",
										// color: "white",
										// backgroundColor: "red"
										// backgroundImage: "url('https://bit.ly/2nCGIqc')",
									}}
								>

									<CardHeader
										title="Por definir 2"
										style={{
											fontWeight: "bold",
										}}
									// subheader={loteo.description}
									/>

									<CardContent>

										<Typography variant="body2" gutterBottom
											style={{
												color: "gray",
											}}
										>

											{this.props.loteo.define_2}

										</Typography>

									</CardContent>

								</Card>

							</Grid>

						</Grid>

					</Box>
				:

					<Box>

						Loading

					</Box>

				}

			</Box>



		)

	}

}

export default Loteo_Details;