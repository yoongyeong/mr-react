import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import React from "react";
import Layout from "./components/Layout/Layout";
// import FormContainer from "./components/FormContainer/FormContainer";
import FormContainer_dx from "./components/FormContainer/FormContainer_dx";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout className="container">
        <Sidebar />
        <Header />
        <FormContainer_dx />
      </Layout>
    </div>
  );
}

export default App;
