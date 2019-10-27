import React, { useState } from "react";
import data from "../../../data.json";
import { handleBirthDate, getAge } from "../../../../Helper/Helper";
import { ButtonWithIconAndLabels as PatientFolder } from "../../../Button/Button";

import "./Patient.scss";

const Patient = () => {
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

	return (
		<div className="patient sh-sf rad-5">
			<div className="patient__top">
				<img src={currentPatient.image.inUse} alt="Patient Picture" className="patient-img rad-5 sh-sf" />
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
				<p className="patient-num">{currentPatient.mrCode}</p>
				<h1 className="heading-3 patient-name">{currentPatient.fullName.toUpperCase()}</h1>
				<div className="bio">
					<div className="bio__data">
						<h6 className="bio__title heading-5">Gender</h6>
						<p className="bio__content">{currentPatient.sex}</p>
					</div>
					<div className="bio__data">
						<h6 className="bio__title heading-5">Birthdate</h6>
						<p className="bio__content">
							{handleBirthDate(new Date(currentPatient.birthDate))}
							<br />
							{getAge(new Date(currentPatient.birthDate))}
						</p>
					</div>
					<div className="bio__data">
						<h6 className="bio__title heading-5">E-mail</h6>
						<p className="email">
							{currentPatient.email.map(email => {
								return <p>{email}</p>;
							})}
						</p>
					</div>
					<div className="bio__data">
						<h6 className="bio__title heading-5">Phone</h6>
						<ol className="phone">
							{currentPatient.phone.map(phone => {
								return (
									<li>
										<a href="#" className="link">
											{phone}
										</a>
									</li>
								);
							})}
						</ol>
					</div>
				</div>
			</div>
			<div className="patient__bot">
				<div className="btn">
					<PatientFolder variant="contained" text="Patient Folder" />
				</div>
			</div>
		</div>
	);
};

export default Patient;
