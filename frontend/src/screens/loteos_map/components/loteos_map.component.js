import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Loteos_Map_Component extends React.Component {
	
	// render method
	render() {

		return (

            <Paper 
                // width={1}
                style = {{
                    margin: 20,
                    padding: 20,
                    // backgroundImage: 'url("https://images.unsplash.com/photo-1464295440335-ee082a75ccca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")',
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "auto",
                    // backgroundColor: "red"
                }}

            >

                <Container>

                    <Typography align = "center" variant="h4" component="h2" gutterBottom>

                        Nuestros proyectos

                    </Typography>

                    <Typography align = "center" variant="body2" gutterBottom>

                        {this.props.get_loteos ? this.props.num_loteos : 0} loteos - {this.props.num_pieces_ground} parcelas disponibles - Todas con facilidades de pago

                    </Typography>

                </Container>

                <Container
                    // style = {{
                    //     alignContent: "center",
                    //     justifyContent: "center"
                    // }}
                >

                    {/* <div style={{ height: '5vh', width: '5%' }}> */}

                        {this.props.get_loteos 

                            ? 

                            <img 
                                // class="center"
                                src = "http://www.citymetric.com/sites/default/files/article_body_2016/08/gmaps_6.png"
                                width = "450"
                                height = "auto"
                                style = {{
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    width: "50%",
                                }}
                            />
                                // <LeafletMap
                                //     center={[-39.838000, -73.236481]}
                                //     zoom={13}
                                //     maxZoom={100}
                                //     attributionControl={true}
                                //     zoomControl={true}
                                //     doubleClickZoom={true}
                                //     scrollWheelZoom={true}
                                //     dragging={true}
                                //     animate={true}
                                //     easeLinearity={0.35}
                                // >
                                //     <TileLayer
                                //     url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                //     />

                                

                                //     {this.props.loteos.map( (loteo, idx) => 

                                //         <Marker key = {idx} position = {loteo.location}>

                                //             <Popup>

                                //                 ajsioasj

                                //             </Popup>

                                //         </Marker>

                                //     )}
                                

                                // </LeafletMap>

                            :

                                <div> Loading </div>

                        }

                    {/* </div> */}

                </Container>

            </Paper>

		)

	}

}

export default Loteos_Map_Component;