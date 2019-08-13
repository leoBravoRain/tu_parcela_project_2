import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// import CreateTodo from "./components/create-todo.component";
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
		  // <Router>
		    <div className="container">

				<nav className="navbar navbar-expand-lg navbar-light bg-light">

					<p to="/" className="navbar-brand"> 

						MERN-Stack Todo App

					</p>

					<div className="collpase navbar-collapse">

						<ul className="navbar-nav mr-auto">

							<li className="navbar-item">

								<p to="/" className="nav-link">Todos</p>

							</li>

							<li className="navbar-item">

								<p to="/create" className="nav-link">Create Todo</p>

							</li>

						</ul>

					</div>

				</nav>

		    <div className="container">

		    	<h2>

		    		Nuestros proyectos de parcelas

		    	</h2>

		    	<div>

		    		{this.state.num_loteos} loteos - {this.state.num_pieces_ground} parcelas disponibles - Todas con facilidades de pago

		    	</div>

		    </div>

		  	<div className="container">

				<div style={{ height: '100vh', width: '100%' }}>

					<LeafletMap
				        center={[-39.838000, -73.236481]}
				        zoom={13}
				        maxZoom={100}
				        attributionControl={true}
				        zoomControl={true}
				        doubleClickZoom={true}
				        scrollWheelZoom={true}
				        dragging={true}
				        animate={true}
				        easeLinearity={0.35}
				      >
				        <TileLayer
				          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
				        />

				     

				        {this.state.loteos.map( (loteo, idx) => 

				        	<Marker key = {idx} position = {loteo}>

				        	  <Popup>
				        	    Popup for any custom information.
				        	  </Popup>

				        	</Marker>

				        )}
				      

				      </LeafletMap>
				</div>

		  	</div>


		    </div>
		  // </Router>
		);

	}

}

export default App;