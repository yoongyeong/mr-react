import React from "react";
import "./FormTitle_dx.scss";

const FormTitle_dx = form => {
  return (
    <div
      className={
        "form__" + form.classExtension + " accordion-header heading-2 "
      }
      key={form.id}
    >
      {form.title}
      <span className="heading-2 heading-2--blue">
        {form.info !== null ? " - " : " " + form.notification}
        {form.info}
      </span>
    </div>
  );
};

export default FormTitle_dx;
