import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import Form from "./components/Forms/Form";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Form/>
      </Layout>
    
    </div>
  );
}

export default App;
