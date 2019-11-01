import React from "react";

const TooltipProfile = () => {
  return (
    <div className="profile-container">
      <div className="section-top"></div>
      <div className="section-bottom">
        <div className="stats-patient">
          <div className="title">Today's Patient</div>
          <div className="title">Patient This Month</div>
          <div className="title">Total Leave This Month</div>
        </div>
        <div className="stats-income">
          <div className="title">Your Income (MTD)</div>
          <div className="value">149733000</div>
        </div>
      </div>
    </div>
  );
};

export default TooltipProfile;
