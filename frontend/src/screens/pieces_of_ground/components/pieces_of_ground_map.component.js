import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import Dynamic_Pieces_of_Ground_Component from "./dynamic_pieces_of_ground.component";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CircularProgress } from "@material-ui/core";

class Pieces_of_Ground_Map_Component extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// queue
			pieces_of_ground_to_display: null,
			get_pieces_of_ground_to_display: false,

		}

		this.click_on_marker = this.click_on_marker.bind(this);

	}

	componentDidMount() {

		// fill the queue with initial values
		var pieces_of_ground_to_display = this.props.pieces_of_ground.slice(0, 3);

		console.log("pieces of ground to display: ", pieces_of_ground_to_display);

		// update state
		this.setState({
			get_pieces_of_ground_to_display: true,
			pieces_of_ground_to_display: pieces_of_ground_to_display,
		})

	}

	// it manages click on marker in map
	click_on_marker(index) {
		
		console.log(index)

		// update state
		this.setState({get_pieces_of_ground_to_display: false});

		// get current list of dynamic pieces of ground 
		var pieces_of_ground_to_display = this.state.pieces_of_ground_to_display;

		// check if element is not in array
		if (!this.state.pieces_of_ground_to_display.includes(this.props.pieces_of_ground[index])){
			
			// remove last element of 
			pieces_of_ground_to_display.pop();
	
			// add new element at begining
			pieces_of_ground_to_display.unshift(this.props.pieces_of_ground[index]);
	
			console.log(pieces_of_ground_to_display);
	
			// update states
			this.setState({
				get_pieces_of_ground_to_display: true,
				pieces_of_ground_to_display: pieces_of_ground_to_display,
			})
		}

		// if element is in array
		else {
			// update state
			this.setState({ get_pieces_of_ground_to_display: true });
		}

	}

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
						this.props.get_loteo && this.props.get_pieces_of_ground

							?

								<Container>

									<Typography align = "center" variant="h4" component="h2" gutterBottom>
									
										Proyecto {this.props.loteo.name}

									</Typography>
									
									<Typography align = "center" variant="body2" gutterBottom>

										{this.props.get_pieces_of_ground ? this.props.num_piece_of_ground : 0} parcelas disponibles

									</Typography>

									<Grid container spacing={2}>

										<Grid item xs={5}>

											{this.state.get_pieces_of_ground_to_display
											
												?
													<Dynamic_Pieces_of_Ground_Component
														get_pieces_of_ground={this.state.get_pieces_of_ground_to_display}
														pieces_of_ground={this.state.pieces_of_ground_to_display}
													/>
											
												:
												
													<CircularProgress/>
											}

										</Grid>

										<Grid item xs={6}>

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

												{this.props.pieces_of_ground.map((piece_of_ground, idx) =>

													<Marker key={idx} position={piece_of_ground.location} onClick={() => this.click_on_marker(idx)}>

														<Popup>

															{piece_of_ground.name}

														</Popup>

													</Marker>

												)}

											</LeafletMap>

										</Grid>

									</Grid>

									<Container>

										<Typography align="center" variant="h6" gutterBottom>

											Todas con facilidades de pago

										</Typography>

									</Container>

								</Container>
							:	

								<CircularProgress/>
							}
				</Container>
				
			</Paper>
            
		)

	}

}

export default Pieces_of_Ground_Map_Component;