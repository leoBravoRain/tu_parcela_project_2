import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// API for send emails
import emailjs from 'emailjs-com';

class Ask_from_Users extends React.Component {
    
    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {

            name: "",
            email: "",
            message: "",

        }

    }

    send_email() {
        // e.preventDefault();
        // console.log("email")
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        var template_params = {
           "reply_to": this.state.email,
           "user_name": this.state.name,
           "message": this.state.message,
           "user_email": this.state.email,
        };

        const service_id = "gmail";
        var user_id = "user_SVCPQFf6F5WDyJtGUwc42";
        var template_id = "template_OpzxMFyn";
        emailjs.send(service_id, template_id, template_params, user_id);

        // user message
        alert("Tu mensaje ha sido enviado correctamente. Nuestro equipo se pondra en contacto contigo lo antes posible");

        // Redirect
        this.props.history.push("");

    }

    render() {
        
        return (

            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/your-piece-of-ground-test.appspot.com/o/7921758ea7dfb78c2a4e4e754768c354.jpg?alt=media&token=65c95d59-ecec-48e0-ba20-72d2f9486f5a")',
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    // margin: 0,
                    backgroundSize: "cover",
                    // height: "auto",
                    paddingBottom: 100,
                }}
            >

                <Paper
                    style = {{
                        padding: 50,
                        margin: 30,
                        borderWidth: 3,
                        borderStyle: "solid",
                        borderColor: "blue",
                    }}                    
                >

                    <form noValidate autoComplete="off"
                        // style = {{
                        //     background
                        // }}
                    >

                        <Box>
                            <Typography variant="h5" gutterBottom>
                                Enviar consulta
                            </Typography>
                        </Box>

                        <Box>
                            <TextField
                                //id="standard-name"
                                label="Nombre"
                                value={this.state.name}
                                onChange={(event)=>this.setState({name: event.target.value})}
                                margin="normal"
                            />
                        </Box>

                        <Box>
                            <TextField
                                // id="standard-name"
                                name = "user_email"
                                type = "email"
                                label="Correo electrónico"
                                value={this.state.email}
                                onChange={(event)=>this.setState({email: event.target.value})}
                                margin="normal"
                            />
                        </Box>

                        <Box>
                            <TextField
                                type = "area"
                                // multiline = {true}
                                label="Consulta"
                                name = "message"
                                value={this.state.message}
                                onChange={(event)=>this.setState({message: event.target.value})}
                                margin="normal"
                                // label="Multiline"
                                multiline
                                rows="4"
                                
                            />
                        </Box>

                        <Box>
                            
                            {/*<input 
                                type="submit" 
                                value="Enviar" 
                                // style={{
                                //     margin: 20,
                                //     color: "white",
                                //     borderRadius: 50,
                                //     // marginBottom: 100,
                                //     // textAlign: "center",
                                //     // alignSelf: "center",
                                // }}
                            />*/}

                            <Button variant="contained" color = "primary" onClick = {()=> this.send_email()}
                                style={{
                                    margin: 20,
                                    color: "white",
                                    borderRadius: 50,
                                    // marginBottom: 100,
                                    // textAlign: "center",
                                    // alignSelf: "center",
                                }}
                            >

                                Enviar consulta

                            </Button>

                        </Box>
                        
                    </form>

                </Paper>
                
            </Box>
        );

    }

}

export default Ask_from_Users;