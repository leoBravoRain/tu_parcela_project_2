import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// make request to server
import { fs } from "../../libraries/firebase/firebase";

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

        console.log("udpate: ", this.state.loteo);
        fs.collection("loteos").doc(this.state.loteo.id).update(this.state.loteo);

    }

    delete() {

        console.log("udpate: ", this.state.loteo);
        fs.collection("loteos").doc(this.state.loteo.id).delete();

    }

    componentDidMount() {

        // get request for get loteo
        fs.collection('loteos').doc(this.props.match.params.id_loteo).get()

            .then(doc => {

                // console.log(doc);

                // console.log(doc.data());
                let loteo = doc.data();
                // console.log(loteo);
                // store location
                loteo["location"] = [loteo.location.latitude, loteo.location.longitude];
                loteo["id"] = doc.id;
                // add loteo to list


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
                            if ((key != "images" && key != "location" && key != "id")){
                                
                                // console.log(key);

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

                            // // if it is images or location
                            // else {
                            //     this.state.loteo[key].map((item, idx) => {

                            //         return (
                            //             <Box>
                            //                 <TextField
                            //                     // id="standard-name"
                            //                     label={key}
                            //                     value={this.state.loteo[key][idx]}
                            //                     onChange={(event) => {
                            //                         // console.log(event.target.value);
                            //                         var loteo = this.state.loteo;
                            //                         loteo[key][idx] = event.target.value;
                            //                         this.setState({
                            //                             loteo: loteo
                            //                         },
                            //                             // console.log(this.state.loteo)
                            //                         )
                            //                     }}
                            //                     margin="normal"
                            //                 />

                            //                 <div>
                            //                     {this.state.loteo[key][idx]}
                            //                 </div>
                            //             </Box>
                            //         )

                            //     })
                            // }
                        })
                    }

                </form>

                {/* {
                    this.state.get_loteo

                        ?
                        <Box>

                            {
                                this.state.loteo.map((item) => {

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

export default Edit_Admin;