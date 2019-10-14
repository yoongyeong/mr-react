import React from 'react';
import Wrapper from "../../hoc/Wrapper";

const layout = (props) => {
  return(
  <Wrapper>
    <div>"this is from Layout component"</div>
    <main>
      {props.children}
    </main>
  </Wrapper>
  )
}

export default layout;