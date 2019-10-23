import React from "react";

const formContent = data => {
  return (
    <div
      className={
        "accordion-container form__" +
        data.classExtension +
        "__content sh-sf rad-bot-5"
      }
    >
      {data.content}
    </div>
  );
};

export default formContent;
