import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import Dynamic_Pieces_of_Ground_Component from "./dynamic_pieces_of_ground.component";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Pieces_of_Ground_Map_Component extends React.Component {
	
	// render method
	render() {

		return (

			<Paper 
				style = {{
					margin: 20,
					padding: 20
				}}
			>

				<Container>

					{/* validate loteo */}
					{
						this.props.get_loteo

							?

								<Typography align = "center" variant="h4" component="h2" gutterBottom>
								
									Mapa de parcelas de {this.props.loteo.name}

								</Typography>
							:	

								<Typography align = "center" variant="h4" component="h2" gutterBottom>

									Loading

								</Typography>
								
					}

					<Typography align = "center" variant="body2" gutterBottom>

						{this.props.get_pieces_of_ground ? this.props.num_piece_of_ground : 0} parcelas disponibles

					</Typography>

				</Container>

				<Grid container spacing={2}>

					<Grid item xs = {5}>

						<Dynamic_Pieces_of_Ground_Component 
							get_pieces_of_ground = {this.props.get_pieces_of_ground}
							pieces_of_ground = {this.props.pieces_of_ground}
						/>

					</Grid>

					<Grid item xs = {6}>

						{this.props.get_pieces_of_ground 

							? 
								<Container>

									<img 
										// src = "http://www.citymetric.com/sites/default/files/article_body_2016/08/gmaps_6.png"
										src={require("../../../static/images/valdivia.png")} 
										width = "700"
										height = "auto"
									/>
									
								</Container>
								// <LeafletMap
								// 	center={[-39.838000, -73.236481]}
								// 	zoom={13}
								// 	maxZoom={100}
								// 	attributionControl={true}
								// 	zoomControl={true}
								// 	doubleClickZoom={true}
								// 	scrollWheelZoom={true}
								// 	dragging={true}
								// 	animate={true}
								// 	easeLinearity={0.35}
								// >
								// 	<TileLayer
								// 	url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
								// 	/>

								// 	{this.props.pieces_of_ground.map( (piece_of_ground, idx) => 

								// 		<Marker key = {idx} position = {piece_of_ground.location}>

								// 			<Popup>

								// 				ajsioasj

								// 			</Popup>

								// 		</Marker>

								// 	)}
								

								// </LeafletMap>

							:

								<Container> Loading </Container>

						}

					</Grid>

				</Grid>
				
				<Container>
					<Typography align = "center" variant="h6" gutterBottom>
						Todas con facilidades de pago
					</Typography>
				</Container>
			</Paper>
            
		)

	}

}

export default Pieces_of_Ground_Map_Component;