// import React from "react";
// import "./Sidebar.scss";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       {/* <div id="sidebar" class="sidebar">
//         <div class="sidebar-sticky">
//           <div id="nav-btn" class="nav-btn hamburger hamburger--arrow">
//             <div class="hamburger-box">
//               <div class="hamburger-inner"></div>
//             </div>
//           </div>
//           <div class="sidebar__icon">
//             <div class="icon sidebar--icon fas fa-home"></div>
//             <div class="icon sidebar--icon fas fa-exclamation-triangle"></div>
//             <div class="icon sidebar--icon fas fa-exclamation-triangle"></div>
//             <div class="icon sidebar--icon fas fa-exclamation-triangle"></div>
//             <div class="icon sidebar--icon fas fa-exclamation-triangle"></div>
//           </div>
//         </div>
//       </div>

//       <div id="sidebar__extension" class="sidebar__extension">
//         <div class="sidebar__extension--text">
//           <a href="#" class="link sidebar--link">
//             Menu 1
//           </a>
//           <a href="#" class="link sidebar--link">
//             Menu 2
//           </a>
//           <a href="#" class="link sidebar--link">
//             Menu 3
//           </a>
//           <a href="#" class="link sidebar--link">
//             Menu 4
//           </a>
//           <a href="#" class="link sidebar--link">
//             Menu 5
//           </a>
//         </div>
// 			</div> */}

//     </div>
//   );
// };
// export default Sidebar;

import React, { useState } from "react";
import { Drawer, Toolbar, List } from "devextreme-react";
import { navigation, text } from "./data.js";
import "./Sidebar.scss";

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
  const classes = props.classes;
  const [openedStateMode, setOpenedStateMode] = useState("shrink");
  const [revealMode, setRevealMode] = useState("slide");
  const [position, setPosition] = useState("left");

  const onRevealModeChanged = ({ value }) => {
    setRevealMode({ value });
  };
  const onPositionChanged = ({ value }) => {
    setPosition({ value });
  };

  return (
    <Drawer
      opened={opened}
      openedStateMode={openedStateMode}
      position={position}
      revealMode={revealMode}
      component={NavigationList}
      closeOnOutsideClick={true}
      height={"100%"}
      width={"auto"}
      className="sidebar__extension"
    ></Drawer>
  );
};

const Sidebar = props => {
  const [opened, setOpened] = useState(false);

  const toolBarItems = [
    {
      widget: "dxButton",
      location: "before",
      options: {
        icon: "menu",
        onClick: () => setOpened(!opened)
      }
    }
  ];
  return (
    <div className="sidebar">
      <Toolbar items={toolBarItems} />
      <SidebarDrawer classes="drawer" opened={opened} />
    </div>
  );
};

export { Sidebar, SidebarDrawer };
