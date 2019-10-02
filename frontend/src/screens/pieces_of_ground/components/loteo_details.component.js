import React, { Component } from "react";


class Loteo_Details extends React.Component {
	
	// // constructor
	// constructor(props) {

	// 	// constructur of parent
	// 	super(props);

	// 	console.log(this.props.loteo);

	// 	// initial propss
	// 	this.props = {

	// 		// flag of get data from server
	// 		// get_loteos: false,
	// 		// markers (each place is a list of 2 elements)
	// 		// marker: [latitude, longitude]
	// 		loteo: this.props.loteo,

	// 	}

	// }

	// render method
	render() {

		return (
			
			<div className = 'container'>

				{this.props.get_pieces_of_ground 

				?

					<div>
						<h2>

						Detalles del {this.props.loteo.name}

						</h2>

						<div className = 'container'>

							<img src = 'https://cdn.britannica.com/s:500x350/90/123890-004-422299B4.jpg'/>

							<div>

								<h5> Descripción </h5>

								{this.props.loteo.description}

							</div>

						</div>

						<div className = 'container'>

							<div>

								<h5> Accesos </h5>

								{this.props.loteo.access}

							</div>

						</div>

						<div className = 'container'>

							<div>

								<h5> Clima </h5>

								{this.props.loteo.weather}

							</div>

						</div>

						<div className = 'container'>

							<div>

								<h5> Suelos </h5>

								{this.props.loteo.ground}

							</div>

						</div>

					</div>
				:

					<div>

						Loading

					</div>

				}

			</div>



		)

	}

}

export default Loteo_Details;