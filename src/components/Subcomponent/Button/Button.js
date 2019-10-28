import React from "react";
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1)
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1)
//   }
// }));

const primaryBtn = createMuiTheme({
	typography: {
		htmlFontSize: 10,

		button: {
			fontFamily: "Open Sans",
			fontWeight: 700
		}
	},
	palette: {
		primary: { 500: "#4285F4" }
	}
});

const secondaryBtn = createMuiTheme({
	typography: {
		htmlFontSize: 10,
		button: {
			fontFamily: "Open Sans",
			fontWeight: 700
		}
	},
	overrides: {
		MuiButton: {
			fontFamily: "Open Sans",
			fontWeight: 200
		}
	},
	palette: {
		primary: { 500: "#4285F4" }
	}
});

const ButtonCustom = props => {
	const text = props.text;
	let variant = "" + props.variant;
	variant.toString().toLowerCase();
	const classes = props.classes;
	const startIcon = props.startIcon;
	const priority = props.priority;
	const size = props.size;

	if (priority == "primary") {
		return (
			<ThemeProvider theme={primaryBtn}>
				<Button variant={variant} className={classes} color="primary" size={size} startIcon={startIcon}>
					{text}
				</Button>
			</ThemeProvider>
		);
	} else if (priority == "secondary") {
		return (
			<ThemeProvider theme={secondaryBtn}>
				<Button variant={variant} className={classes} color="primary" size={size} startIcon={startIcon} px={0}>
					{text}
				</Button>
			</ThemeProvider>
		);
	} else {
		return <div>Button priority not specified</div>;
	}
};

export { ButtonCustom };
