import React from "react";
import Wrapper from "../../HOC/wrapper.component";

const Widgets = props => {
	return (
		<Wrapper>
			<div className="widget">{props.children}</div>
		</Wrapper>
	);
};

export default Widgets;
