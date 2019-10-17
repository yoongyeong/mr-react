import React from "react";
import Wrapper from "../../HOC/wrapper.component";
import "./layout.style.scss";

const layout = props => {
  return (
    <Wrapper>
      <div>"this is from Layout component"</div>
      <main className="container">{props.children}</main>
    </Wrapper>
  );
};

export default layout;
