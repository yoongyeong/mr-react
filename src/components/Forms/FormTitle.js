import React, { Component } from "react";
// import Wrapper from "../../HOC/wrapper.component";
import Cppt from "./CPPT/CPPT";

import "./FormTitle.scss";

const handlerComponent = () => {
  return <Cppt></Cppt>;
};

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form">
        {this.state.formList.map(form => (
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
          </div>
        ))}
      </div>
    );
  }
}

export default Form;
