import React, { Component } from "react";
// // import Wrapper from "../../HOC/wrapper.component";
import CPPT from "./CPPT/CPPT";
// // import data from "../data";

import "./FormTitle.scss";

var data = require("../data.json");

class Form extends Component {
  constructor(props) {
    super(props);

    this.forms = data.formList;

    this.handleItem = formContent => {
      let id = formContent.id;
      switch (id) {
        case "1":
          return <CPPT></CPPT>;
          break;
        case "2":
          return "assessment perawat";
          break;
        case "3":
          return "assessment dokter";
          break;
        case "4":
          return "pengkajian tambahan";
          break;
      }
    };
  }

  render() {
    return (
      <div className="form">
        {this.forms.map(form => (
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
                <span>
                  {form.info !== null ? " - " : " " + form.notification}
                </span>
                {form.info}
              </span>
              <i className="icon fa fa-chevron-down"></i>
            </button>
            <div className="form-content">
              <div
                className={
                  "accordion-container form-" +
                  form.classExtension +
                  "__content sh-sf rad-bot-5"
                }
              >
                {this.handleItem(form)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Form;
