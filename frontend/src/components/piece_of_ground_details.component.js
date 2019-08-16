import React, { Component } from "react";

// class
class Piece_of_Ground_Details extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// flag of get data from server
			// get_pieces_of_ground: true,
			// markers (each place is a list of 2 elements)
			// marker: [latitude, longitude]
			pieces_of_ground: this.props.pieces_of_ground,

		}

	}

	// render method
	render() {

		return (

			<div className = 'container'>

				<div class = 'table table-responsive'>

					<table class = 'table'>

						<thead>

							<tr>

								<th> 

									Parcela

								</th>

								<th>

									Superficie

								</th>

								<th> 

									Ancho

								</th>

								<th> 

									Largo

								</th>

								<th> 

									Topografía

								</th>

							</tr>

						</thead>

						<tbody>

							{this.state.pieces_of_ground.map( (piece_of_ground, idx) =>

								<tr>

									<td> {piece_of_ground.name} </td>

									<td> {piece_of_ground.size} </td>

									<td> {piece_of_ground.width} </td>

									<td> {piece_of_ground.large} </td>

									<td> {piece_of_ground.topography} </td>

								</tr>
							)}

						</tbody>

					</table>

				</div>

			</div>

		)

	}

}

export default Piece_of_Ground_Details;