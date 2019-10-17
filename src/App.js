import React from "react";
import Layout from "./components/Layout/layout.component";
import FormContainer from "./components/Forms/FormContainer/form-container.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <FormContainer />
      </Layout>
    </div>
  );
}

export default App;
