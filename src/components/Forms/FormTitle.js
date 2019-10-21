import React, { Component } from "react";
// // import Wrapper from "../../HOC/wrapper.component";
import CPPT from "./CPPT/CPPT";
// // import data from "../data";

import "./FormTitle.scss";

var data = require("../data.json");

class Form extends Component {
  constructor(props) {
    super(props);

    this.formList = JSON.parse(data);

    // this.state = data.getData();

    // this.formList = [];

    // Object.keys(data).forEach(key => {
    //   this.formList.push(data[key]);
    // });

    const handlerComponent = form => {
      let id = form.id;
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
        {/* {this.formList.map((form, index) => (
          <div key={index}>
            <button
              className={
                "form__" +
                form.classExtension +
                " accordion-header heading-2 sh-sf rad-top-5 rad-bot-5 pad-bot-8"
              }
            >
              {form.title[index]}
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
                  "accordion-container form__" +
                  form.classExtension +
                  "__content sh-sf rad-bot-5"
                }
              >
              </div>
            </div>
          </div>
        ))} */}

        {this.formList.map(item => console.log(item.id))}
      </div>
    );
  }
}

export default Form;

// const FormTitle = () => {
//   const formList = [];

//   Object.keys(data, formList).forEach(key => {
//     formList.push(data[key]);
//   });

//   return console.log(formList);
// };

// export default FormTitle;
