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

// list of features of a piece_of_ground
const piece_of_ground_features = [
    "name",
    "area",
    "available",
    "characteristics",
    "front",
    "image",
    "large",
    // "latitude",
    // "longitude",
    "price",
    // "access",
    "x_image",
    "y_image",
];

// list of features of a piece_of_ground
const piece_of_ground_features_in_DB = [
    "area",
    "available",
    "characteristics",
    "front",
    "image",
    "large",
    // "location",
    "name",
    "price",
    "x_image",
    "y_image",
];

class Create_New_Piece_of_Ground extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            piece_of_ground: {
            },
            x: 0,
            y: 0,
            loteo: {},
        }

        this.create = this.create.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

    }
        
    // create new piece_of_ground in DB
    create() {

        // format the piece_of_ground
        var piece_of_ground = this.state.piece_of_ground;

        // // add location in correct format
        // piece_of_ground["location"] = new firebase.firestore.GeoPoint(parseFloat(piece_of_ground.latitude), parseFloat(piece_of_ground.longitude));
        // // remove latitude and longitude from piece_of_ground object
        // delete piece_of_ground["latitude"];
        // delete piece_of_ground["longitude"];

        // validate piece_of_ground has all the features with values (no empty vaues)
        if (!(piece_of_ground_features_in_DB.length == Object.entries(this.state.piece_of_ground).lenght)) {

            // Add a new document with a generated id.
            // change to piece_of_grounds collection
            fs.collection("loteos").doc(this.props.match.params.id_loteo).collection("pieces_of_ground").add(piece_of_ground)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);

                alert("La nueva parcela se ha creado exitosamente");

                // redirect to admi page
                this.props.history.push("/list_pieces_of_ground/" + this.props.match.params.id_loteo);

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

                fs.collection("loteos").doc(this.props.match.params.id_loteo).get()
                .then((doc) => {
                    
                    if(doc.exists) {
                        this.setState({
                            loteo: doc.data(),
                        })
                    }

                })
                .catch(function(error) {

                    console.error("Error: ", error);
                    
                });

                // this.props.history.push('/login/');
            }

        });


    }   

    onMouseMove(e) {
        
        //console.log("click");
        
        // var piece_of_ground = this.state.piece_of_ground;
        // piece_of_ground["x_image"] = String(e.nativeEvent.offsetX);
        // piece_of_ground["y_image"] = String(e.nativeEvent.offsetY);

        // onsole.log("on mouse click: ", piece_of_ground);

        this.setState({ 
            //piece_of_ground["x_image"]: e.nativeEvent.offsetX, piece_of_ground["y_image"]: e.nativeEvent.offsetY 
            // piece_of_ground: piece_of_ground,
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
        }, 
            // console.log("new piece_of_ground: ", this.state.piece_of_ground)
        )

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
                <div>

                    Rellenar todas las casillas

                </div>
                
                <form noValidate autoComplete="off">

                        
                    {
                        piece_of_ground_features.map((key, index) => {

                            return (

                                <Box>

                                    <TextField
                                        // id="standard-name"
                                        //type = "area"
                                        style = {{
                                            width: "60%",
                                        }}
                                        multiline
                                        rows="2"

                                        label= {key}
                                        value={this.state.piece_of_ground.key != null ? this.state.piece_of_ground.key: null}
                                        onChange={(event) => {
                                            //console.log(event.target.value);
                                            var piece_of_ground = this.state.piece_of_ground;
                                            //console.log(piece_of_ground);
                                            piece_of_ground[key] = event.target.value;
                                            //console.log("after: " + piece_of_ground);
                                            this.setState({
                                                piece_of_ground: piece_of_ground
                                            },
                                                console.log(this.state.piece_of_ground)
                                            )
                                        }}
                                        margin="normal"
                                    />

                                </Box>
                            )
                        
                        })
                    }


                </form>  

                <div>

                    <p>
                        Posiciona el mouse sobre el punto que quieres que se agregue esta parcela. Luego copia los valores en las casillas de "x_image" e "y_image"
                    </p>

                    <img 
                        onClick={this.onMouseMove} 
                        // onMouseClick = {() => alert("hi")}
                        width="500" 
                        // height="200" 
                        src= {this.state.loteo.map_image}
                    /> 

                    <h1>
                        x_image:{ this.state.x } y_image: { this.state.y }
                    </h1>

                </div>
                <Button align="center" variant="contained" color="primary"
                // style={styles.bottom_button}
                    onClick = {() => this.create()}
                >

                    Crear nuevo piece_of_ground

                </Button>
           
            </Box>
        );

    }

}

export default Create_New_Piece_of_Ground;