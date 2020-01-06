import React from "react";

// material ui
import Box from '@material-ui/core/Box';
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

			<Box
				style = {{
					margin: theme.margin.normal,
					marginTop: 50,
					padding: 20
				}}
			>

				{this.props.get_loteos 

				?

					<Box
						// p = {3}
					> 

						<Typography align="center" variant="h3" component="h3" gutterBottom style={{ fontWeight: "bold", margin: theme.margin.normal, marginTop: 50,}}>

							Nuestros loteos

						</Typography>

						<Typography align="center" variant="h5" component="h4" gutterBottom style = {{margin: theme.margin.normal, color: "gray", fontWeight: "bold", marginBottom: 100,}}>

							Región de los Ríos

						</Typography>

						<Box
							style = {{
								margin: theme.margin.big,
							}}
						>

							<ItemsCarousel
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
							>

								{this.props.loteos.map( (loteo, idx) =>

									<Card key={idx}
										style={{
											margin: 10,
											textAlign: "center",
										}}
									>
										<CardActionArea onClick={() => window.location.replace("/piece_of_ground/" + loteo.id)}>

											<CardHeader
												title={<b> { loteo.name} </b>}
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

									)}
							</ItemsCarousel>
						
						</Box>

					</Box>

				:

					<p> Loading </p>
				}

			</Box>

		)

	}

}

export default Image_Gallery;