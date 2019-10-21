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
import Loteo_Description from "./components/loteo_description.component";

// material ui
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";

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

		// axios.get('http://192.168.1.9:4000/pieces_of_ground/pieces_of_ground/' + this.props.match.params.id)
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

			<Container>

				<Pieces_of_Ground_Map_Component 
					get_loteo = {this.state.get_loteo}
					loteo = {this.state.loteo}
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
					num_piece_of_ground = {this.state.num_piece_of_ground}
					pieces_of_ground = {this.state.pieces_of_ground}
				/>

				<Piece_of_Ground_Details 
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
					pieces_of_ground = {this.state.pieces_of_ground}
				/>

				<Loteo_Description
					get_loteo = {this.state.get_loteo}
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
					loteo = {this.state.loteo} 
				/>

				<Loteo_Details 
					get_loteo = {this.state.get_loteo}
					loteo = {this.state.loteo} 
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
				/>

				{/* Call to action button (form of contact) */}
				<Link to="/contact_us/">
					<Button align = "center" variant="contained" color="primary">
						Enviar consulta ahora ya
					</Button>
				</Link>

		  	</Container>

		);

	}

}

export default Piece_of_Ground_Map;