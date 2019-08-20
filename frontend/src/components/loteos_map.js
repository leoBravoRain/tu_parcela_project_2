import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
// make request to server
import axios from 'axios';

import Image_Gallery from './loteos_image_gallery.component'

import Piece_of_Ground_Map from "./piece_of_ground_map.component";

import { BrowserRouter as Link, Route } from "react-router-dom";

// Component 
class Loteos_Map extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			num_loteos: null,
			num_pieces_ground: 39,
			// flag of get data from server
			get_loteos: false,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			loteos: null,

		}

	}

	// component life cycle 
	componentDidMount() {

		// get request for get data
        axios.get('http://192.168.1.9:4000/pieces_of_ground/loteos')

        	// if ok
            .then(response => {

            	// get data from API
            	var loteos = response.data;

            	// add location item for map location impleemntation
            	loteos.map( function(currentValue, index, arr) {

            		// add location item in required map format
            		currentValue['location'] = [currentValue.latitude, currentValue.longitude];

            	});

            	// update state
                this.setState({ 

                	// flag of getting data from API
                	get_loteos: true, 

                	// update loteos
                	loteos: loteos,

                	num_loteos: loteos.length,

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

			<div className = 'container'>

			    <div className="container">

			    	<h2>

			    		Nuestros proyectos

			    	</h2>

			    	<div>

			    		{this.state.get_loteos ? this.state.num_loteos : 0} loteos - {this.state.num_pieces_ground} parcelas disponibles - Todas con facilidades de pago

			    	</div>

			    </div>

			  	<div className="container">

			  		<h2>

			  			Mapa de loteos

			  		</h2>

					<div style={{ height: '50vh', width: '100%' }}>

						{this.state.get_loteos 

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

							     

							        {this.state.loteos.map( (loteo, idx) => 

							        	<Marker key = {idx} position = {loteo.location}>

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

			  	<div>

			  		<h2>

			  			Detalle de loteos
			  			
			  		</h2>

			  		{this.state.get_loteos 

			  			?

			  				<Image_Gallery loteos = {this.state.loteos} />

		  				:

		  					<p> Loading </p>
			  		}

			  	</div>

			  	<div>

			  		<b>

				  		Preguntas y Respuestas

				  		Aprende mas sobre bienes y raíces

				  	</b>

			  	</div>

			  	<div>

			  		<b>

			  			Datos de contacto

			  		</b>

			  	</div>

			</div>

		);

	}

}

export default Loteos_Map;