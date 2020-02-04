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
import Create_New_Loteo from "./screens/admin/create_new_loteo.screen";
import Create_New_Piece_of_Ground from "./screens/admin/create_new_piece_of_ground.screen";
import Admin_Login from "./screens/admin/admin_login.screen";

// material ui
import theme from './libraries/material-ui/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import Menu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

// Component 
class App extends Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {
			
			open_drawer: false,
			width: 0, 
			height: 0,
			
		}
		
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}	

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight }, 
			() => {
				console.log("width: ", this.state.width);
				// if (this.state.width < "700") {
				this.setState({
					// open_drawer: fals,
					display_navbar: this.state.width > 700 ? true : false, 
				});
				// }

			}

		);
	}

	// render method
	render() {
		
		const toggleDrawer = (side, open) => event => {
			if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
				// return;
			}

			this.setState({
				open_drawer: open
			});
		};
		
		return (

			<MuiThemeProvider theme={theme}>

				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

				<Router>

					<Drawer open={this.state.open_drawer} onClose={toggleDrawer(false)} >

						<div>
							<Link to="/" className="nav-link" >

								<Typography gutterBottom variant="h6" component="h6" style={styles.nav_item_text_drawer}>

									Inicio

								</Typography>

							</Link>

							<Link to="/who_we_are/" className="nav-link">

								<Typography gutterBottom variant="h6" component="h6" style={styles.nav_item_text_drawer}>

									¿Quienes somos?

								</Typography>

							</Link>

							<Link to="/questions_answers/" className="nav-link" style={styles.nav_item_text_drawer}>

								<Typography gutterBottom variant="h6" component="h6">

									Preguntas frecuentes

								</Typography>

							</Link>

							<Link to="/ask_from_users/" className="nav-link" style={styles.nav_item_text_drawer}>

								<Typography gutterBottom variant="h6" component="h6">

									Consultas

								</Typography>

							</Link>

							<Link to="/contact_us/" className="nav-link" style={styles.nav_item_text_drawer}>

								<Typography gutterBottom variant="h6" component="h6">

									Solicitar visita

								</Typography>

							</Link>

							<Button align="center" variant="contained" color="secondary"

								onClick={() => {
									window.location.href = "https://clubdeinversionistas.tuparcelaen5simplespasos.cl/clubdeinversionistas/"
								}}

								style={{
									color: "white",
									borderRadius: 50,
									textAlign: "center",
								}}
							>

								Club de Inversionistas

							</Button>

						</div>

					</Drawer>
					
					{
						this.state.display_navbar

						?

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
												window.location.href = "https://clubdeinversionistas.tuparcelaen5simplespasos.cl/clubdeinversionistas/"
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
						:
							<AppBar
								color="primary"
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

									<Button 
										onClick={() => this.setState({ open_drawer: !this.state.open_drawer})}
										style = {{
											color: "white",
											margin: 5,
										}}
									>
										<Menu />
									</Button>

									<Typography gutterBottom variant="h6" component="h6" style = {styles.nav_item_text, {fontSize: 15,}}>

										Tu parcela en 5 simples pasos

									</Typography>
								</Toolbar>

							</AppBar>
					}

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

					<Route path="/edit_piece_of_ground/:id_loteo/:id_piece_of_ground" exact component={Edit_Piece_of_Ground} />

					<Route path="/create_new_loteo" exact component={Create_New_Loteo} />

					<Route path="/create_new_piece_of_ground/:id_loteo" exact component={Create_New_Piece_of_Ground} />

					<Route path="/admin_login" exact component={Admin_Login} />
					
				</Router>

			</MuiThemeProvider>

		);

	}

}

const styles = {
	nav_item_text: {
		color: "white",
	},
	nav_item_text_drawer: {
		color: "black",
	}

}
// exporting app
export default App;
