import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Ask_from_Users extends React.Component {
    
    
    render() {
        
        return (

            <Paper
                style={{
                    margin: 20,
                    padding: 20,
                    // justifyContent: "center",
                    // alignItems: "start",
                    padding: 50,
                    display: "flex",
                    width: "100%"
                }}
            >
                <form noValidate autoComplete="off">

                    <Box>
                        <Typography variant="h5" gutterBottom>
                            Enviar consulta
                        </Typography>
                    </Box>

                    <Box>
                        <TextField
                            id="standard-name"
                            label="Nombre"
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                        />
                    </Box>

                    <Box>
                        <TextField
                            id="standard-name"
                            label="Correo electrónico"
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                        />
                    </Box>

                    <Box>
                        <TextField
                            type = "area"
                            // multiline = {true}
                            label="Consulta"
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                            // label="Multiline"
                            multiline
                            rows="4"
                            
                        />
                    </Box>

                    <Box>
                        
                        <Button variant="contained" color = "primary" onClick = {()=>alert("¡Consulta enviada!")}
                            style={{
                                margin: 20,
                                color: "white",
                                borderRadius: 50,
                                marginBottom: 100,
                                // textAlign: "center",
                                // alignSelf: "center",
                            }}
                        >

                            Enviar consulta

                        </Button>

                    </Box>
                    
                </form>
                
            </Paper>
        );

    }

}

export default Ask_from_Users;