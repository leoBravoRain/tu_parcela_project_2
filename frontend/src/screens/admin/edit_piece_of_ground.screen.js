import React, { Component } from "react";

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

class Edit_Piece_of_Ground extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            // flag of get data from server
            get_piece_of_ground: false,
            piece_of_ground: null,
            x: 0,
            y: 0,
            loteo: {},
        }

        this.update = this.update.bind(this);
        // this.delete = this.delete.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

    }

    // update piece of ground
    update() {

        // format the piece_of_ground
        var piece_of_ground = this.state.piece_of_ground;

        // // add location in correct format
        // piece_of_ground["location"] = new firebase.firestore.GeoPoint(parseFloat(piece_of_ground.latitude), parseFloat(piece_of_ground.longitude));
        // // remove latitude and longitude from piece_of_ground object
        // delete piece_of_ground["latitude"];
        // delete piece_of_ground["longitude"];

        console.log("udpate: ", this.state.piece_of_ground);

        fs.collection('loteos').doc(this.props.match.params.id_loteo).collection("pieces_of_ground").doc(this.props.match.params.id_piece_of_ground).set(piece_of_ground).then(() => {
            console.log("Document successfully edited!");
            alert("La parcela se ha actualizado correctamente");

            // reload page
            // window.location.reload();
            this.props.history.push("/list_pieces_of_ground/" + this.props.match.params.id_loteo);

        }).catch(function(error) {
            alert("Ha ocurrido un error, intentalo nuevamente");
            console.error("Error removing document: ", error);
        });

    }

    // // delete a piece of ground
    // delete() {

    //     // remove dialog box
    //     var remove = window.confirm("¿Estas seguro que quieres eliminar este loteo?");

    //     if (remove == true) {

    //         fs.collection('loteos').doc(this.props.match.params.id_loteo).collection("pieces_of_ground").doc(this.props.match.params.id_piece_of_ground).delete().then(() => {
    //             console.log("Document successfully deleted!");
    //             alert("La parcela se ha eliminado correctamente");

    //             // reload page
    //             // window.location.reload();
    //             // redirect to admi page
    //             this.props.history.push("/list_pieces_of_ground/" + this.props.match.params.id_loteo);

    //         }).catch(function(error) {
    //             alert("Ha ocurrido un error, intentalo nuevamente");
    //             console.error("Error removing document: ", error);
    //         });



    //     } else {

    //         alert("Do not remove parcela");

    //     }
    // }

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

                // get loteos
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

                // console.log()
                // get request for get piece_of_ground
                fs.collection('loteos').doc(this.props.match.params.id_loteo).collection("pieces_of_ground").doc(this.props.match.params.id_piece_of_ground).get()

                .then(doc => {

                    // console.log(doc);

                    console.log("piece of ground got from server: ", doc.data());

                    let piece_of_ground = doc.data();
                    // console.log(piece_of_ground);
                    // store location
                    // piece_of_ground["location"] = [piece_of_ground.location.latitude, piece_of_ground.location.longitude];

                    // piece_of_ground["latitude"] = piece_of_ground.location.latitude;
                    // piece_of_ground["longitude"] = piece_of_ground.location.longitude;
                    // delete piece_of_ground["location"];

                    piece_of_ground["id"] = doc.id;
                    // add piece_of_ground to list


                    // update state
                    this.setState({

                        // flag of getting data from API
                        get_piece_of_ground: true,
                        // update piece_of_ground
                        piece_of_ground: piece_of_ground,

                    }, 
                    // () => {
                    //     console.log("new piece of ground: ", this.state.piece_of_ground)
                    // }
                    );
                })
                // if error
                .catch(function (error) {

                    // dislpay error in console
                    console.log(error);

                });

            }

        });
    }

    onMouseMove(e) {

        console.log("click");
        
        var loteo = this.state.loteo;
        loteo["x_image"] = e.nativeEvent.offsetX;
        loteo["y_image"] = e.nativeEvent.offsetY;

        console.log("on mouse click: ", loteo);

        this.setState({ 
            //loteo["x_image"]: e.nativeEvent.offsetX, loteo["y_image"]: e.nativeEvent.offsetY 
            loteo: loteo,
        })
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

                <Button align="center" variant="contained" color="primary"
                    // style={styles.bottom_button}
                    onClick={() => this.update()}
                >
                    Actualizar Parcela
                </Button>

                {/* {this.state.piece_of_ground.name} */}

                <form noValidate autoComplete="off">

                    {
                        this.state.get_piece_of_ground &&
                        Object.keys(this.state.piece_of_ground).map((key, index) => {

                            // this is now showing images and location
                            if ((key != "id")) {

                                // console.log(key);

                                return (
                                    <Box>
                                        <TextField
                                            // type = "area"
                                            style = {{
                                                width: "60%",
                                            }}
                                            multiline
                                            rows="2"
                                            // id="standard-name"
                                            label={key}
                                            value={this.state.piece_of_ground[key]}
                                            onChange={(event) => {
                                                // console.log(event.target.value);
                                                var piece_of_ground = this.state.piece_of_ground;
                                                piece_of_ground[key] = event.target.value;
                                                this.setState({
                                                    piece_of_ground: piece_of_ground
                                                },
                                                    // console.log(this.state.piece_of_ground)
                                                )
                                            }}
                                            margin="normal"
                                        />

                                    </Box>
                                )
                            }

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
                        Mouse coordinates: { this.state.x } { this.state.y }
                    </h1>

                </div>

                {/* {
                    this.state.get_piece_of_ground

                        ?
                        <Box>

                            {
                                this.state.piece_of_ground.map((item) => {

                                    return (
                                        <Box>
                                            {item.name}

                                            <Button size="xsmall" align="center" variant="contained" color="primary"
                                            // style={styles.bottom_button}
                                            >
                                                Editar
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Box>


                        :
                        null
                } */}
            </Box>
        );

    }

}

export default Edit_Piece_of_Ground;