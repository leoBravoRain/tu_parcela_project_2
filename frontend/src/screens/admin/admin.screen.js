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

class Admin extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            // flag of get data from server
            get_loteos: false,
            loteos: null,
        }

    }
    
    componentDidMount() {

        // get request for get loteos
        fs.collection('loteos').get()

            .then(snapshotquery => {

                // // get data from API
                var loteos = [];

                // iterate over each item
                snapshotquery.forEach(doc => {

                    // console.log(doc.data());
                    let loteo = doc.data();
                    // store location
                    // loteo["location"] = [loteo.location.latitude, loteo.location.longitude];
                    loteo["id"] = doc.id;
                    // add loteo to list
                    loteos.push(loteo);

                });

                // update state
                this.setState({

                    // flag of getting data from API
                    get_loteos: true,
                    // update loteos
                    loteos: loteos,

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
                    Crear Loteo
                </Button>
                {
                    this.state.get_loteos 

                    ?
                        <Box>

                            {    
                                this.state.loteos.map((item) => {
                                    
                                    return (
                                        <Box>

                                            <Link to={"/list_pieces_of_ground/" + item.id}>

                                                {item.name}

                                            </Link>

                                            <Link to= {"/edit_loteo/" + item.id}>
                                                <Button size = "xsmall" align="center" variant="contained" color="primary"
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

export default Admin;