import React from "react";
import Wrapper from "../../HOC/wrapper.component";
import "./Layout.scss";

const layout = props => {
  return (
    <Wrapper>
      <main className="container">{props.children}</main>
    </Wrapper>
  );
};

export default layout;
