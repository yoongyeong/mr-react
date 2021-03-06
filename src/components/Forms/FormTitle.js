import React, { Component } from "react";
import CPPT from "./CPPT/CPPT";

import "./FormTitle.scss";

var data = require("../data.json");

class Form extends Component {
  constructor(props) {
    super(props);

    this.forms = data.formList;

    this.handleComponent = formContent => {
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
      <Wrapper>
        {this.forms.map(form => (
          <div key={form.id} className="form">
            <button
              className={
                "form__" +
                form.classExtension +
                " accordion-header heading-2 sh-sf rad-top-5 rad-bot-5 pad-bot-8"
              }
            >
              {form.title}
              <span className="heading-2 heading-2--blue">
                {form.info !== null ? " - " : " " + form.notification}
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
                {this.handleComponent(form)}
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
    );
  }
}

export default Form;
