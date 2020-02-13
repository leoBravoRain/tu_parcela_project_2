import React, { Component } from "react";
// for map
import { Map as LeafletMap, TileLayer, Marker, Tooltip } from 'react-leaflet';

// image mapper 
import ImageMapper from 'react-image-mapper';

// material ui
import Typography from '@material-ui/core/Typography';
import theme from "../../../libraries/material-ui/theme";
import Box from '@material-ui/core/Box';
import { CircularProgress } from "@material-ui/core";


class Loteos_Map_Component extends React.Component {

    redirect_to_loteo_map(loteo) {

        // redirect
        window.location.href = "/piece_of_ground/" + loteo.id;

    }

    componentDidMount() {

        console.log("pieces of ground by loteo: ", this.props);

    }
    // render method
    render() {

        return (

            <Box
                m={0}
                // spacing={10} 
                // xs={12}
                // spacing = {0}
                // disableGutters = {true}
                // maxWidth = {false}
                style={{
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/tu-parcela.appspot.com/o/Screenshot_20200204_223305_cl.bancochile.mbanking.jpg?alt=media&token=36b85bbc-f56a-48b7-be69-86a24cd0a368")',
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    // margin: 0,
                    backgroundSize: "cover",
                    padding: 40,
                    paddingBottom: 200,
                    // width: window.innerWidth,
                    // width: "100%",
                    // backgroundColor: "red",
                    // margin: 0,
                    // borderSpacing: 0,
                    // marginLeft: 0,
                    // padding: 0,
                    // margin: 0+"!important",
                    // padding: "0!important",
                    // marginLeft: "-50px",
                    // marginRight: "-50px",
                    // flexGrow: 0,
                    // maxWidth: `100%`,
                    // flexBasis: `100%`,
                    // left: 0,
                    // position: 'absolute', left: 0, margin: 0
                    // width: "auto",
                    // marginTop: -1,
                    // marginLeft: -1,
                    // marginRight: -1,
                }}

            >

                <Box>

                	{/*<div className="container">

					    <ImageMapper src={URL} map={MAP}
					    	// width={500} imgWidth={1000}
					    	style = {{
					    		width: 10,
					    		height: "auto",
					    	}}
					    	// onLoad={() => this.load()}
					    	onClick={area => alert("click")}
					    	//onMouseEnter={area => this.enterArea(area)}
					    	//onMouseLeave={area => this.leaveArea(area)}
					    	// onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
					    	// onImageClick={evt => this.clickedOutside(evt)}
					    	// onImageMouseMove={evt => this.moveOnImage(evt)}
					    />

					    
					</div>*/}

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
                                {this.props.get_loteos ? "    " + this.props.num_loteos + "   " : "0 "} 
                        </span> 
                            
                            {this.props.num_loteos > 1 ? "loteos" : "loteo"}
                         
                        <span
                            style={{
                                color: "red", 
                                fontSize: 30, 
                                fontWeight: "bold",
                            }}
                        >

                            { "  " + this.props.num_pieces_ground + "   "} 
                        
                        </span> 

                        {this.props.num_pieces_ground > 1 ? "parcelas disponibles" : "parcela disponible"}

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

                </Box>

                <Box
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
                                    url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                                    // url = "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                                />

                                {this.props.loteos.map((loteo, idx) =>

                                    <Marker key={idx} position={loteo.location} 
                                        onClick={() => this.redirect_to_loteo_map(loteo)}
                                    >

                                        <Tooltip 
                                            // style = {{backgroundColor: "red"}} 
                                            permanent = {true}
                                        >
                                            {loteo.name}
                                        </Tooltip>
                                        {/* <Popup>

                                            {loteo.name}

                                        </Popup> */}

                                    </Marker>

                                )}
                    

                            </LeafletMap>

                        :


                            <CircularProgress 
                                    style = {{
                                        alignSelf: "center",
                                    }}
                            />
                                
                     }

                    {/* </div> */}

                </Box>

            </Box>

		)

    }

}

export default Loteos_Map_Component;

