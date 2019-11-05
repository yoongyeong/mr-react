import React, { useState } from "react";
import { Drawer, Toolbar, List, Item } from "devextreme-react";
import { Modal } from "@material-ui/core";
import "./Sidebar.scss";

const navigation = [
  { id: 1, text: "Products" },
  { id: 2, text: "Sales" },
  { id: 3, text: "Customers" },
  { id: 4, text: "Employees" },
  { id: 5, text: "Reports" }
];

const NavigationList = () => {
  return (
    <div className={"list"} style={{ width: "200px" }}>
      <List
        dataSource={navigation}
        hoverStateEnabled={true}
        activeStateEnabled={true}
        focusStateEnabled={true}
        elementAttr={{
          class: "panel-list dx-theme-accent-as-background-color"
        }}
      />
    </div>
  );
};

const SidebarDrawer = props => {
  const opened = props.opened;
  const setOpened = props.setOpened;
  const classes = props.classes;

  return (
    <Drawer
      opened={opened}
      openedStateMode={"shrink"}
      position={"left"}
      revealMode={"slide"}
      component={NavigationList}
      closeOnOutsideClick={true}
      height={"100%"}
      width={"auto"}
      className="sidebar__extension"
    ></Drawer>
  );
};

const ProductInfo = item => {
  return (
    <div className={"sidebar-icon"}>
      <img src={item.ImageSrc} />
      <div>{item.Name}</div>
      <div className={"price"}>{currencyFormatter.format(item.Price)}</div>
    </div>
  );
};

const Sidebar = props => {
  const [opened, setOpened] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setOpened(!opened);
    setIsHidden(!isHidden);
  };

  return (
    <div className="sidebar">
      {/* <Toolbar items={toolBarItems} /> */}
      <div
        id="nav-btn"
        class={
          opened
            ? "nav-btn hamburger hamburger--arrow is-active"
            : "nav-btn hamburger hamburger--arrow"
        }
        onClick={handleClick}
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>

      <List
        dataSource={navigation}
        hoverStateEnabled={true}
        activeStateEnabled={true}
        focusStateEnabled={true}
      />

      <SidebarDrawer classes="drawer" opened={opened} />
      <div id={"overlay"} hidden={isHidden} onClick={handleClick} />
    </div>
  );
};

export { Sidebar, SidebarDrawer };
