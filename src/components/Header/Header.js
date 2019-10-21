import React from "react";

const header = () => {
  return (
    <header id="header" className="header sh-sf">
      <div className="header-sticky">
        <div className="header--static">
          <a href="#" className="header-logo">
            <img src="img/medico-logo-red-64.png" alt="Medico Logo" />
          </a>
          <div className="header-nav">
            <img
              src="img/default-photo-doctor.png"
              alt="Doctor's Name"
              className="btn btn-profile sh-sf"
            />
          </div>
        </div>
        <div className="header--dynamic"></div>
      </div>
    </header>
  );
};

export default header;
