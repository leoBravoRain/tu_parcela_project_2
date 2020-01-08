import React, { Component } from "react";

// material ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import theme from "../../../libraries/material-ui/theme";

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

			<Box
				style = {{
					// margin: 20,
					padding: theme.padding.big,
					backgroundColor: "#81d0f7",
				}}

			>

				<Typography align="center" variant="h3" component="h2" gutterBottom 
					style={{ 
						fontWeight: "bold", 
						margin: theme.margin.normal ,
						color: "white",
					}}
					
				>

					Detalles de cada parcela
	
				</Typography>

				<Box
					style = {{
						margin: theme.margin.big,
						// color: "white",
						// maxHeight: "500px", 
						// overflow: "auto"
					}}
				>

					<Box
						// stickyHeader = {true}
						style={{
							maxHeight: "300px",
							overflow: "auto"
							// color: "white",
							// backgroundColor: "red",
						}}
					>

						<Table
							// stickyHeader = {true}
							style = {{
								maxHeight: "10px",
								overflow: "auto"
								// color: "white",
								// backgroundColor: "red",
							}}
						>

							<TableHead>

								<TableRow>

									<TableCell style={styles.table_text}> 

										Parcela

									</TableCell>

									<TableCell style={styles.table_text}> 

										Superficie [m<sup> 2</sup>]

									</TableCell>

									<TableCell style = {styles.table_text}> 

										Frente [m]

									</TableCell>

									<TableCell style={styles.table_text}> 

										Largo [m]

									</TableCell>

									<TableCell style={styles.table_text}> 

										Características

									</TableCell>

									<TableCell style={styles.table_text}>  

										Precio [Pesos chilenos]

									</TableCell>

									<TableCell style={styles.table_text}> 

										Disponible

									</TableCell>

								</TableRow>

							</TableHead>

							<TableBody>

							{this.props.get_pieces_of_ground 

							?

								this.props.pieces_of_ground.map( (piece_of_ground, idx) =>

									<TableRow key = {idx}>

										<TableCell style={styles.table_text}>  {piece_of_ground.name} </TableCell>

										<TableCell style={styles.table_text}>  {piece_of_ground.area} </TableCell>

										<TableCell style={styles.table_text}>  {piece_of_ground.front} </TableCell>

										<TableCell style={styles.table_text}>  {piece_of_ground.large} </TableCell>

										<TableCell style={styles.table_text}>  {piece_of_ground.characteristics} </TableCell>

										<TableCell style={styles.table_text}>  {piece_of_ground.price} </TableCell>

										<TableCell style={styles.table_text}>  {piece_of_ground.available} </TableCell>

									</TableRow>
								)

								:
									<Box> Loading </Box>
							}

							</TableBody>

						</Table>

					</Box>

					<Typography align="center" variant="body2" component="p" gutterBottom
						style = {{
							margin: theme.margin.big,
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
						}}
					>

						Esto será un texto sobre el loteo

					</Typography>

				</Box>

			</Box>

		)

	}

}

const styles = {
	table_text: {
		color: "white",
	},
}

export default Piece_of_Ground_Details;