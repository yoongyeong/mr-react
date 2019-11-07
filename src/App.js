import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import React from "react";
import Layout from "./components/Layout/Layout";
// import { Sidebar } from "./components/Sidebar/Sidebar_dx";
import Sidebar from "./components/Sidebar/Sidebar_mui";
import Header from "./components/Header/Header";
import Workspace from "./components/Workspace/Workspace";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout className="container">
        <Sidebar />
        <Header />
        <Workspace />
      </Layout>
    </div>
  );
}

export default App;
