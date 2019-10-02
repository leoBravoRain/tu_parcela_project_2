import React, { Component } from "react";

// map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// make request to server
import axios from 'axios';

// import own component
import Piece_of_Ground_Details from "./components/piece_of_ground_details.component";
import Loteo_Details from "./components/loteo_details.component";
import Pieces_of_Ground_Map_Component from "./components/pieces_of_ground_map.component";

// fake loteo
// this must to be done using a get request to server
const loteo = {

    "name": "Loteo Testing 2",
    "latitude": -39.4,
    "longitude": -73.238901,
    "location_name": "Frutillar",
    "highlight": "Vista al lago",
    "hectare": "5",
    "rounded_price": 3,
    "description": "Hermoso loteo ubicado en la cima de un hermoso cerro con vista al Lago Frutillar, ideal para construir casa de veraneo",
    "access": "Tiene accesor por carretera 5 sur",
    "weather": "LLuvioso durante el año, pero en verano hay mucho sol, con temperaturas promedio de 25 [°C]",
    "ground": "Suelo plano, con muca vegetación simple, ideal para construir y agregar jardín",

};

class Piece_of_Ground_Map extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// loteo
			loteo: loteo,

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
        axios.get('http://192.168.1.9:4000/pieces_of_ground/pieces_of_ground/' + this.props.match.params.id)

        	// if ok
            .then(response => {

            	// get data from API
            	var pieces_of_ground = response.data;

            	// add location item for map location impleemntation
            	pieces_of_ground.map( function(currentValue, index, arr) {

            		// add location item in required map format
            		currentValue['location'] = [currentValue.latitude, currentValue.longitude];

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

			<div className="container">

				<Pieces_of_Ground_Map_Component 
					loteo = {this.state.loteo}
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
					num_piece_of_ground = {this.state.num_piece_of_ground}
					pieces_of_ground = {this.state.pieces_of_ground}
				/>

				<Piece_of_Ground_Details 
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
					pieces_of_ground = {this.state.pieces_of_ground}
				/>

				<Loteo_Details 
					loteo = {this.state.loteo} 
					get_pieces_of_ground = {this.state.get_pieces_of_ground}
				/>



		  	</div>

		);

	}

}

export default Piece_of_Ground_Map;