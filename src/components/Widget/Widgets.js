import React from "react";
import Patient from "./MR/Profiles/Patient";
import NeedAttention from "./MR/NeedAttention/NeedAttention";

const Widgets = props => {
  const selectedPatient = props.selectedPatient;
  return (
    <div className="widget">
      <Patient selectedPatient={selectedPatient} />
      <NeedAttention />
    </div>
  );
};

export default Widgets;
