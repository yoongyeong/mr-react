import React from "react";

const header = () => {
  return (
    <header id="header" class="header sh-sf">
      <div class="header-sticky">
        <div class="header--static">
          <a href="#" class="header-logo">
            <img src="img/medico-logo-red-64.png" alt="Medico Logo" />
          </a>
          <div class="header-nav">
            <img
              src="img/default-photo-doctor.png"
              alt="Doctor's Name"
              class="btn btn-profile sh-sf"
            />
          </div>
        </div>
        <div class="header--dynamic"></div>
      </div>
    </header>
  );
};

export default header;
