import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  HomeRounded,
  InboxRounded,
  FourKRounded,
  SwapHorizontalCircleRounded
} from "@material-ui/icons";

import "./Sidebar_mui.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#b71c1c",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    backgroundColor: "#b71c1c",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: 60,
    [theme.breakpoints.up("sm")]: {
      width: 60
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  buttonStyle: {
    color: "white"
  },
  typography: {
    p: {
      fontSize: 18,
      color: "white"
    }
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <div className={"sidebar"}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} size="small">
            <div
              id="nav-btn"
              className={
                open
                  ? "nav-btn hamburger hamburger--arrow is-active"
                  : "nav-btn hamburger hamburger--arrow"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {text == "Inbox" ? (
                  <HomeRounded className={classes.buttonStyle} />
                ) : text == "Starred" ? (
                  <InboxRounded className={classes.buttonStyle} />
                ) : text == "Send email" ? (
                  <FourKRounded className={classes.buttonStyle} />
                ) : (
                  <SwapHorizontalCircleRounded
                    className={classes.buttonStyle}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} className={classes.typography.p} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxRounded /> : <HomeRounded />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
