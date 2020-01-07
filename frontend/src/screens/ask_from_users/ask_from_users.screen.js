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