import React, { useState } from "react";
import { ButtonCustom } from "../Subcomponent/Button/Button";
import DropDown from "../Subcomponent/DropDown/DropDown";
import { getDate } from "../../Helper/Helper";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
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

// const onButtonClick = e => {
//   notify(`Go to ${e.component.option("text")}'s profile`, "success", 600);
// };

const handleBreadCrumb = event => {
	event.preventDefault();
	alert("You clicked a breadcrumb.");
};

const WorkspaceHeader = props => {
	const styles = useStyles();
	const selectedPatient = props.selectedPatient;
	const id = props.selectedPatientID;
	const handleChoosingMR = props.onPatientChange;

	const patient = props.patientList;
	let myPatient = props.patientList;

	patient.map(patientList => {
		myPatient = patientList;
		myPatient.fullName = [
			myPatient.honorificTitle,
			myPatient.firstName,
			...myPatient.middleName,
			myPatient.lastName,
			myPatient.professionalTitle
		].join(" ");
	});

	return (
		<div className="workspace-header">
			<div className="top">
				<div className="todays-date">
					<span className="date">{getDate(new Date())}</span>
					<Clock format={"HH: mm"} ticking={true} timezone={"Asia/Jakarta"} className="time" />
					{" WIB"}
				</div>
				<div className="breadcrumbs">
					<Breadcrumbs aria-label="breadcrumb">
						<Link color="inherit" href="/" onClick={handleBreadCrumb} className={styles.link}>
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
				<ButtonCustom text="Back" priority="secondary" variant="text" startIcon={<NavigateBefore />} />
				<div className="workspace-title">
					<h2 className="title">PATIENT DETAIL</h2>
					<h2 className="subtitle">OPD</h2>
				</div>
				<div className="btn-container">
					<ButtonCustom text="Request MR" variant="outlined" priority="secondary" classes="request-mr btn" />

					<ButtonBase
						style={{
							borderRadius: 5
						}}
					>
						<DropDown
							text={selectedPatient.fullName}
							icon={selectedPatient[id].image.inUse}
							items={patient.map(item => {
								return {
									id: item.id,
									name: item.fullName,
									icon: item.image.inUse
								};
							})}
							displayExpr={"name"}
							keyExpr={"id"}
							onItemClick={handleChoosingMR}
						/>
					</ButtonBase>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceHeader;
