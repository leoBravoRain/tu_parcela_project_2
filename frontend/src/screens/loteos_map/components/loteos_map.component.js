import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import theme from "../../../libraries/material-ui/theme";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Loteos_Map_Component extends React.Component {

    redirect_to_loteo_map(loteo) {

        // redirect
        window.location.replace("/piece_of_ground/" + loteo.id);

    }

    componentDidMount() {

        console.log("pieces of ground by loteo: ", this.props);

    }
    // render method
    render() {

        return (

            <Container
                disableGutters = {true}
                maxWidth = {false}
                style={{
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/your-piece-of-ground-test.appspot.com/o/7921758ea7dfb78c2a4e4e754768c354.jpg?alt=media&token=65c95d59-ecec-48e0-ba20-72d2f9486f5a")',
                    backgroundSize: "cover",
                    padding: 40,
                    paddingBottom: 100,
                    width: "100%",
                    backgroundColor: "yellow",
                }}

            >

                <Container>

                    <Typography align="center" variant="h3" component="h2" gutterBottom style = {{fontWeight: "bold"}}>

                        Nuestros proyectos de parcelas

                    </Typography>

                    <Typography align="center" variant="body2" component = "p" gutterBottom style = {{margin: theme.margin.normal}}>

                        <span 
                            style = {{
                                color: "blue", 
                                fontSize: 30, 
                                fontWeight: "bold",
                                }}
                        >
                                {this.props.get_loteos ? this.props.num_loteos + " " : "0 "} 
                        </span> 
                            
                         loteos - 
                         
                        <span
                            style={{
                                color: "red", 
                                fontSize: 30, 
                                fontWeight: "bold",
                            }}
                        >

                            {this.props.num_pieces_ground + " "} 
                        
                        </span> 

                        parcelas disponibles - 

                        <span
                            style={{
                                color: "yellow",
                                fontSize: 30,
                                fontWeight: "bold",
                            }}
                        >
                         
                            Todas con facilidades de pago

                        </span>

                    </Typography>

                </Container>

                <Container
                    style = {{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >

                    {/* <div style={{ height: '5vh', width: '5%' }}> */}

                    {this.props.get_loteos

                        ?
                            <LeafletMap
                                center={this.props.loteos[0].location}
                                zoom={13}
                                maxZoom={100}
                                attributionControl={true}
                                zoomControl={true}
                                doubleClickZoom={true}
                                scrollWheelZoom={true}
                                dragging={true}
                                animate={true}
                                easeLinearity={0.35}
                                style = {{
                                    // backgroundColor: "red",
                                    borderWidth: 10,
                                    borderStyle: "solid",
                                    borderColor: "white",
                                    // maxHeight: "100%",

                                }}
                            >
                                <TileLayer
                                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                />

                                {this.props.loteos.map((loteo, idx) =>

                                    <Marker key={idx} position={loteo.location} onClick={() => this.redirect_to_loteo_map(loteo)}>

                                        <Popup>

                                            {loteo.name}

                                        </Popup>

                                    </Marker>

                                )}
                    

                            </LeafletMap>

                        :

                            <div> 
                                Loading 
                            </div>

                     }

                    {/* </div> */}

                </Container>

            </Container >

		)

    }

}

export default Loteos_Map_Component;

