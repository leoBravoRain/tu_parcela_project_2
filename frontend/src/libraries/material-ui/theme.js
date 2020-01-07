import { createMuiTheme } from '@material-ui/core/styles';
import indigo from 'material-ui/colors/indigo';
import lightBlue from 'material-ui/colors/lightBlue';
import red from 'material-ui/colors/red';

export default createMuiTheme({
	overrides: {
	    MuiButton: {
	      root: {
	        margin: "10px",
			padding: "10px",
			// backgroundColor: "red",
	      }
		},
	},

	palette: {
		// primary: lightBlue,
		// primary: red,
		primary: indigo,
		// primary: {500: "#03a9f4"},
		// secondary: indigo, // Indigo is probably a good match with pink
		secondary: red,
		// secondary: { 500: "#03a9f4" },
		// terciary: red,
	},

	margin: {
		normal: 20,
		big: 50,
	},
	padding: {
		normal: 20,
		big: 50,
	}

});

// import {cyan500, deepPurple500} from 'material-ui/colors';
// // import getMuiTheme from 'material-ui/styles/getMuiTheme'; 
// import { getMuiTheme } from 'material-ui/styles';

// export default theme = getMuiTheme({
//   palette: {
//     textColor: cyan500
//   },
//   appBar: {
//     height: 50
//   }
// });

// export default theme;