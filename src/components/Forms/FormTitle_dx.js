import React from "react";
// import CPPT from "./CPPT/CPPT";

import "./FormTitle.scss";

// var data = require("../data.json");

const FormTitle_dx = form => {
  return (
    <div className="form">
      {/* {forms.map(form => ( */}
      <div key={form.id}>
        <button
          className={
            "form__" +
            form.classExtension +
            " accordion-header heading-2 sh-sf rad-top-5 rad-bot-5 pad-bot-8"
          }
        >
          {form.title}
          <span className="heading-2 heading-2--blue">
            <span>{form.info !== null ? " - " : " " + form.notification}</span>
            {form.info}
          </span>
          <i className="icon fa fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default FormTitle_dx;
