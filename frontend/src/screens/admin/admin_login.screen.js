import React, { Component } from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

// firebase
import { auth } from "../../libraries/firebase/firebase";

class Admin_Login extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            email: "",
            password: "",
        }

        this.on_submit = this.on_submit.bind(this);

    }
    
    componentDidMount() {

        // check if user is logged
        auth.onAuthStateChanged((user) => {

            if (user) {

                console.log("user logged");

                this.props.history.push('/admin');

            }

            else {

                console.log("user no logged");

                // this.props.history.push('/login/');
            }

        });

    }

    // onsubmit form
    on_submit() {

        const email = this.state.email;
        const password = this.state.password;

        // console.log(this);
        auth.signInWithEmailAndPassword(email, password)

            .then(res => {

                console.log("user logged!");

                this.props.history.push('/admin');

            })

            .catch(function (error) {

                console.log(error.code);

                alert('Ups, al parecer los datos no son correctos ¡Verificalos!');

            });
    }
    
    render() {

        return (

            <Paper
                style={{
                    margin: 20,
                    padding: 20,
                }}
            >
                <Container
                    style = {{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >

                    <Typography align="center" variant="h4" component="h4" gutterBottom>
                        Ingresar a plataforma
                    </Typography>

                    <Typography align="center" variant="body2" component="p" gutterBottom>
                        Para acceder a la plataforma debes ingresar el correo y contraseña registrados en este sistema
                    </Typography>

 
                    <FormControl
                        style = {{
                            width: "50%",
                            alignSelf: "center",
                        }}
                    >

                        <TextField
                            id="standard-uncontrolled"
                            label="Correo electrónico"
                            // defaultValue="Correo electrónico"
                            margin="normal"
                            onChange={(e) => this.setState({email: e.target.value})}
                            value={this.state.email}
                        />

                        <TextField
                            id="standard-uncontrolled"
                            label="Contraseña"
                            type = "password"
                            // defaultValue="Correo electrónico"
                            margin="normal"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />

                        <Button align="center" variant="contained" color="primary" onClick = {this.on_submit}>
                            Ingresar
                        </Button>

                    </FormControl>

                    <Typography align="center" variant="body2" component="p" gutterBottom>
                        Si no recuerdas la información, ponte en contacto con los administradores de la plataforma
                    </Typography>

                </Container>
            </Paper>
        );

    }

}

export default Admin_Login;