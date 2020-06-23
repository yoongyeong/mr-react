import React from "react";
import Wrapper from "../../hoc/wrapper.component";

const Widgets = props => {
	return (
		<Wrapper>
			<div className="widget">{props.children}</div>
		</Wrapper>
	);
};

export default Widgets;
