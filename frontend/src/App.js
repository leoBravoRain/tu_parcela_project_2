import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Loteos_Map from "./components/loteos_map";
import Piece_of_Ground_Map from "./components/piece_of_ground_map.component";
import Contact from './components/contact.component';
import Questions_Answers from './components/questions_answers.component';

// Component 
class App extends Component {

	// render method
	render() {

		return (

			<Router>

			    <div className="container">

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

			    </div>

		    <Route path = "/" exact component = {Loteos_Map} />

		    <Route path = "/piece_of_ground/:id/" exact component = {Piece_of_Ground_Map} />

		    <Route path = '/contact/' exact component = {Contact} />

		    <Route path = '/questions_answers/' exact component = {Questions_Answers} />

			</Router>

		);

	}

}

// exporting app
export default App;