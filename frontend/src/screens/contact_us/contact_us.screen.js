import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Contact_Us extends React.Component {

    render() {

        return (

            <Paper
                style={{
                    margin: 20,
                    padding: 20,
                }}
            >
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Contáctanos
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                        Sebastian Salz
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                        Teléfono: +56 9 8765 4321
                    </Typography>

                    <Typography variant="body2" gutterBottom>
                        Email: 5simplespasos@gmail.com
                    </Typography>

                </Container>
            </Paper>
        );

    }

}

export default Contact_Us;