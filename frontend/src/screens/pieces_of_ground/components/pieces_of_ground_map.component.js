import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Pieces_of_Ground_Map_Component extends React.Component {
	
	// render method
	render() {

		return (

			<div>

				<div className = 'container'>

					<h2>

						Mapa de parcelas de {this.props.loteo.name}

					</h2>

					{this.props.get_pieces_of_ground ? this.props.num_piece_of_ground : 0} parcelas disponibles

				</div>

				<div style={{ height: '50vh', width: '100%' }}>

					{this.props.get_pieces_of_ground 

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

						        {this.props.pieces_of_ground.map( (piece_of_ground, idx) => 

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

				<div className = 'container'>

					<h2>

						Cuadro dinamico lateral de parcelas

					</h2>

					{/* This should be a component by itself */}
					{this.props.get_pieces_of_ground 

						?

							this.props.pieces_of_ground.map( (piece_of_ground, idx) => 

								<div key = {idx}>

									<p>

										{piece_of_ground.name}

									</p>

									<p>

										{piece_of_ground.size} m2

									</p>

									<p>

										Valor {piece_of_ground.size}

									</p>

								</div>

							)

						:

							<p> Loading </p>

					}

				</div>

			</div>
            
		)

	}

}

export default Pieces_of_Ground_Map_Component;