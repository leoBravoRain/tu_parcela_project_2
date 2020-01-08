import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Loteos_Map from "./screens/loteos_map/loteos_map.screen";
import Piece_of_Ground_Map from "./screens/pieces_of_ground/pieces_of_ground_map.screen";
import Who_We_Are from './screens/who_we_are/who_we_are.screen';
import Questions_Answers from './screens/questions_answers/questions_answers.screen';
import Ask_from_Users from './screens/ask_from_users/ask_from_users.screen';
import Contact_Us from './screens/contact_us/contact_us.screen';
import Admin from "./screens/admin/admin.screen";
import Edit_Loteo from "./screens/admin/edit_loteo.screen";
import Admin_Pieces_of_Ground from "./screens/admin/list_pieces_of_ground.screen";
import Edit_Piece_of_Ground from "./screens/admin/edit_piece_of_ground.screen";

// material ui
import theme from './libraries/material-ui/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import {Link as Link_} from '@material-ui/core/Link';
import { Button } from "@material-ui/core";


import { withStyles } from '@material-ui/styles';



// Component 
class App extends Component {
	
	// render method
	render() {
		
		// const styles = theme => ({
		// 	root: {
		// 		padding: theme.spacing.unit,
		// 		[theme.breakpoints.up('md')]: {
		// 			backgroundColor: "green",
		// 		},
		// 		[theme.breakpoints.down('sm')]: {
		// 			backgroundColor: "red",
		// 		},
		// 	},
		// });
		
		return (

			<MuiThemeProvider theme={theme}>

				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

				<Router>

					<AppBar 
						color = "primary"
						position="static"
					>

						<Toolbar
							// className={styles.root}
							// style = {{
							// 	[theme.breakpoints.up('sm')]: {
							// 		backgroundColor: "green",
							// 	},
							// }}
						>

							<Typography gutterBottom>

								<Link to="/" className="nav-link" style={styles.nav_item_text}>

									<img 
										src={require("./static/images/logo.jpg")} 
										width = "120"
										height = "auto"
										alt="logo" 
									/>

								</Link>

							</Typography>

							<Link to="/" className="nav-link" style={styles.nav_item_text}>

								<Typography gutterBottom variant="h6" component="h6">	

									Inicio

								</Typography>

							</Link>

							<Link to="/who_we_are/" className="nav-link" style={styles.nav_item_text}>

								<Typography gutterBottom variant="h6" component="h6">	

									¿Quienes somos?

								</Typography>

							</Link>

							<Link to="/questions_answers/" className="nav-link" style={styles.nav_item_text}>

								<Typography gutterBottom variant="h6" component="h6">

									Preguntas frecuentes

								</Typography>

							</Link>


							<Link to="/ask_from_users/" className="nav-link" style={styles.nav_item_text}>

								<Typography gutterBottom variant="h6" component="h6">	

									Consultas

								</Typography>

							</Link>

								<Link to="/contact_us/" className="nav-link" style={styles.nav_item_text, { "flex": 1, "color": "white" }}>

								<Typography gutterBottom variant="h6" component="h6">

									Solicitar visita

								</Typography>

							</Link>

								<Button align="center" variant="contained" color="secondary" 

									onClick={() => { 
										window.location.replace("http://tuparcelaen5simplespasos.cl/clubdeinversionistas/")
									}}
									
									style = {{
										color: "white",
										borderRadius: 50,
										textAlign: "center",
									}}
								>

										Club de Inversionistas

								</Button>

						</Toolbar>

					</AppBar>

					<Route path = "/" exact component = {Loteos_Map} />

					<Route path = "/piece_of_ground/:id/" exact component = {Piece_of_Ground_Map} />

					<Route path = '/who_we_are/' exact component = {Who_We_Are} />

					<Route path = '/questions_answers/' exact component = {Questions_Answers} />

					<Route path='/ask_from_users/' exact component={Ask_from_Users} />

					<Route path="/contact_us/" exact component={Contact_Us} />

					{/* admin page */}
					<Route path="/admin/" exact component={Admin} />

					<Route path="/edit_loteo/:id_loteo" exact component={Edit_Loteo} />

					<Route path="/list_pieces_of_ground/:id_loteo" exact component={Admin_Pieces_of_Ground} />

					<Route path="/edit_piece_of_ground/:id_piece_of_ground" exact component={Edit_Piece_of_Ground} />
					
				</Router>

			</MuiThemeProvider>

		);

	}

}

const styles = {
	nav_item_text: {
		color: "white",
	}
}
// exporting app
export default App;