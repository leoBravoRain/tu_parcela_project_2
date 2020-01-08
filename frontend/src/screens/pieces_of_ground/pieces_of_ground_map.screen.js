import React, { Component } from "react";

// map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// make request to server
import {fs} from "../../libraries/firebase/firebase";

// import own component
import Piece_of_Ground_Details from "./components/piece_of_ground_details.component";
import Loteo_Details from "./components/loteo_details.component";
import Pieces_of_Ground_Map_Component from "./components/pieces_of_ground_map.component";
// import Loteo_Description from "./components/loteo_description.component";

// material ui
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from "../../libraries/material-ui/theme";

// // fake loteo
// // this must to be done using a get request to server
// const loteo = {

//     "name": "Loteo Testing 2",
//     "latitude": -39.4,
//     "longitude": -73.238901,
//     "location_name": "Frutillar",
//     "highlight": "Vista al lago",
//     "hectare": "5",
//     "rounded_price": 3,
//     "description": "Hermoso loteo ubicado en la cima de un hermoso cerro con vista al Lago Frutillar, ideal para construir casa de veraneo",
//     "access": "Tiene accesor por carretera 5 sur",
//     "weather": "LLuvioso durante el año, pero en verano hay mucho sol, con temperaturas promedio de 25 [°C]",
//     "ground": "Suelo plano, con muca vegetación simple, ideal para construir y agregar jardín",

// };

class Piece_of_Ground_Map extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// loteo
			loteo: null,
			get_loteo: false,
			num_piece_of_ground: null,
			// num_pieces_ground: 39,
			// flag of get data from server
			get_pieces_of_ground: false,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			pieces_of_ground: null,

		}

	}

	// component life cycle 
	componentDidMount() {

		// get request for get data	
		// get loteo
		fs.collection('loteos').doc(this.props.match.params.id).get()
		.then (doc => {
			// console.log(doc.exists);
			if (doc.exists) {
				// update state
				this.setState({
					loteo: doc.data(),
					get_loteo: true,
				});
			}
		});

		// get pieces of ground of loteo
		fs.collection('loteos').doc(this.props.match.params.id).collection("pieces_of_ground").get()

        	// if ok
            // .then(response => {
			.then( snapshotquery => {

            	// get data from API
				// var pieces_of_ground = response.data;
				let pieces_of_ground = [];

				// iterate over each item
				snapshotquery.forEach(doc => {

					// console.log(doc.data());
					let piece_of_ground = doc.data();
					// store location
					piece_of_ground["location"] = [piece_of_ground.location.latitude, piece_of_ground.location.longitude];
					// add loteo to list
					pieces_of_ground.push(piece_of_ground);

				});
				
            	// update state
                this.setState({ 

                	// flag of getting data from API
                	get_pieces_of_ground: true, 

                	// update piece_of_ground
                	pieces_of_ground: pieces_of_ground,

                	num_piece_of_ground: pieces_of_ground.length,

                });

            })

            // if error
            .catch(function (error){

            	// dislpay error in console
                console.log(error);

            });

    }

	// render method
	render() {

		return (

			this.state.get_loteo && this.state.get_pieces_of_ground
				
				?
					<Box
						m = {0}
						// disableGutters={true}
						// maxWidth={false}
						// fixed
						// width={1}
						style={{
							// backgroundColor: "blue",
							// height: 100,
							// width: "100%",
							// margin: 0,
							// padding: 0,
							// marginLeft: -100,
							// marginRight: -100,
						}}
					>

						<Pieces_of_Ground_Map_Component 
							get_loteo = {this.state.get_loteo}
							loteo = {this.state.loteo}
							get_pieces_of_ground = {this.state.get_pieces_of_ground}
							num_piece_of_ground = {this.state.num_piece_of_ground}
							pieces_of_ground = {this.state.pieces_of_ground}
							// style = {{
							// 	backgroundColor: "green",
							// }}
						/>

						<Piece_of_Ground_Details 
							// style={{
							// 	backgroundColor: "green",
							// }}
							get_pieces_of_ground = {this.state.get_pieces_of_ground}
							pieces_of_ground = {this.state.pieces_of_ground}
						/>

						{/* <Loteo_Description
							get_loteo = {this.state.get_loteo}
							get_pieces_of_ground = {this.state.get_pieces_of_ground}
							loteo = {this.state.loteo} 
						/> */}

						<Loteo_Details 
							// style={{
							// 	backgroundColor: "green",
							// }}
							get_loteo = {this.state.get_loteo}
							loteo = {this.state.loteo} 
							get_pieces_of_ground = {this.state.get_pieces_of_ground}
						/>

						{/* Call to action button (form of contact) */}
						{/* <Box
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								// width: "50%",
								// maxWidth: "50%",
								// alignSelf: "center",
								// backgroundColor: "red",
								// flex: 1,
								// margin: theme.margin.normal,
							}}
						> */}
						<Grid container spacing={0}
							style={{
								// margin: theme.margin.big,
								// backgroundColor: "red",
								// display: "flex",
								// alignItems: "center",
								// justifyContent: "center",
								// flexWrap: "wrap",
								

							}}
						>

							<Grid item xs={12} sm={6}
								style={{
									// backgroundColor: "red",
									display: "flex",
									justifyContent: "center",
									// alignItems: "center",
									// padding: 0,
									// margin: 0,
									// margin: 10,
								}}
							>

								<Link to="/ask_from_users/">
									<Button align = "center" variant="contained" color="primary"
										// style={ styles.bottom_button }
										style={{
											margin: theme.margin.normal,
											color: "white",
											borderRadius: 50,
											marginBottom: 100,
											flex: 1,
											maxWidth: "90%",
											padding: 30,
											paddingLeft: 80,
											paddingRight: 80,
											fontSize: 20,
											backgroundColor: "green",
										}}
									>
										Enviar consulta
									</Button>
								</Link>
							</Grid>

							<Grid item xs={12} sm={6}
								style={{
									// backgroundColor: "red",
									display: "flex",
									justifyContent: "center",
									// alignItems: "center",
									// padding: 0,
									// margin: 0,
									// margin: 10,
								}}
							>
							<Link to="/contact_us/">
								<Button align="center" variant="contained" color="secondary"
									style={styles.bottom_button}
								>
									Solicitar visita
								</Button>

							</Link>

							</Grid>

						</Grid>



						{/* </Box> */}
					</Box>
				:
					<CircularProgress />


		);

	}

}

const styles = {
	bottom_button: {
		margin: theme.margin.normal,
		color: "white",
		borderRadius: 50,
		// borderWidth: 100,
		marginBottom: 100,
		flex: 1,
		maxWidth: "90%",
		padding: 30,
		paddingLeft: 80,
		paddingRight: 80,
		fontSize: 20,
	}
}

export default Piece_of_Ground_Map;