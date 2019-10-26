import React from "react";
import data from "../../../data.json";

import "./Patient.scss";

const Patient = () => {
	const patient = data.patient;
	return (
		<div className="patient sh-sf rad-5">
			<div className="patient__top">
				<img src={console.log(patient.mr)} alt="Patient Picture" className="patient-img rad-5" />
				<div className="icon-container">
					<i className="icon">1</i>
					<i className="icon">2</i>
					<i className="icon">3</i>
					<i className="icon">4</i>
					<i className="icon">5</i>
					<i className="icon">6</i>
					<i className="icon">7</i>
					<i className="icon">8</i>
					<i className="icon">9</i>
					<i className="icon">10</i>
				</div>
			</div>
			<div className="patient__data">
				<p className="patient-num">MR15180272</p>
				<h1 className="heading-3 patient-name">Ms. Christina Anderson Margaritha Valentine</h1>
				<div className="bio">
					<div className="bio__data">
						<h6 className="bio__title heading-5">Gender</h6>
						<p className="bio__content">Female</p>
					</div>
					<div className="bio__data">
						<h6 className="bio__title heading-5">Birthdate</h6>
						<p className="bio__content">
							12 Jan 1990
							<br />
							(29Y 06M 02D)
						</p>
					</div>
					<div className="bio__data">
						<h6 className="bio__title heading-5">E-mail</h6>
						<p className="bio__content">christina123@mail.com</p>
					</div>
					<div className="bio__data">
						<h6 className="bio__title heading-5">Phone</h6>
						<ol className="phone">
							<li>
								<a href="#" className="phone link">
									+6289 8765 4321
								</a>
							</li>
							<li>
								<a href="#" className="phone link">
									+6289 8765 4321
								</a>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<div className="patient__bot">
				<button className="patient-folder btn-1">
					<i className="btn-1__icon fa fa-folder"></i>
					Patient Folder
				</button>
			</div>
		</div>
	);
};

export default Patient;
