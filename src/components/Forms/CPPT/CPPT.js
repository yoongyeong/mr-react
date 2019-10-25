import React from "react";
import Wrapper from "../../../HOC/wrapper.component";
import data from "../../data.json";
import helper from "../../../Helper/Helper";
import Fab from "@material-ui/core/Fab";
import { ButtonWithIconAndLabels as ButtonCatatan } from "../../Button/Button";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";

import "./CPPT.scss";

const handleVerification = cpptContent => {
  // const needVerification = needVerification;
  switch (cpptContent.verified) {
    case "Yes":
      return (
        <div className="verified">
          <i className="icon fas fa-check-circle fa-1g"></i>
          <span className="verified__text">Verified.&nbsp;</span>
        </div>
      );
      break;
    case "No":
      return (
        <div className="need-verification">
          <i className="icon fas fa-exclamation-circle fa-1g"></i>
          <span className="need-verification__text">
            Need Verification.&nbsp;
          </span>
          <a href="#" className="link">
            Please Verify
          </a>
        </div>
      );
      break;
  }
};

const Cppt = () => {
  let cpptContent = data.cpptContent;

  return (
    <div className="cppt" key={"cppt"}>
      {cpptContent.map((cppt, index) => (
        <div className="cppt-card" key={"cppt_" + cppt.id}>
          <img
            src={require("../../../asset/img/user/nurse/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg")}
            alt=""
            className="img sh-sf"
          />
          <div className="cppt-card__content">
            <div className="cppt-card__content-header">
              <h5 className="ppa-nama heading-5">{cppt.name}</h5>
              <p className="time p-sm">
                {helper.handleDate(new Date(cppt.postingDate))}
              </p>
              <p className="ppa-work-title p-sm">{cppt.workTitle}</p>
            </div>
            <div className="soap sh-sf">
              <span className="soap-s heading-5 align-r">S : </span>
              <p className="soap-s__content">{cppt.SOAP.S}</p>
              <span className="soap-o heading-5 align-r">O : </span>
              <p className="soap-o__content">{cppt.SOAP.O}</p>
              <span className="soap-a heading-5 align-r">A : </span>
              <p className="soap-a__content">{cppt.SOAP.A}</p>
              <span className="soap-p heading-5 align-r">P : </span>
              <p className="soap-p__content">{cppt.SOAP.P}</p>

              {handleVerification(cppt)}
            </div>
            {index === cpptContent.length - 1 ? (
              <p className="cppt-end p-sm">End of CPPT</p>
            ) : (
              ``
            )}
          </div>
        </div>
      ))}
      <div className="cppt-card__footer">
        <IconButton>
          <Search />
        </IconButton>
        <ButtonCatatan className="btn-catatan" text="Tambah Catatan" />
      </div>
    </div>
  );
};

export default Cppt;
