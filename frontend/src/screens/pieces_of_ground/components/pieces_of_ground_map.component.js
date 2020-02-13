import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

import Dynamic_Pieces_of_Ground_Component from "./dynamic_pieces_of_ground.component";

// material ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from "@material-ui/core";
import theme from "../../../libraries/material-ui/theme";

// image mapper 
import ImageMapper from 'react-image-mapper';

class Pieces_of_Ground_Map_Component extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		var image_width;

		// analyze window size. If it's on mobile, so change the width of the image (image of map with markers)
		if(window.innerWidth < 600) {

			// console.log("Small screen, it changes the image width");
			// alert("small screen: ", toString(window.innerWidth));
			image_width = window.innerWidth/1.5;
			// this.setState({
			// 	image_width: 100,
			// })
		}
		else {
			// alert("big screen: ", toString(window.innerWidth));
			image_width = 500;
			// console.log("Big scree, it keeps the image width")
		}

		// initial states
		this.state = {

			// queue
			pieces_of_ground_to_display: null,
			get_pieces_of_ground_to_display: false,
			image_width: image_width,

			areas_array: [],
			get_areas_array: false,

		}

		this.click_on_marker = this.click_on_marker.bind(this);
		this.dict_image_markers = this.dict_image_markers.bind(this);


	}

	componentDidMount() {

		// fill the queue with initial values
		var pieces_of_ground_to_display = this.props.pieces_of_ground.slice(0, 3);

		console.log("pieces of ground to display: ", pieces_of_ground_to_display);

		this.dict_image_markers();

		// console.log("window size: ", window.innerHeight);

		// // analyze window size. If it's on mobile, so change the width of the image (image of map with markers)
		// if(window.innerHeight < 700) {

		// 	console.log("Small screen, it changes the image width");

		// 	this.setState({
		// 		image_width: 100,
		// 	})
		// }
		// else {
		// 	console.log("Big scree, it keeps the image width")
		// }

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

	dict_image_markers() {
		// build areas array
		var areas = [];

		// iterate over each piece of ground
		for (var i = 0; i < this.props.pieces_of_ground.length; i++) {

			var area = { 
				name: "oiajsioajs", 
				shape: "circle", 
				index: i,
				// coords: [this.state.piece_of_ground[i].x_image, this.state.piece_of_ground[i].y_image, 10 ], 
				coords: [
					this.props.pieces_of_ground[i].x_image, // x of image
					this.props.pieces_of_ground[i].y_image, // y of image
					30 , // radius
					], 
				// preFillColor: "rgba(200, 0, 0, 0.5)", 
				lineWidth: "20",

			}

			areas.push(area);
		}

		console.log("areas: ", areas);

		this.setState({
			areas_array: areas,
			get_areas_array: true,
		})

	} 

	// render method
	render() {

		const URL = this.props.loteo.map_image;
		const MAP = {
		  name: "my-map",
		  areas: this.state.areas_array,
		};

		return (

			this.props.get_loteo && this.props.get_pieces_of_ground

				?

					<Box
						style = {{
							backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/tu-parcela.appspot.com/o/Screenshot_20200204_223305_cl.bancochile.mbanking.jpg?alt=media&token=36b85bbc-f56a-48b7-be69-86a24cd0a368")',
							backgroundPosition: "center top",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							padding: 40,
							paddingBottom: 80,
						}}
					>

						<Typography align="center" variant="h3" component="h2" gutterBottom style={{ fontWeight: "bold", margin: theme.margin.normal }}>
						
							Loteo {this.props.loteo.name}

						</Typography>
						
						<Typography align = "center" variant="body2" gutterBottom style = {{fontWeight: "bold", color:"black", margin: theme.margin.normal, fontSize: 20}}>

							<span
								style={{
									color: "red",
									fontSize: 30,
									fontWeight: "bold",
								}}
							>
								{this.props.get_pieces_of_ground ? this.props.num_piece_of_ground + " ": 0 + " "} 
							
							</span>

							{this.props.num_piece_of_ground > 1 ? "parcelas disponibles" : "parcela disponible"}

						</Typography>

						<Grid container spacing={0}
							style = {{
								// backgroundColor: "red",
								display: "flex",
								justifyContent: "center",
								// margin: theme.margin.big,
							}}
						>

							<Grid item xs={12} sm = {5} 
								style = {{
									// backgroundColor: "red",
									// display: "flex",
									// justifyContent: "center",
									// alignItems: "center",
									// padding: 0,
									// margin: 0,
									// margin: 10,
								}}
							>

								{this.state.get_pieces_of_ground_to_display
								
									?
										<Dynamic_Pieces_of_Ground_Component
											get_pieces_of_ground={this.state.get_pieces_of_ground_to_display}
											pieces_of_ground = {this.state.pieces_of_ground_to_display}
										/>
								
									:
									
										<CircularProgress/>
								}

							</Grid>

							<Grid item xs={12} sm={5} 
								style = {{
									// backgroundColor: "yellow"
								}}
							>

								<Box
									style={{
										display: "flex",
										alignContent: "center",
										justifyContent: "center",
										margin: theme.margin.normal,
										// borderWidith: 10000,
										// borderStyle: "solid",
										// borderColor: "white",
										// backgroundColor: "red",
									}}
								>

								{
									this.state.get_areas_array ?

										<div className="container"

										>

										    <ImageMapper 
										    	// strokeColor = "rgba(200, 0, 0, 0.5)"
										    	// lineWidth = "100"
										    	src={URL} 
										    	map={MAP}
										    	width={this.state.image_width} 
										    	imgWidth={500}

										    	// onLoad={() => this.load()}
										    	onClick={area => this.click_on_marker(area.index)}
										    	//onMouseEnter={area => this.enterArea(area)}
										    	//onMouseLeave={area => this.leaveArea(area)}
										    	// onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
										    	// onImageClick={evt => this.clickedOutside(evt)}
										    	// onImageMouseMove={evt => this.moveOnImage(evt)}
										    />

										    
										</div>

										: 

											null
								}

									{/*<LeafletMap
										center={this.props.pieces_of_ground[0].location}
										zoom={13}
										maxZoom={100}
										attributionControl={true}
										zoomControl={true}
										doubleClickZoom={true}
										scrollWheelZoom={true}
										dragging={true}
										animate={true}
										easeLinearity={0.35}
										style={{
											// backgroundColor: "red",
											borderWidth: 10,
											borderStyle: "solid",
											borderColor: "white",
											// width: "100%",

										}}
									>
										<TileLayer
											// url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
											// url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
											// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      										// attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"										
      										// url = "http://tile.thunderforest.com/cycle/${z}/${x}/${y}.png"
      										url = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"

  										/>

										{this.props.pieces_of_ground.map((piece_of_ground, idx) =>

											<Marker key={idx} position={piece_of_ground.location} onClick={() => this.click_on_marker(idx)}>

												<Tooltip
													// style = {{backgroundColor: "red"}} 
													permanent={true}
												>
													{idx+1}
												</Tooltip>

												<Popup>

													{piece_of_ground.name}

												</Popup>

											</Marker>

										)}

									</LeafletMap>*/}

								</Box>

							</Grid>

						</Grid>

						<Box>

							<Typography align="center" variant="h4" gutterBottom
								style = {{
									color: "yellow",
									fontWeight: "bold",
									margin: theme.margin.big,
								}}
							>

								Todas con facilidades de pago

							</Typography>

						</Box>

					</Box>
				:	

					<CircularProgress/>
            
		)

	}

}

export default Pieces_of_Ground_Map_Component;