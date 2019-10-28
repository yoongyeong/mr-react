import React from "react";
import { DropDownButton, Toolbar } from "devextreme-react";
import service from "./data.js";
import notify from "devextreme/ui/notify";
import "whatwg-fetch";

import "./DropDown.scss";

const onButtonClick = e => {
	notify(`Go to ${e.component.option("text")}'s profile`, "success", 600);
};

const onItemClick = e => {
	notify(e.itemData.name || e.itemData, "success", 600);
};

const DropDown = props => {
	const data = service.getData();
	const text = props.text;
	const icon = props.icon;
	const item = props.item;
	const id = props.id;
	const displayExpr = props.displayExpr;

	return (
		<div>
			<DropDownButton
				useSelectMode={false}
				text={text}
				icon={icon}
				items={item}
				displayExpr={displayExpr}
				keyExpr={id}
				onButtonClick={onButtonClick}
				onItemClick={onItemClick}
			/>
		</div>
	);
};

export default DropDown;
