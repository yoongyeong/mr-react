import React from "react";
import Patient from "./MR/Profiles/Patient";
import NeedAttention from "./MR/NeedAttention/NeedAttention";

const Widgets = () => {
	return (
		<div className="widget">
			<Patient />
			<NeedAttention />
		</div>
	);
};

export default Widgets;
