import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class Contact_Us extends React.Component {

    render() {

        return (

            // <Paper
            //     style={{
            //         margin: 20,
            //         padding: 20,
            //     }}
            // >
                <Box
                    style = {{
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
                    
                    <Typography variant="h3" gutterBottom
                        style = {{
                            margin: 20,
                        }}
                    >
                        Contáctanos
                    </Typography>

                    <Typography variant="h6" gutterBottom 
                        style = {{
                            color: "black"
                        }}
                    >
                        Sebastian Salz
                    </Typography>
                    
                    <img
                        style={{
                            margin: 20,
                            borderWidth: 10,
                            borderStyle: "solid",
                            borderColor: "white",
                            width: "80%",
                            maxWidth: 400,
                            height: "auto",
                        }}
                        src={require("../../static/images/2_Yo.png")}
                        // width="300"
                        // height="auto"
                        alt="logo"
                    />

                    <Typography variant="body2" gutterBottom 
                        style = {{
                            color: "white"
                        }}
                    >
                    Whatsapp: <b style={{ fontSize: 20, margin: 20, color: "yellow" }}>+56 9 82 63 66 17 </b>
                    </Typography>

                    <Typography variant="body2" gutterBottom 
                        style={{
                            color: "white"
                        }}
                    >
                        Email:  
                        <b style={{ fontSize: 20, margin: 20, color: "yellow" }}> 
                            5simplespasos@gmail.com
                        </b>
                    </Typography>

                </Box>
            // </Paper>
        );

    }

}

export default Contact_Us;