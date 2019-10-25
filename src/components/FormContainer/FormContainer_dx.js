import React, { Component } from "react";
import { Accordion } from "devextreme-react";
import FormTitle from "../Forms/FormTitle_dx";
import CPPT from "../Forms/CPPT/CPPT";
import data from "../data.json";
import "./FormContainer_dx.scss";

class FormContainer_dx extends Component {
  constructor(props) {
    super(props);

    this.formList = data.formList;

    this.state = {
      selectedItems: [this.formList[0]],
      multiple: false,
      collapsible: false,
      animationDuration: 300
    };
    this.selectionChanged = this.selectionChanged.bind(this);

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

  selectionChanged(e) {
    let newItems = [...this.state.selectedItems];
    e.removedItems.forEach(item => {
      let index = newItems.indexOf(item);
      if (index >= 0) {
        newItems.splice(index, 1);
      }
    });
    if (e.addedItems.length) {
      newItems = [...newItems, ...e.addedItems];
    }
    this.setState({
      selectedItems: newItems
    });
  }

  render() {
    const { selectedItems, multiple } = this.state;
    return (
      <div className="form-container">
        <Accordion
          // id="accordion"
          dataSource={this.formList}
          collapsible={true}
          multiple={multiple}
          animationDuration={300}
          selectedItems={selectedItems}
          onSelectionChanged={this.selectionChanged}
          itemTitleRender={FormTitle}
          itemRender={this.handleComponent}
        />
        {/* <Form></Form> */}
        {/* {console.log(this.formList)} */}
      </div>
    );
  }
}

export default FormContainer_dx;
