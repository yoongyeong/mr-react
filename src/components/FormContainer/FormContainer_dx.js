import React, { Component } from "react";
import { Accordion } from "devextreme-react";
import FormTitle from "../Forms-dx/FormTitle";
import FormItem from "../Forms-dx/FormContent";
import data from "../data";
import "./FormContainer.scss";

class FormContainer_dx extends Component {
  constructor(props) {
    super(props);

    this.formList = data.getFormList();

    this.state = {
      selectedItems: [this.formList[0]],
      multiple: false,
      collapsible: false,
      animationDuration: 300
    };
    this.selectionChanged = this.selectionChanged.bind(this);
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
    const {
      selectedItems,
      multiple,
      collapsible,
      animationDuration
    } = this.state;
    return (
      <div className="form-container accordion">
        <Accordion
          dataSource={this.formList}
          collapsible={true}
          multiple={multiple}
          animationDuration={150}
          selectedItems={selectedItems}
          onSelectionChanged={this.selectionChanged}
          itemTitleRender={FormTitle}
          itemRender={FormItem}
        />
        {/* <Form></Form> */}
        {/* {console.log(this.formList)} */}
      </div>
    );
  }
}

export default FormContainer_dx;
