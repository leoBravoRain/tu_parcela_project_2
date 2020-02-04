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

// login password
const login_password = "123";

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
            //is_logged: false,
            is_logged: true,
        }

        this.remove_loteo = this.remove_loteo.bind(this);

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

    remove_loteo(loteo_id) {

        // remove dialog box
        var remove = window.confirm("¿Estas seguro que quieres eliminar este loteo?");

        if (remove == true) {

            fs.collection("loteos").doc(loteo_id).delete().then(function() {
                console.log("Document successfully deleted!");
                alert("El loteo se ha eliminado correctamente");

                // reload page
                window.location.reload();

            }).catch(function(error) {
                alert("Ha ocurrido un error, intentalo nuevamente");
                console.error("Error removing document: ", error);
            });



        } else {

          // alert("not remove loteo");

        }
    }

    render() {

        return (

            <Box>

                {
                    this.state.is_logged 

                    ?
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

                            <Link to= "/create_new_loteo/">

                                <Button align="center" variant="contained" color="primary"
                                    // style={styles.bottom_button}
                                >
                                       

                                    Crear Loteo

                                </Button>

                            </Link>

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

                                                        <Button size = "xsmall" align="center" variant="contained" color="secondary"
                                                            onClick = {()=>this.remove_loteo(item.id)}
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
                    :

                        // If it's not logged
                        <Box>

                            Login

                            <TextField
                                // id="standard-name"
                                label= "Admin password"
                                value={this.state.login_password}
                                onChange={(event) => {
                                    //console.log("after: " + loteo);
                                    this.setState({
                                        login_password: event.target.value,
                                    },
                                        // console.log(this.state.loteo)
                                    )
                                }}
                                margin="normal"
                                type="password"
                            />

                            <Button size = "xsmall" align="center" variant="contained" color="primary"
                                onClick = {()=>{

                                    // check if the password is correct
                                    if (this.state.login_password == login_password) {
                                        this.setState({
                                            is_logged: true,
                                        })
                                    }                       
                                    else {
                                        alert("Contraseña incorrecta");
                                    }            
                                }}
                                // style={styles.bottom_button}
                            >
                                Ingresar
                            </Button>

                        </Box>

                }

            </Box>

        );

    }

}

export default Admin;