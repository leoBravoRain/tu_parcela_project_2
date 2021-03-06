import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// make request to server
import { fs } from "../../libraries/firebase/firebase";
import { auth } from "../../libraries/firebase/firebase";
import firebase from "firebase";

// list of features of a loteo
const loteo_features = [
    "name",
    "hectare", 
    "highlight",
    "access", 
    //"id", 
    // "images", // this m
    // "location",
    "latitude", 
    "longitude",
    "location_description", 
    // "location_name",
    "num_pieces_of_ground",
    "rounded_price",
    "tourist_attraction",
    "weather",
    "map_image",
];

// list of features of a loteo
const loteo_features_in_DB = [
    "hectare", 
    "highlight", 
    //"id", 
    "images", 
    "location",
    "location_description", 
    // "location_name",
    "name",
    "num_pieces_of_ground",
    "rounded_price",
    "tourist_attraction",
    "weather",
    "map_image",
    "access",
];

class Create_New_Loteo extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            loteo: {
                images: [""],
            },
            number_images: 1,
        }

        this.create_new_loteo = this.create_new_loteo.bind(this);

    }
        
    // create new loteo in DB
    create_new_loteo() {

        // format the loteo
        var loteo = this.state.loteo;

        // add location in correct format
        loteo["location"] = new firebase.firestore.GeoPoint(parseFloat(loteo.latitude), parseFloat(loteo.longitude));
        // remove latitude and longitude from loteo object
        delete loteo["latitude"];
        delete loteo["longitude"];

        // // change this by loading images from user
        // loteo["images"] = [
        //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
        //     "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg",
        // ];

        // validate loteo has all the features with values (no empty vaues)
        if (!(loteo_features_in_DB.length == Object.entries(this.state.loteo).lenght)) {

            // Add a new document with a generated id.
            // change to loteos collection
            fs.collection("loteos").add(this.state.loteo)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);

                alert("Se ha creado un nuevo loteo exitosamente");

                // redirect to admi page
                this.props.history.push("/admin");
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }

        else {
            alert("Tienes un campo vacio, por favor rellenalo.")
        }

    }

    componentDidMount() {

         // check if user is logged
        auth.onAuthStateChanged((user) => {

            if (!user) {

                console.log("user not logged");

                this.props.history.push('/login/');

                console.log("aosjid");

            }

            else {

                console.log("user logged");

                // this.props.history.push('/login/');
            }

        });

    }

    render() {

        return (

            <Box
                style={{
                    // margin: 20,
                    // padding: 20,
                    // justifyContent: "center",
                    // alignItems: "start",
                    // padding: 50,
                    // display: "flex",
                    // width: "100%"
                }}
            >

                <Typography align="center" variant="body" component="p" gutterBottom color = "secondary">
                    Debes rellenar todas las casillas (Despues puedes editar toda la informacion)
                </Typography>

                <form noValidate autoComplete="off">

                        
                    {
                        loteo_features.map((key, index) => {

                            return (

                                <Box
                                    style = {{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                    }}
                                >

                                    <TextField
                                        // id="standard-name"
                                        style = {{
                                            width: "60%",
                                        }}
                                        multiline
                                        rows="2"
                                        label= {key}
                                        value={this.state.loteo.key != null ? this.state.loteo.key: null}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            var loteo = this.state.loteo;
                                            //console.log(loteo);
                                            loteo[key] = event.target.value;
                                            //console.log("after: " + loteo);
                                            this.setState({
                                                loteo: loteo
                                            },
                                                // console.log(this.state.loteo)
                                            )
                                        }}
                                        margin="normal"
                                    />

                                </Box>
                            )
                        
                        })
                    }

                </form>   

                <Typography align="center" variant="body" component="p" gutterBottom color = "secondary">
                    Definir primero el numero de imagenes, y luego agregarlas (si se cambia el numero de imagenes, se borraran las imagenes que hayas agregado anteriormente en cada casilla)
                </Typography>

                <TextField
                    // id="standard-name"
                    style = {{
                        width: "60%",
                    }}
                    multiline
                    rows="2"

                    label= "Number of images"
                    value= {this.state.number_images}
                    onChange={(event) => {
                        //console.log("after: " + loteo);
                        var loteo = this.state.loteo;
                        // loteo.images.length = event.target.value;
                        for (var i = 0; i < event.target.value; i++) {
                            loteo.images[i] = "";
                        }
                        // console.log("new lenght: ", event.target.value);

                        this.setState({
                            number_images: event.target.value,
                            loteo: loteo,
                        },
                            // console.log("new loteo: ", this.state.loteo)
                        )
                    }}
                    margin="normal"
                />

                {
                    // it needs to have the number of eemets equals to number_images state
                    this.state.loteo.images.map((item, index) => {

                        // console.log("image from images map");

                        return (

                            <Box>

                                <TextField
                                    style = {{
                                        width: "60%",
                                    }}
                                    multiline
                                    rows="2"
                                        
                                    // id="standard-name"
                                    label= {"Image " + (index + 1)}
                                    value={this.state.loteo.images[index]}
                                    onChange={(event) => {
                                        //console.log(event.target.value);
                                        var loteo = this.state.loteo;
                                        //console.log(loteo);
                                        loteo["images"][index] = event.target.value;
                                        //console.log("after: " + loteo);
                                        this.setState({
                                            loteo: loteo
                                        },
                                            console.log(this.state.loteo)
                                        )
                                    }}
                                    margin="normal"
                                />

                            </Box>
                        )
                    
                    })
                }
                <Button align="center" variant="contained" color="primary"
                // style={styles.bottom_button}
                    onClick = {() => this.create_new_loteo()}
                >

                    Crear nuevo Loteo

                </Button>
           
            </Box>
        );

    }

}

export default Create_New_Loteo;