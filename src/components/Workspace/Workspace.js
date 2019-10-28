import React from "react";
import FormContainer_dx from "../FormContainer/FormContainer_dx";
import Widgets from "../Widget/Widgets";
import WorkspaceHeader from "./WorkspaceHeader";

import "./Workspace.scss";

const Workspace = () => {
  return (
    <div className="workspace">
      <WorkspaceHeader />
      <FormContainer_dx />
      <Widgets />
    </div>
  );
};

export default Workspace;
