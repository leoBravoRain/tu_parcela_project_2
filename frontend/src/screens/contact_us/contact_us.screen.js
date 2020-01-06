import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
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
                <Box
                    style = {{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    
                    <Typography variant="h3" gutterBottom>
                        Contáctanos
                    </Typography>

                    <Typography variant="h6" gutterBottom style = {{color: "gray"}}>
                        Sebastian Salz
                    </Typography>
                    
                    <img
                        style = {{
                            margin: 20,
                        }}
                        src={require("../../static/images/2_Yo.png")}
                        width="400"
                        height="auto"
                        alt="logo"
                    />

                    <Typography variant="body2" gutterBottom style = {{color: "gray"}}>
                        Teléfono: <b style ={{ fontSize: 20, margin: 20, color: "black"}}>+56 9 8765 4321 </b>
                    </Typography>

                    <Typography variant="body2" gutterBottom style={{ color: "gray" }}>
                        Email:  
                        <b style={{ fontSize: 20, margin: 20, color: "black" }}> 
                            5simplespasos@gmail.com
                        </b>
                    </Typography>

                </Box>
            </Paper>
        );

    }

}

export default Contact_Us;