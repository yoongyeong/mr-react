import React, { useState } from "react";
import FormContainer_dx from "../FormContainer/FormContainer_dx";
import Widgets from "../Widget/Widgets";
import WorkspaceHeader from "./WorkspaceHeader";
import Patient from "../Profiles/Patient/Patient";
import NeedAttention from "../NeedAttention/NeedAttention";
import data from "../data.json";

import "./Workspace.scss";

const Workspace = props => {
  const [selectedPatientID, setSelectedPatientID] = useState(1);

  const patient = data.patient;
  let currentPatient = [];

  currentPatient = patient.map(myPatient => {
    currentPatient = myPatient;
    currentPatient.fullName = [
      currentPatient.honorificTitle,
      currentPatient.firstName,
      ...currentPatient.middleName,
      currentPatient.lastName,
      currentPatient.professionalTitle
    ].join(" ");
    return currentPatient;
  });
  const handleChoosingMR = e => {
    setSelectedPatientID(e.value);
  };

  return (
    <div className="workspace">
      <WorkspaceHeader
        onPatientChange={handleChoosingMR}
        fullNameList={patient}
        patientList={data.patient}
      />
      <FormContainer_dx selectedPatientID={selectedPatientID} />
      <Widgets>
        <Patient selectedPatientID={selectedPatientID} />
        <NeedAttention />
      </Widgets>
    </div>
  );
};

export default Workspace;
