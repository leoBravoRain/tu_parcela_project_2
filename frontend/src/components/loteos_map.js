import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

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

			// markers (each place is a list of 2 elements)
			loteos: [

				[
					-39.838000, -73.236481
				],

				[

					-39.820021, -73.232460

				]

			],

		}

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

					        	<Marker key = {idx} position = {loteo}>

					        	  <Popup>
					        	    Popup for any custom information.
					        	  </Popup>

					        	</Marker>

					        )}
					      

					      </LeafletMap>

					</div>

			  	</div>

			</div>

		);

	}

}

export default Loteos_Map;