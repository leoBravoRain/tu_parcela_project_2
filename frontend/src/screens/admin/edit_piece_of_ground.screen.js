import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// make request to server
import { fs } from "../../libraries/firebase/firebase";

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
        }

        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

    }

    update() {

        console.log("udpate: ", this.state.piece_of_ground);
        fs.collection("loteos").doc(this.state.piece_of_ground.id).update(this.state.piece_of_ground);

    }

    delete() {

        console.log("udpate: ", this.state.piece_of_ground);
        fs.collection("loteos").doc(this.state.piece_of_ground.id).delete();

    }

    componentDidMount() {

        // console.log()
        // get request for get piece_of_ground
        fs.collection('loteos').doc(this.props.match.params.id_piece_of_ground).collection("pieces_of_ground").doc().get()

            .then(doc => {

                // console.log(doc);

                console.log(doc.data());
                let piece_of_ground = doc.data();
                // console.log(piece_of_ground);
                // store location
                piece_of_ground["location"] = [piece_of_ground.location.latitude, piece_of_ground.location.longitude];
                piece_of_ground["id"] = doc.id;
                // add piece_of_ground to list


                // update state
                this.setState({

                    // flag of getting data from API
                    get_piece_of_ground: true,
                    // update piece_of_ground
                    piece_of_ground: piece_of_ground,

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
                    onClick={() => this.update()}
                >
                    Actualizar Parcela
                </Button>

                <Button align="center" variant="contained" color="secondary"
                    // style={styles.bottom_button}
                    onClick={() => this.delete()}
                >

                    Eliminar Parcela

                </Button>

                {/* {this.state.piece_of_ground.name} */}

                <form noValidate autoComplete="off">

                    {
                        this.state.get_piece_of_ground &&
                        Object.keys(this.state.piece_of_ground).map((key, index) => {

                            // this is now showing images and location
                            if ((key != "images" && key != "location" && key != "id")) {

                                // console.log(key);

                                return (
                                    <Box>
                                        <TextField
                                            // id="standard-name"
                                            label={key}
                                            value={this.state.piece_of_ground.key}
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

                                        <div>
                                            {this.state.piece_of_ground[key]}
                                        </div>
                                    </Box>
                                )
                            }

                            // // if it is images or location
                            // else {
                            //     this.state.piece_of_ground[key].map((item, idx) => {

                            //         return (
                            //             <Box>
                            //                 <TextField
                            //                     // id="standard-name"
                            //                     label={key}
                            //                     value={this.state.piece_of_ground[key][idx]}
                            //                     onChange={(event) => {
                            //                         // console.log(event.target.value);
                            //                         var piece_of_ground = this.state.piece_of_ground;
                            //                         piece_of_ground[key][idx] = event.target.value;
                            //                         this.setState({
                            //                             piece_of_ground: piece_of_ground
                            //                         },
                            //                             // console.log(this.state.piece_of_ground)
                            //                         )
                            //                     }}
                            //                     margin="normal"
                            //                 />

                            //                 <div>
                            //                     {this.state.piece_of_ground[key][idx]}
                            //                 </div>
                            //             </Box>
                            //         )

                            //     })
                            // }
                        })
                    }

                </form>

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