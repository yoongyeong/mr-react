import React from "react";
import { ButtonCustom } from "../Subcomponent/Button/Button";
import { getDate } from "../../Helper/Helper";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { SelectBox } from "devextreme-react";
import Clock from "react-live-clock";
import "./WorkspaceHeader.scss";

const useStyles = makeStyles(theme => ({
  typography: {
    htmlFontSize: 10
  },
  root: {
    padding: theme.spacing(1, 2)
  },
  link: {
    display: "flex",
    fontFamily: "Open Sans",
    fontSize: "1.2rem"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 16,
    height: 16
  },
  palette: {
    primary: { 500: "#4285F4" }
  }
}));

const handleBreadCrumb = event => {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
};

const WorkspaceHeader = props => {
  const styles = useStyles();
  const handleChoosingMR = props.onPatientChange;
  const patientList = props.patientList;
  const fullNameList = props.fullNameList;

  return (
    <div className="workspace-header">
      <div className="top">
        <div className="todays-date">
          <span className="date">{getDate(new Date())}</span>
          <Clock
            format={"HH: mm"}
            ticking={true}
            timezone={"Asia/Jakarta"}
            className="time"
          />
          {" WIB"}
        </div>
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              onClick={handleBreadCrumb}
              className={styles.link}
            >
              <HomeIcon className={styles.icon} />
              Material-UI
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleBreadCrumb}
              className={styles.link}
            >
              Core
            </Link>
            <Typography color="textPrimary" className={styles.link}>
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </div>
      </div>
      <div className="bottom">
        <ButtonCustom
          text="Back"
          priority="secondary"
          variant="text"
          startIcon={<NavigateBefore />}
        />
        <div className="workspace-title">
          <h2 className="title">PATIENT DETAIL</h2>
          <h2 className="subtitle">OPD</h2>
        </div>
        <div className="btn-container">
          <ButtonCustom
            text="Request MR"
            variant="outlined"
            priority="secondary"
            classes="request-mr btn"
          />

          <ButtonBase
            style={{
              borderRadius: 5
            }}
          >
            <SelectBox
              dataSource={fullNameList}
              defaultValue={patientList[0].id}
              displayExpr={"fullName"}
              valueExpr={"id"}
              onValueChanged={handleChoosingMR}
            />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
