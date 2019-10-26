import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CPPT from "../Forms/CPPT/CPPT";
import data from "../data.json";
import "./FormContainer_mui.scss";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    htmlFontSize: 10
  },
  typography: {},
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold
  }
}));

const FormContainer_mui = props => {
  const formList = data.formList;
  const classes = useStyles();

  const handleComponent = formContent => {
    let id = formContent.id;
    switch (id) {
      case "1":
        return <CPPT></CPPT>;
        break;
      case "2":
        return "assessment perawat";
        break;
      case "3":
        return "assessment dokter";
        break;
      case "4":
        return "pengkajian tambahan";
        break;
    }
  };

  return (
    <div className="form-container">
      {
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Expansion Panel 1
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Expansion Panel 2
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Disabled Expansion Panel
              </Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      }
    </div>
  );
};

export default FormContainer_mui;
