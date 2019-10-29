import React from "react";
import { DropDownButton } from "devextreme-react";
import "./DropDown.scss";

const DropDown = props => {
  const text = props.text;
  const icon = props.icon;
  const items = props.items;
  const onButtonClick = props.onButtonClick;
  const onItemClick = props.onItemClick;

  return (
    <DropDownButton
      splitButton={false}
      useSelectMode={false}
      text={text}
      icon={icon}
      items={items}
      displayExpr={"name"}
      keyExpr={"id"}
      onButtonClick={onButtonClick}
      onItemClick={onItemClick}
    />
  );
};

export default DropDown;
