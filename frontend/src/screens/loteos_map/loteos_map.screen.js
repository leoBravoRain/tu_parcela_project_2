import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// make request to server
import {fs} from "../../libraries/firebase/firebase";

import Image_Gallery from './components/loteos_image_gallery.component';
import Loteos_Map_Component from "./components/loteos_map.component";

// material ui
import Container from '@material-ui/core/Container';

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
		// axios.get('http://192.168.1.9:4000/pieces_of_ground/loteos')
		fs.collection('loteos').get()

		.then( snapshotquery => {

            	// // get data from API
            	var loteos = [];

				 // iterate over each item
				 snapshotquery.forEach(doc => {

					// console.log(doc.data());
					let loteo = doc.data();
					// store location
					loteo["location"] = [loteo.location.latitude, loteo.location.longitude];
					// add loteo to list
					loteos.push(loteo);

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

			<Container>

                <Loteos_Map_Component 
                    get_loteos = {this.state.get_loteos} 
                    num_loteos = {this.state.num_loteos}
                    num_pieces_ground = {this.state.num_pieces_ground}
                    loteos = {this.state.loteos}
                />

				<Image_Gallery 
                     loteos = {this.state.loteos}
					 get_loteos = {this.state.get_loteos}
					 
				/>


			</Container>

		);

	}

}

export default Loteos_Map;