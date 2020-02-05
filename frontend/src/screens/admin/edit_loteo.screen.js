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
            number_images: 0,
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
                            number_images: loteo.images.length,

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

                    <TextField
                        label = "Number of images"
                        value = {this.state.number_images}
                        onChange={(event) => {

                            // console.log("new length: ", event.target.value);

                            this.setState({
                                number_images: event.target.value,
                            },
                                //console.log("new loteo after change : ", this.state.loteo)
                            )

                        }}
                        margin="normal"
                    />

                    <Button align="center" variant="contained" color="primary"
                    // style={styles.bottom_button}
                        onClick = {() => {

                            //console.log("after: " + loteo);
                            var loteo = this.state.loteo;

                            // console.log("target value: ", event.target.value);

                            // console.log("value: ", parseInt(event.target.value));

                            // console.log("valid number: ", (isNaN(parseInt(event.target.value))) ? "nan" : "not nan value");

                            const new_length = this.state.number_images;

                            console.log("New length of array: ", new_length);

                            if (!isNaN(parseInt(new_length))) {

                                console.log("new lenght set");

                                // if array is shorter than new number of images
                                if (new_length > loteo.images.length) {
                                    console.log("array is shorter than new lenght");

                                    for (var i = 0; i < loteo.images.length; i++) {
                                        loteo.images[i] = loteo.images[i];
                                    }

                                    console.log("length intermediate: ", loteo.images.length);

                                    for (var i = loteo.images.length; i < new_length; i++) {
                                        console.log(i);
                                        loteo.images[i] = "";
                                    }
                                }
                                
                                // if array is larger than new number of images
                                else {
                                    console.log("array is larger than new lenght oajsioajsio");

                                    loteo.images.length = new_length;

                                    // for (var i = 0; i < new_length; i++) {
                                    //     console.log(i);
                                    //     loteo.images[i] = loteo.images[i];
                                    // }
                                }

                                // console.log("new length: ", event.target.value);

                                this.setState({
                                    // number_images: event.target.value,
                                    loteo: loteo,
                                },
                                    console.log("new loteo after change : ", this.state.loteo)
                                )

                            }

                            else {
                                console.log("Is nan");
                            }
                        }}
                    >
                        Actualizar numero de imagenes
                    </Button>

                    {
                        this.state.get_loteo && 
                        // it needs to have the number of eemets equals to number_images state
                        this.state.loteo.images.map((item, index) => {

                            // console.log("image from images map");

                            return (

                                <Box>

                                    <TextField
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
                                                //console.log(this.state.loteo)
                                            )
                                        }}
                                        margin="normal"
                                    />

                                </Box>
                            )
                        
                        })
                    }

                </form>

            </Box>
        );

    }

}

export default Edit_Admin;