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

// material ui
import theme from './libraries/material-ui/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link as Link_} from '@material-ui/core/Link';

// Component 
class App extends Component {

	// render method
	render() {

		return (

			<MuiThemeProvider theme={theme}>

				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

				<Router>

					<AppBar 
						position="static"
					>

					<Toolbar>

						<Typography gutterBottom>

							<img 
								src={require("./static/images/logo.jpg")} 
								width = "120"
								height = "auto"
								alt="logo" 
							/>

						</Typography>

						<Link to="/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								Inicio

							</Typography>

						</Link>

						{/* <Link to="/piece_of_ground/UVYp2YvBV6xSXhFdI2za/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								Mapa de parcelas

							</Typography>

						</Link> */}

						<Link to="/who_we_are/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								¿Quienes somos?

							</Typography>

						</Link>

						<Link to="/questions_answers/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">

								Preguntas frecuentes

							</Typography>

						</Link>

						{/* external link */}
						<a href= "http://tuparcelaen5simplespasos.cl/clubdeinversionistas/">

							<Typography gutterBottom variant="a" component="h6">	

								Club de Inversionistas

							</Typography>

						</a>

						<Link to="/ask_from_users/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								Consultas

							</Typography>

						</Link>

						<Link to="/contact_us/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">

								Solicita visita

							</Typography>

						</Link>

					</Toolbar>

					</AppBar>

					<Route path = "/" exact component = {Loteos_Map} />

					<Route path = "/piece_of_ground/:id/" exact component = {Piece_of_Ground_Map} />

					<Route path = '/who_we_are/' exact component = {Who_We_Are} />

					<Route path = '/questions_answers/' exact component = {Questions_Answers} />

					<Route path='/ask_from_users/' exact component={Ask_from_Users} />

					<Route path="/contact_us/" exact component={Contact_Us} />

				</Router>

			</MuiThemeProvider>

		);

	}

}

// exporting app
export default App;