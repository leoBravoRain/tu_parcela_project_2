import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Loteos_Map from "./screens/loteos_map/loteos_map.screen";
import Piece_of_Ground_Map from "./components/piece_of_ground_map.component";
import Contact from './components/contact.component';
import Questions_Answers from './components/questions_answers.component';

// material ui
import theme from './libraries/material-ui/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Component 
class App extends Component {

	// render method
	render() {

		return (

			<MuiThemeProvider theme={theme}>

				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

				<Router>

					<AppBar position="static">

					<Toolbar>

						<Typography gutterBottom variant="h4" component="h2">

							Tu parcela en 5 simples pasos

						</Typography>

						<Link to="/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								Mapa de loteos

							</Typography>

						</Link>

						<Link to="/piece_of_ground/5d573433778d982eb6957df0" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								Mapa de parcelas

							</Typography>

						</Link>

						<Link to="/contact/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								¿Quienes somos?

							</Typography>

						</Link>

						<Link to="/questions_answers/" className="nav-link">

							<Typography gutterBottom variant="h6" component="h6">	

								¿Qué son los bienes raíces?

							</Typography>

						</Link>

					</Toolbar>

						{/* <div className="container">

							<nav className="navbar navbar-expand-lg navbar-light bg-light">

								<Link to="/" className="navbar-brand"> 

									Tu parcela en 5 simples pasos

								</Link>

								<div className="collpase navbar-collapse">

									<ul className="navbar-nav mr-auto">

										<li className="navbar-item">

											<Link to="/" className="nav-link">

												Mapa de loteos

											</Link>

										</li>

										<li className="navbar-item">

											<Link to="/piece_of_ground/5d573433778d982eb6957df0" className="nav-link">

												Mapa de parcelas

											</Link>

										</li>

										<li className="navbar-item">

											<Link to="/contact/" className="nav-link">

												¿Quienes somos?

											</Link>

										</li>

										<li className="navbar-item">

											<Link to="/questions_answers/" className="nav-link">

												¿Que son los bienes raíces?

											</Link>

										</li>

									</ul>

								</div>

							</nav>

						</div> */}

					</AppBar>

					<Route path = "/" exact component = {Loteos_Map} />

					<Route path = "/piece_of_ground/:id/" exact component = {Piece_of_Ground_Map} />

					<Route path = '/contact/' exact component = {Contact} />

					<Route path = '/questions_answers/' exact component = {Questions_Answers} />

				</Router>

			</MuiThemeProvider>

		);

	}

}

// exporting app
export default App;