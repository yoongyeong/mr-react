import React from "react";
import { ButtonCustom } from "../Subcomponent/Button/Button";
import DropDown from "../Subcomponent/DropDown/DropDown";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";

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

function handleClick(event) {
	event.preventDefault();
	alert("You clicked a breadcrumb.");
}

const WorkspaceHeader = props => {
	const patient = data.patient;

	const selectedPatient = 2;

	let currentPatient;
	patient.map(myPatient => {
		if (myPatient.id == selectedPatient) {
			currentPatient = myPatient;
			currentPatient.fullName = [
				currentPatient.honorificTitle,
				currentPatient.firstName,
				...currentPatient.middleName,
				currentPatient.lastName,
				currentPatient.professionalTitle
			].join(" ");
		}
	});

	const styles = useStyles();
	return (
		<div className="workspace-header">
			<div className="top">
				<div className="todays-date">
					<span className="date">29 Jan 2019</span>
					<span className="time">08:12 WIB</span>
				</div>
				<div className="breadcrumbs">
					<Breadcrumbs aria-label="breadcrumb">
						<Link color="inherit" href="/" onClick={handleClick} className={styles.link}>
							<HomeIcon className={styles.icon} />
							Material-UI
						</Link>
						<Link color="inherit" href="/getting-started/installation/" onClick={handleClick} className={styles.link}>
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
					<span className="title">PATIENT DETAIL</span>
					<span className="subtitle">OPD</span>
				</div>
				<div className="bottom-right">
					<ButtonCustom
						text="Request MR"
						size="small"
						variant="outlined"
						priority="secondary"
						classes="request-mr btn"
					/>
					<DropDown
						useSelectMode={false}
						text={currentPatient.fullName}
						icon={currentPatient.image.inUse}
						items={"item"}
						displayExpr={"displayExpr"}
						keyExpr={currentPatient.id}
						onButtonClick={"onButtonClick"}
						onItemClick={"onItemClick"}
					/>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceHeader;
