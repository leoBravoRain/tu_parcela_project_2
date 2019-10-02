import React, { Component } from "react";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Dynamic_Pieces_of_Ground_Component extends React.Component {
	
	// render method
	render() {

		return (

            <Container>
            {/* <Card> */}

                {/* This should be a component by itself */}
                {this.props.get_pieces_of_ground 

                ?

                    this.props.pieces_of_ground.map( (piece_of_ground, idx) => 

                        <Card key = {idx} 
                            style = {{
                                margin: 20,
                                // color: "white",
                                // backgroundColor: "red"
                                // backgroundImage: "url('https://bit.ly/2nCGIqc')",
                            }}
                        >

                            <CardContent>

                                <Typography variant="h6" gutterBottom>

                                    {piece_of_ground.name}

                                </Typography>

                                <Typography variant="body2" gutterBottom>

                                    {piece_of_ground.size} m2

                                </Typography>

                                <Typography variant="body2" gutterBottom>

                                    Valor {piece_of_ground.size}

                                </Typography>

                            </CardContent>

                        </Card>

                    )

                :

                    <p> Loading </p>

                }

            </Container>

		)

	}

}

export default Dynamic_Pieces_of_Ground_Component;