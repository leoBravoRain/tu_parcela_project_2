import React, { Component } from "react";

// map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// make request to server
import axios from 'axios';

class Piece_of_Ground_Map extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// num_piece_of_ground: null,
			// num_pieces_ground: 39,
			// flag of get data from server
			get_pieces_of_ground: false,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			piece_of_ground: null,

		}

	}

	// component life cycle 
	componentDidMount() {

		// get request for get data
        axios.get('http://192.168.1.9:4000/pieces_of_ground/pieces_of_ground')

        	// if ok
            .then(response => {

            	// get data from API
            	var piece_of_ground = response.data;

            	// add location item for map location impleemntation
            	piece_of_ground.map( function(currentValue, index, arr) {

            		// add location item in required map format
            		currentValue['location'] = [currentValue.latitude, currentValue.longitude];

            	});

            	// update state
                this.setState({ 

                	// flag of getting data from API
                	get_pieces_of_ground: true, 

                	// update piece_of_ground
                	piece_of_ground: piece_of_ground,

                	// num_piece_of_ground: piece_of_ground.length,

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

				<div style={{ height: '100vh', width: '100%' }}>

					{this.state.get_pieces_of_ground 

						? 

					
							<LeafletMap
						        center={[-39.838000, -73.236481]}
						        zoom={13}
						        maxZoom={100}
						        attributionControl={true}
						        zoomControl={true}
						        doubleClickZoom={true}
						        scrollWheelZoom={true}
						        dragging={true}
						        animate={true}
						        easeLinearity={0.35}
						      >
						        <TileLayer
						          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
						        />

						     

						        {this.state.piece_of_ground.map( (piece_of_ground, idx) => 

						        	<Marker key = {idx} position = {piece_of_ground.location}>

						        	  <Popup>

						        	  	ajsioasj

						        	  </Popup>

						        	</Marker>

						        )}
						      

						    </LeafletMap>

				    	:

				    		<div> Loading </div>

			    	}

				</div>

		  	</div>

		);

	}

}

export default Piece_of_Ground_Map;