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

    }

    componentDidMount() {

        // get request for get loteos
        fs.collection('loteos').doc(this.props.match.params.id_loteo).collection("pieces_of_ground").get()

            .then(snapshotquery => {

                // // get data from API
                var pieces_of_ground = [];

                // iterate over each item
                snapshotquery.forEach(doc => {

                    // console.log(doc.data());
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
                >
                    Crear Parcela
                </Button>
                {
                    this.state.get_pieces_of_ground

                        ?
                        <Box>

                            {
                                this.state.pieces_of_ground.map((item) => {

                                    return (
                                        <Box>
                                            {item.name}

                                            <Link to={"/edit_piece_of_ground/" + item.id}>
                                                <Button size="xsmall" align="center" variant="contained" color="primary"
                                                // style={styles.bottom_button}
                                                >
                                                    Editar
                                                </Button>
                                            </Link>
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