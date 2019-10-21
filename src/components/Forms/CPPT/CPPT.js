import React from "react";
import Wrapper from "../../../HOC/wrapper.component";

import "./CPPT.scss";

const Cppt = () => {
  return (
    <div className="cppt-card">
      <img
        // src={require("../../asset/img/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg")}
        alt=""
        className="img sh-sf"
      />
      <div className="cppt-card__content">
        <div className="cppt-card__content-header">
          <div>
            <h5 className="ppa-nama heading-5">Steinarr Flomran</h5>
            <p className="ppa-gelar p-sm">Licensed Clinical Social Worker</p>
          </div>
          <p className="time p-sm">Thu, 12 Sep '19, 12:05</p>
        </div>
        <div className="soap sh-sf">
          <span className="soap-s heading-5 align-r">S : </span>
          <p className="soap-s__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span className="soap-o heading-5 align-r">O : </span>
          <p className="soap-o__content">
            Faceres tu quidem, Torquate, haec omnia.
          </p>
          <span className="soap-a heading-5 align-r">A : </span>
          <p className="soap-a__content">
            Tu autem, si tibi illa probabantur, cur non propriis verbis ea
            tenebas? Ita multa dicunt, quae vix intellegam. At ego quem huic
            anteponam non audeo dicere; Ita graviter et severe voluptatem
            secrevit a bono.
          </p>
          <span className="soap-p heading-5 align-r">P : </span>
          <p className="soap-p__content">
            Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se
            ipsa rerum scientia.
          </p>

          <div className="need-verification">
            <i className="icon fas fa-exclamation-circle fa-1g"></i>
            <span className="need-verification__text">
              Need Verification.&nbsp;
            </span>
            <a href="#" className="link">
              Please Verify
            </a>
          </div>
        </div>
        <p className="soap-end p-sm">End of CPPT</p>
      </div>
    </div>
  );
};

export default Cppt;
