import React, { Component } from "react";

// material ui
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class Who_We_Are extends  React.Component {

	render(){

		return(

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
					style={{
						padding: 20,
						margin: 50,
						marginTop: 50,
						borderWidth: 3,
						borderStyle: "solid",
						borderColor: "blue",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
                    
					<Typography variant="body" gutterBottom
						style={{
							margin: 20,
						}}
					> 
						Somos una empresa que lleva años trabajando en los bienes raices!


						Buscamos e invertimos sólo en aquellos bienes que sabemos que son rentables en el tiempo, por lo que te aseguramos que tu inversión estará segura con nosotros!

					</Typography>
					<img
						style={{
							margin: 20,
							borderWidth: 10,
							borderStyle: "solid",
							borderColor: "white",
						}}
						src={require("../../static/images/2_Yo.png")}
						width="400"
						height="auto"
						alt="logo"
					/>

				{/* <p> Si quieres contactarnos, no dudes en hacerlo a través de nuestro correo electrónico: <b> tuparcelaen5simplespasos@gmail.com </b> </p> */}
				</Paper>
			</Box>
		);

	}

}

export default Who_We_Are;