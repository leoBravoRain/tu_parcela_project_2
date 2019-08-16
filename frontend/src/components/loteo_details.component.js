import React, { Component } from "react";


class Loteo_Details extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		console.log(this.props.loteo);

		// initial states
		this.state = {

			// flag of get data from server
			// get_loteos: false,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			loteo: this.props.loteo,

		}

	}

	// render method
	render() {

		return (

			<div className = 'container'>

				<div className = 'container'>

					<img src = 'https://cdn.britannica.com/s:500x350/90/123890-004-422299B4.jpg'/>

					<div>

						<h5> Descripción </h5>

						{this.state.loteo.description}

					</div>

				</div>

				<div className = 'container'>

					<div>

						<h5> Accesos </h5>

						{this.state.loteo.access}

					</div>

				</div>

				<div className = 'container'>

					<div>

						<h5> Clima </h5>

						{this.state.loteo.weather}

					</div>

				</div>

				<div className = 'container'>

					<div>

						<h5> Suelos </h5>

						{this.state.loteo.ground}

					</div>

				</div>

			</div>



		)

	}

}

export default Loteo_Details;