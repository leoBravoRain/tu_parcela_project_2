import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
// make request to server
import axios from 'axios';

// Component 
class Loteos_Map extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			num_loteos: 5,
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
        axios.get('http://192.168.1.9:4000/pieces_of_ground/')

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
                	loteos: loteos 
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

			    		Nuestros proyectos de parcelas

			    	</h2>

			    	<div>

			    		{this.state.num_loteos} loteos - {this.state.num_pieces_ground} parcelas disponibles - Todas con facilidades de pago

			    	</div>

			    </div>

			  	<div className="container">

					<div style={{ height: '100vh', width: '100%' }}>

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
							        	    Popup for any custom information.
							        	  </Popup>

							        	</Marker>

							        )}
							      

							    </LeafletMap>

					    	:

					    		<div> Loading </div>

				    	}

					</div>

			  	</div>

			</div>

		);

	}

}

export default Loteos_Map;