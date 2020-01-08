import React from "react";

// material ui
// import Box from '@material-ui/core/Box';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import theme from "../../../libraries/material-ui/theme";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
// import Icon from '@material-ui/core/Icon';
// import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';

// carousel library
import ItemsCarousel from 'react-items-carousel';
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel'

class Image_Gallery extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			activeItemIndex: 0,

		}

	}

	// render method
	render() {

		// const [activeItemIndex, setActiveItemIndex] = useState(0);
		// const chevronWidth = 40;

		return (

			this.props.get_loteos 

				?

					<Box
						// p = {3}
						style = {{
							backgroundColor: "red",
							display: "flex",
							justifyContent: "center",
							flexDirection: "column"
						}}
					> 

						<Typography align="center" variant="h3" component="h3" gutterBottom style={{ fontWeight: "bold", margin: theme.margin.normal, marginTop: 50,}}>

							Nuestros loteos

						</Typography>

						<Typography align="center" variant="h5" component="h4" gutterBottom style = {{margin: theme.margin.normal, color: "gray", fontWeight: "bold", marginBottom: 100,}}>

							Región de los Ríos

						</Typography>
{/* 
						<Box
							style = {{
								margin: theme.margin.big,
								flexWrap: "wrap",
								display: "flex",
								justifyContent: "space-around",
								maxHeight: "400px",
								overflow: "auto"
								// flexDirection: "row",
							}}
						> */}

						<Grid 
							container
							spacing={0}
							direction="row"
							alignItems="center"
							justify="center"
							// style={{ minHeight: '100vh' }}
							// style = {{
							// 	backgroundColor: "green",
							// 	display: "flex",
							// 	justifyContent: "center",
							// }}
							// container
							// spacing={0}
							// // direction="column"
							// alignItems="center"
							// justify="center"
						>

							{/* <ItemsCarousel
								requestToChangeActive={value => this.setState({ activeItemIndex: value })}
								activeItemIndex={this.state.activeItemIndex}
								numberOfCards={3}
								gutter={20}
								disableSwipe={false}
								leftChevron={
									"<"
								}
								rightChevron={
									">"
								}
								outsideChevron
								chevronWidth={50}
								showSlither={false}
								// showSlither = {true}
								// infiniteLoop = {true}
							> */}
							{/* <Carousel
								autoPlay={true}
								infiniteLoop={true}
							// centerMode = {true}
							// width = "500px"
							// showIndicators = {false}
							> */}
							{/* <AliceCarousel> */}

								{this.props.get_loteos && this.props.loteos.map( (loteo, idx) => {
									return (

										<Grid item xs={12} sm={4}>

											<Card key={idx}
												style={{
													margin: 10,
													textAlign: "center",
													// width: 300,
													width: 350,
													maxWidth: "300px",
												}}
											>
												<CardActionArea onClick={() => window.location.replace("/piece_of_ground/" + loteo.id)}>

													<CardHeader
														title={<b style = {{color: "blue", fontSize: 40,}}> { loteo.name} </b>}
														subheader={loteo.description}
													/>

													<CardMedia
														style={{
															// top: 0,
															// left: 0,
															// width: 150,
															// height: "50%",
															// left: 0,
															// width: 151,
															paddingTop: '56.25%', // 16:9,
															// paddingLeft: "0",
															// marginLeft: '30'
														}}
														image={loteo.images[0]}
													/>

													<CardContent>

														<Typography align = "center" variant="body2" gutterBottom
															style = {{
																fontWeight: "bold",
																// color: "gray",
																fontSize: 20,
															}}
														>

															Desde {loteo.rounded_price} millones

														</Typography>

													</CardContent>

												</CardActionArea>

											</Card>

										</Grid>

									)

									})}
							{/* </AliceCarousel> */}
						
						</Grid>

					</Box>

				:

					<p> Loading </p>
		)

	}

}

export default Image_Gallery;