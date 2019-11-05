import React from "react";
import { ButtonCustom } from "../../Subcomponent/Button/Button";
// import CurrencyFormat from "react-currency-format";
import { Divider, IconButton } from "@material-ui/core";
import SettingsRounded from "@material-ui/icons/SettingsRounded";
import "./UserTooltip.scss";

const UserTooltip = props => {
	const currencyFormatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
	return (
		<div className="profile-container">
			<div className="section--header">
				<div className="user-info">
					<h3 className="user-info--name heading-3">Doctor's Name</h3>
					<p className="user-info--title">Doctor's Specialization</p>
				</div>
				<IconButton size="small" className="user-setting">
					<SettingsRounded className="btn-icon" />
				</IconButton>
			</div>
			<Divider />
			<div className="section--content">
				<div className="stats--patient">
					<div className="patient--daily">
						<h5 className="title heading-5">Today's Patient</h5>
						<p className="value">8</p>
					</div>
					<div className="patient--monthly">
						<h5 className="title heading-5">Patients (MTD)</h5>
						<p className="value">192</p>
					</div>
					<div className="leave--total">
						<h5 className="title heading-5">Total Leave (MTD)</h5>
						<p className="value">0</p>
					</div>
				</div>
				<div className="stats--income">
					<h6 className="title heading-5">Net Income (MTD)</h6>
					{/* <CurrencyFormat
            thousandSeparator={true}
            displayType={"text"}
            allowNegative={false}
            className="value"
            prefix="Rp"
            value={149733000}
          /> */}
					<p className="value">{currencyFormatter.format(149733000)}</p>
				</div>
			</div>
			<div className="section--footer">
				<ButtonCustom className="btn cuti" text="Ajukan Cuti" variant="text" priority="secondary" color="primary" />
				<div className="btn logout">
					<ButtonCustom text="Logout" variant="text" priority="secondary" color="secondary" />
				</div>
			</div>
		</div>
	);
};

export default UserTooltip;
