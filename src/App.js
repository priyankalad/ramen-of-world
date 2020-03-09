import React, { useState, useEffect } from "react";
import CallAPI from "./callAPI";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import RamenDetail from "./components/RamenDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/detail/:name" component={RamenDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
