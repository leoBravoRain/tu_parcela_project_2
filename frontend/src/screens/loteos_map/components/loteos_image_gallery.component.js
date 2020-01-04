import React from "react";

// material ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// carousel library
import ItemsCarousel from 'react-items-carousel';

class Image_Gallery extends React.Component {
	
	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			activeItemIndex: 0,

		}

	}

	// render method
	render() {

		// const [activeItemIndex, setActiveItemIndex] = useState(0);
		// const chevronWidth = 40;

		return (

			<Paper
				style = {{
					margin: 20,
					padding: 20
				}}
			>

				{this.props.get_loteos 

				?

					<Container
						// p = {3}
					> 

						<Typography align = "center" variant="h4" component="h2" gutterBottom>

							Nuestros loteos

						</Typography>

						<Typography align="center" variant="h5" component="h2" gutterBottom>

							Región de los Ríos

						</Typography>

						<ItemsCarousel
							requestToChangeActive={value => this.setState({ activeItemIndex: value })}
							activeItemIndex={this.state.activeItemIndex}
							numberOfCards={3}
							gutter={20}
							leftChevron={<button>{'<'}</button>}
							rightChevron={<button>{'>'}</button>}
							outsideChevron
							chevronWidth={40}
						>

							{this.props.loteos.map( (loteo, idx) =>

								<Container key = {idx}>

									<Typography align = "center" variant="h6" gutterBottom>

										{loteo.name}

									</Typography>

									<Typography align = "center" variant="body2" gutterBottom>

										{loteo.description}

									</Typography>

									<img 
										src = {loteo.images[0]}
										width = "300px"
										height = "auto"
									/>

									<Typography align = "center" variant="body2" gutterBottom>

										Desde {loteo.rounded_price} millones

									</Typography>

								</Container>

								)}
						</ItemsCarousel>

					</Container>

				:

					<p> Loading </p>
				}

			</Paper>

		)

	}

}

export default Image_Gallery;