import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
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
                }}
            >
                <form noValidate autoComplete="off">

                    <Container>
                        <Typography variant="h5" gutterBottom>
                            Enviar consulta
                        </Typography>
                    </Container>

                    <Container>
                        <TextField
                            id="standard-name"
                            label="Nombre"
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                        />
                    </Container>

                    <Container>
                        <TextField
                            id="standard-name"
                            label="Correo electrónico"
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                        />
                    </Container>

                    <Container>
                        <TextField
                            id="standard-name"
                            label="Consulta"
                            // value={values.name}
                            // onChange={handleChange('name')}
                            margin="normal"
                        />
                    </Container>

                    <Container>

                        <Button variant="contained" onClick = {()=>alert("¡Consulta enviada!")}>

                            Enviar consulta

                        </Button>

                    </Container>
                    
                </form>
                
            </Paper>
        );

    }

}

export default Ask_from_Users;