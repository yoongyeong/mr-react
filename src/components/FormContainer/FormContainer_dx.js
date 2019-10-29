import React, { useState } from "react";
import { Accordion } from "devextreme-react";

import FormTitle from "../Forms/FormTitle_dx";
import CPPT from "../Forms/CPPT/CPPT";
import data from "../data.json";
import "./FormContainer_dx.scss";

const FormContainer_dx = props => {
  const formList = data.formList;

  const [selectedItems, setSelectedItems] = useState([formList[0]]);

  const handleComponent = formContent => {
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

  const selectionChanged = e => {
    let newItems = [...selectedItems];
    e.removedItems.forEach(item => {
      let index = newItems.indexOf(item);
      if (index >= 0) {
        newItems.splice(index, 1);
      }
    });
    if (e.addedItems.length) {
      newItems = [...newItems, ...e.addedItems];
    }
    setSelectedItems(newItems);
  };
  return (
    <div className="form-container">
      <Accordion
        // id="accordion"
        dataSource={formList}
        collapsible={true}
        multiple={false}
        animationDuration={300}
        selectedItems={selectedItems}
        onSelectionChanged={selectionChanged}
        itemTitleRender={FormTitle}
        itemRender={handleComponent}
      />
    </div>
  );
};

export default FormContainer_dx;
