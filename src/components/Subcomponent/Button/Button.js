import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

const primaryBtn = createMuiTheme({
  typography: {
    htmlFontSize: 10,

    button: {
      fontFamily: "Open Sans",
      fontWeight: 700
    }
  },
  palette: {
    primary: { 500: "#4285F4" },
    secondary: { main: "#9b9b9b" }
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
  palette: {
    primary: { 500: "#4285F4" },
    secondary: { main: "#9b9b9b" }
  }
});

const ButtonCustom = props => {
  const text = props.text;
  let variant = "" + props.variant;
  variant.toString().toLowerCase();
  const classes = props.classes;
  const startIcon = props.startIcon;
  const priority = props.priority;
  const color = props.color;

  if (priority === "primary") {
    return (
      <ThemeProvider theme={primaryBtn}>
        <Button
          variant={variant}
          className={classes}
          color={color}
          size="large"
          startIcon={startIcon}
        >
          {text}
        </Button>
      </ThemeProvider>
    );
  } else if (priority === "secondary") {
    return (
      <ThemeProvider theme={secondaryBtn}>
        <Button
          variant={variant}
          className={classes}
          color={color}
          size="small"
          startIcon={startIcon}
          px={0}
        >
          {text}
        </Button>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={primaryBtn}>
        <Button
          variant={variant}
          className={classes}
          color={color}
          size="small"
          startIcon={startIcon}
        >
          {text}
        </Button>
      </ThemeProvider>
    );
  }
};

export { ButtonCustom };
