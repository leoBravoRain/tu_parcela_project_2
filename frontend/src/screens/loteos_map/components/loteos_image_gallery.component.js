import React, { Component } from "react";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Image_Gallery extends React.Component {
	
	// render method
	render() {

		return (

			<Container>

				{this.props.get_loteos 

				?

					<Container
						// p = {3}
					> 

						<Typography align = "center" variant="h4" component="h2" gutterBottom>

							Detalles de nuestros loteos

						</Typography>

						<Carousel
							// showIndicators = {false}
						>

							{this.props.loteos.map( (loteo, idx) =>

								<Container key = {idx}>

									<Typography align = "center" variant="body2" gutterBottom>

										{loteo.name}

									</Typography>

									<Typography align = "center" variant="body2" gutterBottom>

										{loteo.highlight}

									</Typography>

									<Typography align = "center" variant="body2" gutterBottom>

										{loteo.location_name} - {loteo.hectare} ha

									</Typography>

									<img 
										src = 'https://media-cdn.tripadvisor.com/media/photo-s/0a/23/87/75/postal-de-valdivia.jpg'
										// width = "50px"
										// height = "50px"
									/>

									<Typography align = "center" variant="body2" gutterBottom>

										Desde {loteo.rounded_price} millones

									</Typography>

								</Container>

							)}

						</Carousel>

					</Container>

				:

					<p> Loading </p>
				}

			</Container>

		)

	}

}

export default Image_Gallery;