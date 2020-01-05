import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// make request to server
import {fs} from "../../libraries/firebase/firebase";

import Image_Gallery from './components/loteos_image_gallery.component';
import Loteos_Map_Component from "./components/loteos_map.component";

// material ui
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import theme from "../../libraries/material-ui/theme";

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

					// update num of pieces of ground
					num_pieces_ground += loteo.num_pieces_of_ground;

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

			<Container
				// disableGutters={true}
				maxWidth={false}
				// fixed = {false}
				style={{
					// backgroundColor: "red",
					flexGrow: 1,
					// width: "100%",
				}}
			>

				{
					this.state.get_loteos

					?

					<Container
						disableGutters={true}
						maxWidth={false}
						// fixed
						// width={1}
						style = {{
							// backgroundColor: "blue",
							// height: 100,
							// width: "100%",
							// margin: 0,
							// padding: 0,
							// marginLeft: -100,
							// marginRight: -100,
						}}
					>

						<Loteos_Map_Component 
							get_loteos = {this.state.get_loteos} 
							num_loteos = {this.state.num_loteos}
							num_pieces_ground = {this.state.num_pieces_ground}
							loteos = {this.state.loteos}
						/>

						<Image_Gallery 
							loteos = {this.state.loteos}
							get_loteos = {this.state.get_loteos}
						/>

						<Typography align="center" variant="h5" component="h2" gutterBottom
							style = {{
								margin: theme.margin.big,
								marginBottom: 100,
								fontWeight: "bold",
							}}
						>

							VER NUESTROS PROYECTOS TERMINADOS
	
						</Typography>

					</Container>

					:

						<CircularProgress />
				}


			</Container>

		);

	}

}

export default Loteos_Map;