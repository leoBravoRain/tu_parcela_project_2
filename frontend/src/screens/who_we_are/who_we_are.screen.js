import React, { Component } from "react";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class Who_We_Are extends  React.Component {

	render(){

		return(

			<Paper
				style = {{
					margin: 20,
					padding: 20,
				}}
			>
                <Container>
                    
				<p> Somos una empresa que lleva años trabajando en los bienes raices! </p>

				<p> Buscamos e invertimos sólo en aquellos bienes que sabemos que son rentables en el tiempo, por lo que te aseguramos que tu inversión estará segura con nosotros! </p>

                <img 
                    // width = "200"
                    // height = "auto"
                    src = "https://bit.ly/2oBlXeB"
                    style = {{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "20%",
                    }}

                />

				{/* <p> Si quieres contactarnos, no dudes en hacerlo a través de nuestro correo electrónico: <b> tuparcelaen5simplespasos@gmail.com </b> </p> */}
				</Container>
			</Paper>
		);

	}

}

export default Who_We_Are;