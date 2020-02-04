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

class Edit_Admin extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            // flag of get data from server
            get_loteo: false,
            loteo: null,
        }

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

    }

    update() {

        // format the loteo
        var loteo = this.state.loteo;

        // add location in correct format
        loteo["location"] = new firebase.firestore.GeoPoint(parseFloat(loteo.latitude), parseFloat(loteo.longitude));
        // remove latitude and longitude from loteo object
        delete loteo["latitude"];
        delete loteo["longitude"];

        console.log("udpate: ", this.state.loteo);

        fs.collection("loteos").doc(loteo.id).set(loteo).then(() => {
            console.log("Document successfully edited!");
            alert("El loteo se ha actualizado correctamente");

            // reload page
            // window.location.reload();
            this.props.history.push("/admin");

        }).catch(function(error) {
            alert("Ha ocurrido un error, intentalo nuevamente");
            console.error("Error removing document: ", error);
        });

    }

    delete() {

        // remove dialog box
        var remove = window.confirm("¿Estas seguro que quieres eliminar este loteo?");

        if (remove == true) {

            fs.collection("loteos").doc(this.state.loteo.id).delete().then(() => {
                console.log("Document successfully deleted!");
                alert("El loteo se ha eliminado correctamente");

                // reload page
                // window.location.reload();
                // redirect to admi page
                this.props.history.push("/admin");

            }).catch(function(error) {
                alert("Ha ocurrido un error, intentalo nuevamente");
                console.error("Error removing document: ", error);
            });



        } else {

          alert("Do not remove loteo");

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

                // get request for get loteo
                fs.collection('loteos').doc(this.props.match.params.id_loteo).get()

                    .then(doc => {

                        // console.log(doc);

                        // console.log(doc.data());
                        let loteo = doc.data();

                        console.log(loteo);
                        // store location
                        // loteo["location"] = [loteo.location.latitude, loteo.location.longitude];
                        loteo["latitude"] = loteo.location.latitude;
                        loteo["longitude"] = loteo.location.longitude;
                        delete loteo["location"];

                        loteo["id"] = doc.id;
                        // add loteo to list

                        console.log(loteo);

                        // update state
                        this.setState({

                            // flag of getting data from API
                            get_loteo: true,
                            // update loteo
                            loteo: loteo,

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
                    onClick = {() => this.update()}
                >
                    Actualizar Loteo
                </Button>

                <Button align="center" variant="contained" color="secondary"
                // style={styles.bottom_button}
                    onClick={() => this.delete()}
                >

                    Eliminar Loteo
                    
                </Button>

                {/* {this.state.loteo.name} */}

                <form noValidate autoComplete="off">

                    {
                        this.state.get_loteo && 
                        Object.keys(this.state.loteo).map((key, index) => {

                            // this is now showing images and location
                            if ((key != "images" && key != "id")){
                                
                                return (
                                    <Box>
                                        <TextField
                                            // id="standard-name"
                                            label= {key}
                                            value={this.state.loteo.key}
                                            onChange={(event) => {
                                                // console.log(event.target.value);
                                                var loteo = this.state.loteo;
                                                loteo[key] = event.target.value;
                                                this.setState({
                                                    loteo: loteo
                                                },
                                                    // console.log(this.state.loteo)
                                                )
                                            }}
                                            margin="normal"
                                        />
    
                                        <div>
                                            {this.state.loteo[key]}
                                        </div>
                                    </Box>
                                )
                            }

                            
                        })
                    }

                    <div>
                        Implement edit array of images
                    </div>

                </form>

            </Box>
        );

    }

}

export default Edit_Admin;