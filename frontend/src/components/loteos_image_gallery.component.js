import React, { Component } from "react";


class Image_Gallery extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// flag of get data from server
			// get_loteos: false,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			loteos: this.props.loteos,

		}

	}

	// render method
	render() {

		return (

			<div className = 'container'>

				{this.state.loteos.map( (loteo, idx) =>

					<div key = {idx}>

						<p>

							{loteo.name}

						</p>

						<p>

							{loteo.highlight}

						</p>

						<p>

							{loteo.location_name} - {loteo.hectare} ha

						</p>

						<img src = 'https://cdn.britannica.com/s:500x350/90/123890-004-422299B4.jpg'/>

						<p>

							Desde {loteo.rounded_price} millones

						</p>

					</div>

					)}

			</div>

		)

	}

}

export default Image_Gallery;