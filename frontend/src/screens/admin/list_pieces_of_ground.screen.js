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

class Admin_Pieces_of_Ground extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            // flag of get data from server
            get_pieces_of_ground: false,
            pieces_of_ground: null,
        }

        this.remove = this.remove.bind(this);

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

                // request for get loteo
                fs.collection('loteos').doc(this.props.match.params.id_loteo).get().then((docRef) => {

                    console.log("Trying to get loteo");

                    if (docRef.exists) {
                        console.log(docRef.data());

                        this.setState({
                            loteo: docRef.data(),
                        },
                            console.log("new state: ", this.state.loteo)
                        )                    

                    }
                });

                // get request for get loteos
                fs.collection('loteos').doc(this.props.match.params.id_loteo).collection("pieces_of_ground").get()

                    .then(snapshotquery => {

                        // // get data from API
                        var pieces_of_ground = [];

                        // iterate over each item
                        snapshotquery.forEach(doc => {

                            console.log(doc.data());
                            let piece_of_ground = doc.data();
                            // store location
                            // piece_of_ground["location"] = [piece_of_ground.location.latitude, piece_of_ground.location.longitude];
                            piece_of_ground["id"] = doc.id;
                            // add piece_of_ground to list
                            pieces_of_ground.push(piece_of_ground);

                        });

                        // update state
                        this.setState({

                            // flag of getting data from API
                            get_pieces_of_ground: true,
                            // update pieces_of_ground
                            pieces_of_ground: pieces_of_ground,

                        });
                    })
                    // if error
                    .catch(function (error) {

                        // dislpay error in console
                        console.log(error);

                    });

                }

        });
    }

    // delete a piece of ground
    remove(piece_of_ground_id) {

        // remove dialog box
        var remove = window.confirm("¿Estas seguro que quieres eliminar este loteo?");

        if (remove == true) {

            fs.collection('loteos').doc(this.props.match.params.id_loteo).collection("pieces_of_ground").doc(piece_of_ground_id).delete().then(() => {
                console.log("Document successfully deleted!");
                alert("La parcela se ha eliminado correctamente");

                // reload page
                window.location.reload();
                // redirect to admi page
                // this.props.history.push("/list_pieces_of_ground/" + this.props.match.params.id_loteo);

            }).catch(function(error) {
                alert("Ha ocurrido un error, intentalo nuevamente");
                console.error("Error removing document: ", error);
            });



        } else {

            alert("Do not remove parcela");

        }
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

                <Link to={"/admin"}>

                    <Button size="xsmall" align="center" variant="contained" color="secondary"
                    // style={styles.bottom_button}
                    >
                        Ver loteos

                    </Button>

                </Link>

                <Typography align="center" variant="h4" component="h4" gutterBottom>

                    Tus parcelas

                </Typography>

                <Typography align="center" variant="body2" component="p" gutterBottom>

                    Aca se muestran todas las parcelas que tienes en el sitio. Puedes crear una nueva, editar o eliminar alguna que ya existe.                                        

                </Typography>

                <Typography align="center" variant="h4" component="h4" gutterBottom>

                    Loteo: {this.state.loteo != undefined ? this.state.loteo.name : "Loteo"}

                </Typography>

                <Link to={"/create_new_piece_of_ground/" + this.props.match.params.id_loteo}>

                    <Button size="xsmall" align="center" variant="contained" color="primary"
                    // style={styles.bottom_button}
                    >
                        Crear nueva parcela

                    </Button>

                </Link>

                {
                    this.state.get_pieces_of_ground

                        ?
                        <Box>

                            {
                                this.state.pieces_of_ground.map((item) => {

                                    return (
                                        <Box>
                                            {item.name}

                                            <Link to={"/edit_piece_of_ground/" + this.props.match.params.id_loteo + "/" + item.id}>
                                                <Button size="xsmall" align="center" variant="contained" color="primary"
                                                // style={styles.bottom_button}
                                                >
                                                    Editar
                                                </Button>
                                            </Link>

                                            <Button size = "xsmall" align="center" variant="contained" color="secondary"
                                                onClick = {()=>this.remove(item.id)}
                                                // style={styles.bottom_button}
                                            >
                                                Eliminar
                                            </Button>
                                        </Box>
                                    )
                                })
                            }
                        </Box>

                        :
                        null
                }
            </Box>
        );

    }

}

export default Admin_Pieces_of_Ground;