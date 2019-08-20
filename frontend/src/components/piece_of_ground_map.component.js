import React, { Component } from "react";

// map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// make request to server
import axios from 'axios';

// import own component
import Piece_of_Ground_Details from "./piece_of_ground_details.component";
import Loteo_Details from "./loteo_details.component";


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

				<div className = 'container'>

					<h2>

						Mapa de parcelas de {this.state.loteo.name}

					</h2>

					{this.state.get_pieces_of_ground ? this.state.num_piece_of_ground : 0} parcelas disponibles

				</div>

				<div style={{ height: '50vh', width: '100%' }}>

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

						        {this.state.pieces_of_ground.map( (piece_of_ground, idx) => 

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
					{this.state.get_pieces_of_ground 

						?

							this.state.pieces_of_ground.map( (piece_of_ground, idx) => 

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


				<div className = 'container'>

					<h2>

						Detalles de cada parcela

					</h2>

					{this.state.get_pieces_of_ground 

						?

							<Piece_of_Ground_Details pieces_of_ground = {this.state.pieces_of_ground}/>

						:

							<div>

								Loading

							</div>

					}

				</div>

				<div className = 'container'>

					<h2>

						Detalles del {this.state.loteo.name}

					</h2>

					{this.state.get_pieces_of_ground 

						?

							<Loteo_Details loteo = {this.state.loteo} />
						:

							<div>

								Loading

							</div>

					}

				</div>

		  	</div>

		);

	}

}

export default Piece_of_Ground_Map;