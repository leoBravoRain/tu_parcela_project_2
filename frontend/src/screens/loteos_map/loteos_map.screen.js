import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// make request to server
import {fs} from "../../libraries/firebase/firebase";

import Image_Gallery from './components/loteos_image_gallery.component';
import Loteos_Map_Component from "./components/loteos_map.component";

// material ui
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import theme from "../../libraries/material-ui/theme";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

// Component 
class Loteos_Map extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			num_loteos: null,
			num_pieces_ground: null,
			// flag of get data from server
			get_loteos: false,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			loteos: null,
			// // dict of pieces of ground by loteo
			// pieces_of_ground_by_loteo: null,

		}

	}

	// component life cycle 
	componentDidMount() {

		// get request for get loteos
		fs.collection('loteos').get()

		.then( snapshotquery => {

            	// // get data from API
            	var loteos = [];

				// // dict of store pieces of ground
				// var pieces_of_ground_by_loteo = {};
				
				// number of pieces of ground
				var num_pieces_ground = 0;

				// iterate over each item
				snapshotquery.forEach(doc => {

					// console.log(doc.data());
					let loteo = doc.data();
					// store location
					loteo["location"] = [loteo.location.latitude, loteo.location.longitude];
					loteo["id"] = doc.id;
					// add loteo to list
					loteos.push(loteo);

					console.log(loteo.num_pieces_of_ground);
					
					// update num of pieces of ground
					num_pieces_ground += parseInt(loteo.num_pieces_of_ground);

					// // get all pieces of ground of loteo
					// fs.collection('loteos').doc(loteo.id).collection("pieces_of_ground").get()
					// 	.then(snapshotquery => {
						
						// 		// // get data from API
						// 		var pieces_of_ground = [];
						
						// 		// iterate over each item
						// 		snapshotquery.forEach(doc => {
							
							// 			// create piece of ground
							// 			var piece_of_ground = doc.data();
							
							// 			// store location
							// 			piece_of_ground["location"] = [piece_of_ground.location.latitude, piece_of_ground.location.longitude];
							
							// 			// add loteo to list
							// 			pieces_of_ground.push(piece_of_ground);
							// 		})
							
							// 		// add piece of ground to list of pieces of ground
							// 		pieces_of_ground_by_loteo[loteo.id] = pieces_of_ground;
							
							// 		console.log(pieces_of_ground_by_loteo);
							
							// 		// update state
							// 		this.setState({ 
								// 			pieces_of_ground_by_loteo: pieces_of_ground_by_loteo
								// 		});
								
								// 	});
								
				});
							
				console.log(num_pieces_ground);

            	// update state
                this.setState({ 

                	// flag of getting data from API
                	get_loteos: true, 
                	// update loteos
                	loteos: loteos,
					num_loteos: loteos.length,
					num_pieces_ground: num_pieces_ground,

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

		// return component
		return (

			this.state.get_loteos

			?

			<Box
				m = {0}
				// disableGutters={true}
				// maxWidth={false}
				// fixed
				// width={1}
				style = {{
					// display: "flex",
					// flexDirection: "column",
					// backgroundColor: "blue",
					// "first-child": {
					// 	margin: 0
					// }
					// flex: 1,
					// flexGrow: 1,
					// height: 100,
					// width: "100%",
					// margin: 0,
					// padding: 0,
					// marginLeft: -100,
					// marginRight: -100,
				}}
			>

				<Loteos_Map_Component 
					// spacing={0}
					get_loteos = {this.state.get_loteos} 
					num_loteos = {this.state.num_loteos}
					num_pieces_ground = {this.state.num_pieces_ground}
					loteos = {this.state.loteos}
				/>

				<Image_Gallery 
					loteos = {this.state.loteos}
					get_loteos = {this.state.get_loteos}
				/>

				<Box
					style = {{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						// width: "50%",
						// maxWidth: "50%",
						// alignSelf: "center",
						// backgroundColor: "red",
						// flex: 1,
					}}				
				>

					{/* <Typography align="center" variant="h5" component="h2" gutterBottom
						color = "secondary"
						style = {{
							margin: theme.margin.big,
							marginBottom: 100,
							fontWeight: "bold",
							textDecoration: "underline",
							// color: theme.palette.primary,
						}}
						>

						VER NUESTROS PROYECTOS TERMINADOS

					</Typography> */}
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
							<Button align="center" variant="contained" color="primary"
								// style={styles.bottom_button}
								style={{
									margin: theme.margin.normal,
									color: "white",
									borderRadius: 50,
									marginBottom: 100,
									flex: 1,
									maxWidth: "30%",
									padding: 25,
									// paddingLeft: 20,
									// paddingRight: 20,
									// color: "red",
									backgroundColor: "green",
								}}
							>

									Ver nuestros proyectos terminados
								{/* </Typography> */}

							</Button>

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

						<Button align="center" variant="contained" color="secondary"
							style={{
								margin: theme.margin.normal,
								color: "white",
								borderRadius: 50,
								marginBottom: 100,
								flex: 1,
								maxWidth: "30%",
								padding: 25,
								// paddingLeft: 20,
								// paddingRight: 20,
								// color: "red",
								// backgroundColor: "red",
							}}
						>

							{/* <Typography gutterBottom variant="a" component="h6"> */}

								Otras Propiedades

							{/* </Typography> */}

						</Button>

					</Grid>

				</Grid>
				</Box>
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						margin: 0,
						// paddingLeft: 100,
						// paddingRight: 100,
						// width: "50%",
						// maxWidth: "50%",
						// alignSelf: "center",
						// backgroundColor: "red",
						// flex: 1,
					}}	
				>
					<Button onClick={() => { window.location.href = "https://www.facebook.com/tuparcelaen5simplespasos/" }}>
						<FacebookIcon/>
					</Button>
					<Button onClick={() => { window.location.href = "https://www.instagram.com/tu_parcela_en_5_simples_pasos/" }}>
						<InstagramIcon />
					</Button>
					
				</Box>
				<Typography align="center" variant="h6" component="h6" gutterBottom style={{ fontWeight: "bold", margin: theme.margin.normal, marginTop: 50, }}>

					¡Mantente actualizado!

				</Typography>


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
		marginBottom: 100,
		flex: 1,
		maxWidth: "30%",
		backgroundColor: "green",
	}
}

export default Loteos_Map;
