import React, { Component } from "react";
import Wrapper from "../../HOC/wrapper.component";
import Cppt from "./cppt.component";

import "./form.style.scss";

const handlerComponent = () => {
  return <Cppt></Cppt>;
};

class Form extends Component {
  constructor() {
    super();

    this.state = {
      formList: [
        {
          id: "001",
          title: "CPPT",
          info: null,
          notification: "(Notifications)",
          classExtension: "cppt",
          content: handlerComponent()
        },
        {
          id: "002",
          title: "Assessment Awal",
          info: "Perawat",
          notification: "",
          classExtension: "perawat",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2"
        },
        {
          id: "003",
          title: "Assessment Awal",
          info: "Dokter",
          notification: "",
          classExtension: "dokter",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3"
        },
        {
          id: "004",
          title: "Pengkajian Tambahan 01",
          info: null,
          notification: "",
          classExtension: "tambahan",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 4"
        }
      ]
    };
  }

  render() {
    return (
      <Wrapper>
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
            <div
              className={
                "accordion-container form__" +
                form.classExtension +
                "__content sh-sf rad-bot-5"
              }
            >
              {form.content}
            </div>
          </div>
        ))}
      </Wrapper>
    );
  }
}

export default Form;
