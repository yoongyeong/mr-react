import React from "react";
import UserTooltip from "../Profiles/User/UserTooltip";
import { ButtonCustom } from "../Subcomponent/Button/Button";
import { Tooltip } from "devextreme-react/tooltip";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
  Popover,
  Popper,
  Typography,
  Avatar,
  IconButton,
  Fade,
  Paper,
  ButtonBase,
  Dialog,
  DialogTitle
} from "@material-ui/core";
import { MailRounded, NotificationsRounded } from "@material-ui/icons";

import "./Header.scss";

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
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
  const [tooltipVisible, settooltipVisible] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

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

  const handleClose = () => {
    setAnchorEl(null);
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
            {/* <img
							src={require("../../asset/img/user/doctor/default-photo-doctor.png")}
							alt="Doctor's Name"
							id="profile"
							className="header-btn btn-profile sh-sf"
							onClick={handleClick("bottom-end")}
							// onMouseEnter={showProfile}
							// onMouseOut={showProfile}
						/> */}
            {/* <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
							{({ TransitionProps }) => (
								<Fade {...TransitionProps} timeout={350}>
									<Paper>
										<Typography className={classes.typography}>The content of the Popper.</Typography>
									</Paper>
								</Fade>
							)}
						</Popper> */}
            {/* <HtmlTooltip
							title={
								<React.Fragment>
									<Typography color="inherit">Tooltip with HTML</Typography>
									<em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>. {"It's very engaging. Right?"}
								</React.Fragment>
							}
						>
							<UserTooltip />
						</HtmlTooltip> */}
          </div>
        </div>
        <div className="header--dynamic"></div>
      </div>
    </header>
  );
};

export default Header;

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		width: 500
// 	},
// 	typography: {
// 		padding: theme.spacing(2)
// 	}
// }));

// export default function PositionedPopper() {
// 	const [anchorEl, setAnchorEl] = React.useState(null);
// 	const [open, setOpen] = React.useState(false);
// 	const [placement, setPlacement] = React.useState();
// 	const classes = useStyles();

// 	const handleClick = newPlacement => event => {
// 		setAnchorEl(event.currentTarget);
// 		setOpen(prev => placement !== newPlacement || !prev);
// 		setPlacement(newPlacement);
// 	};

// 	return (
// 		<div className={classes.root}>
// 			<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
// 				{({ TransitionProps }) => (
// 					<Fade {...TransitionProps} timeout={350}>
// 						<Paper>
// 							<Typography className={classes.typography}>The content of the Popper.</Typography>
// 						</Paper>
// 					</Fade>
// 				)}
// 			</Popper>
// 			<Button onClick={handleClick("bottom-end")}>bottom-end</Button>
// 		</div>
// 	);
// }
