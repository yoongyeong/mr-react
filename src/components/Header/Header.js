import React from "react";
import UserTooltip from "../Profiles/User/UserTooltip";
import { ButtonCustom } from "../Subcomponent/Button/Button";
import { Tooltip } from "devextreme-react/tooltip";
import {
  makeStyles,
  createMuiTheme,
  Popover,
  Avatar,
  IconButton,
  ButtonBase
} from "@material-ui/core";
import { MailRounded, NotificationsRounded } from "@material-ui/icons";

import "./Header.scss";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  }
});

const useStyle = makeStyles({
  popover: {
    height: 600,

    htmlFontSize: 10,
    minWidth: 400
  }
});

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyle();
  const open = Boolean(anchorEl);

  const handlePopoverOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
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
            <ButtonBase
              style={{
                borderRadius: "100%"
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={require("../../asset/img/user/doctor/default-photo-doctor.png")}
                onClick={handleClick}
                className="btn-profile"
              />
            </ButtonBase>
            <Popover
              id="mouse-over-popover"
              className="popover_class"
              classes={{
                paper: classes.paper
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              onClose={handlePopoverClose}
            >
              <UserTooltip className={theme} />
            </Popover>
          </div>
        </div>
        <div className="header--dynamic"></div>
      </div>
    </header>
  );
};

export default Header;
