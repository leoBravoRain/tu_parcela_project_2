import React, { Component } from "react";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// class
class Piece_of_Ground_Details extends React.Component {
	
	// // constructor
	// constructor(props) {

	// 	// constructur of parent
	// 	super(props);

	// 	// initial states
	// 	this.state = {

	// 		// flag of get data from server
	// 		// get_pieces_of_ground: true,
	// 		// markers (each place is a list of 2 elements)
	// 		// marker: [latitude, longitude]
	// 		pieces_of_ground: this.props.pieces_of_ground,

	// 	}

	// }

	// render method
	render() {

		return (

			<Paper
				style = {{
					margin: 20,
					padding: 20
				}}

			>

				<h2>

				Detalles de cada parcela

				</h2>

				<Container>

					<Table>

						<TableHead>

							<TableRow>

								<TableCell> 

									Parcela

								</TableCell>

								<TableCell>

									Superficie

								</TableCell>

								<TableCell> 

									Ancho

								</TableCell>

								<TableCell> 

									Largo

								</TableCell>

								<TableCell> 

									Topografía

								</TableCell>

							</TableRow>

						</TableHead>

						<TableBody>

						{this.props.get_pieces_of_ground 

						?

							this.props.pieces_of_ground.map( (piece_of_ground, idx) =>

								<TableRow key = {idx}>

									<TableCell> {piece_of_ground.name} </TableCell>

									<TableCell> {piece_of_ground.size} </TableCell>

									<TableCell> {piece_of_ground.width} </TableCell>

									<TableCell> {piece_of_ground.large} </TableCell>

									<TableCell> {piece_of_ground.topography} </TableCell>

								</TableRow>
							)

							:
								<Container> Loading </Container>
						}

						</TableBody>

					</Table>

				</Container>

			</Paper>

		)

	}

}

export default Piece_of_Ground_Details;