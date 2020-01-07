import React, { Component } from "react";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

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
                                margin: 5,
                                display: "flex",
                                // justifyContent: "center",
                                // alignItems: "center"
                                flexDirection: "row",
                                // flexWrap,
                                // maxHeight: "10",
                                // color: "white",
                                // backgroundColor: "red"
                                // backgroundImage: "url('https://bit.ly/2nCGIqc')",
                            }}
                        >
 
                            {/* <CardActionArea 
                                // onClick={() => window.location.replace("/piece_of_ground/" + loteo.id)}
                            > */}

                                <CardMedia
                                    style={{
                                        // top: 0,
                                        // left: 0,
                                        width: 250,
                                        // height: "50%",
                                        // left: 0,
                                        // width: 151,
                                        paddingTop: '10.25%', // 16:9,
                                        // paddingLeft: "0",
                                        // marginLeft: '30'
                                    }}
                                    image={piece_of_ground.image}
                                />

                                <CardContent>

                                    <Typography variant="h6" gutterBottom>

                                        {piece_of_ground.name}

                                    </Typography>

                                    <Typography variant="body2" gutterBottom>

                                        {piece_of_ground.area} m2

                                    </Typography>

                                    <Typography variant="body2" gutterBottom
                                        style = {{
                                            fontWeight: "bold",
                                            fontSize: 15,
                                        }}
                                    >

                                        $ {piece_of_ground.price}

                                    </Typography>

                                </CardContent>

                            {/* </CardActionArea> */}

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