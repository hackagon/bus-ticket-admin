import React from 'react';
import './App.css';

import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-typography/dist/typography.css';
import '@material/data-table/dist/mdc.data-table.css';

import { Switch, BrowserRouter, Route } from "react-router-dom"

import Navbar from "./components/Navbar";
import Station from "./components/stations"
import Trip from "./components/trips"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div style={{ paddingTop: "30px" }}></div>

        <Switch>
          <Route path="/stations" exact component={Station} />
          <Route path="/trips" exact component={Trip} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
