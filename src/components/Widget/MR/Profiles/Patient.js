import React from "react";
import data from "../../../data.json";
import { getDate, getAge } from "../../../../Helper/Helper";
import { ButtonCustom } from "../../../Subcomponent/Button/Button";
import Folder from "@material-ui/icons/Folder";

import "./Patient.scss";

const Patient = props => {
  const patient = data.patient;

  const selectedPatientID = props.selectedPatientID;

  let currentPatient;
  patient.map(myPatient => {
    if (myPatient.id == selectedPatientID) {
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
        <img
          src={currentPatient.image.inUse}
          alt={currentPatient.fullName}
          className="patient-img rad-5 sh-sf"
        />
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
        <h1 className="heading-3 patient-name">
          {currentPatient.fullName.toUpperCase()}
        </h1>
        <div className="bio">
          <div className="bio__data">
            <h6 className="bio__title heading-5">Gender</h6>
            <p className="bio__content">{currentPatient.sex}</p>
          </div>
          <div className="bio__data">
            <h6 className="bio__title heading-5">Birthdate</h6>
            <p className="bio__content">
              {getDate(new Date(currentPatient.birthDate))}
              <br />
              {getAge(new Date(currentPatient.birthDate))}
            </p>
          </div>
          <div className="bio__data">
            <h6 className="bio__title heading-5">E-mail</h6>
            {currentPatient.email.map(email => {
              return <p className="email">{email}</p>;
            })}
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
          <ButtonCustom
            variant="contained"
            text="Patient Folder"
            startIcon={<Folder />}
          />
        </div>
      </div>
    </div>
  );
};

export default Patient;
