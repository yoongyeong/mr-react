import React, { useState } from "react";
import FormContainer_dx from "../FormContainer/FormContainer_dx";
import Widgets from "../Widget/Widgets";
import WorkspaceHeader from "./WorkspaceHeader";

import "./Workspace.scss";

const handleSelectedPatient = props => {};

const Workspace = props => {
  const [selectedPatient, setSelectedPatient] = useState(1);

  return (
    <div className="workspace">
      <WorkspaceHeader
        selectedPatient="2"
        onPatientChange={handleSelectedPatient}
      />
      <FormContainer_dx selectedPatient="2" />
      <Widgets selectedPatient="2" />
    </div>
  );
};

export default Workspace;
