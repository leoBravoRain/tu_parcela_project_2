import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Loteos_Map from "./components/loteos_map";
// import EditTodo from "./components/edit-todo.component";
// import TodosList from "./components/todos-list.component";

const AnyReactComponent = ({ text }) => <div>{text.name}</div>;
	
class App extends Component {

	static defaultProps = {
	    center: {
	      lat: 59.95,
	      lng: 30.33
	    },
	    zoom: 11
	};

	constructor(props) {

		super(props);

		// initial states
		this.state = {

			num_loteos: 5,
			num_pieces_ground: 39,
			loteos: [

				[
					-39.838000, -73.236481
				],

				[

					-39.820021, -73.232460

				]

			],

		}

	}


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

										Todos

									</Link>

								</li>

							</ul>

						</div>

					</nav>

			    </div>

		    <Route path = "/" exact component = {Loteos_Map} />

			</Router>

		);

	}

}

export default App;