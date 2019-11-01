import React, { useState } from "react";
import { Tooltip } from "devextreme-react/tooltip";
import IconButton from "@material-ui/core/IconButton";
import MailRounded from "@material-ui/icons/MailRounded";
import NotificationsRounded from "@material-ui/icons/NotificationsRounded";
import TooltipProfile from "../Profiles/TooltipProfile/TooltipProfile";
import DropDownBox from "devextreme-react/drop-down-box";

import "./Header.scss";

const Header = () => {
  const [tooltipVisible, settooltipVisible] = useState(false);

  const showProfile = () => {
    settooltipVisible(!tooltipVisible);
  };

  return (
    <header id="header" className="header sh-sf">
      <div className="header-sticky">
        <div className="header--static">
          <a href="#" className="header-logo">
            <img
              src={require("../../asset/img/medico-logo-red-64.png")}
              alt="Medico Logo"
            />
          </a>
          <div className="header-nav">
            <IconButton size="small" className="header-btn">
              <MailRounded className="btn-icon" />
            </IconButton>
            <IconButton size="small" className="header-btn">
              <NotificationsRounded className="btn-icon" />
            </IconButton>
            <img
              src={require("../../asset/img/user/doctor/default-photo-doctor.png")}
              alt="Doctor's Name"
              id="profile"
              className="header-btn btn-profile sh-sf"
              onMouseEnter={showProfile}
              onMouseOut={showProfile}
            />
            {/* <Tooltip
              target={"#profile"}
              visible={tooltipVisible}
              closeOnOutsideClick={true}
              hoverStateEnabled={true}
            >
              <TooltipProfile />
            </Tooltip> */}
            {/* <DropDownBox contentRender={TooltipProfile} input/> */}
          </div>
        </div>
        <div className="header--dynamic"></div>
      </div>
    </header>
  );
};

export default Header;
