import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import PendingData from "./Components/VillageProfile/PendingData";
import VillageProfileHome from "./Components/VillageProfileHome";
import "./App.css";
import "./bootstrap.css";
import { db } from "./db/db";
import AllData from "./Components/VillageProfile/AllData";
import EditHousehold from "./Components/VillageProfile/EditHousehold";
import AddHousehold from "./Components/VillageProfile/AddHousehold";

export default function App() {
  db.open();
  return (
    <Router>
      <Switch>
        <Route path="/village-profile-app/app/add-new">
          <AddHousehold />
        </Route>
        <Route
          path="/village-profile-app/app/edit/:id"
          children={<EditHousehold />}
        />
        <Route path="/village-profile-app/app/pending">
          <PendingData />
        </Route>
        <Route path="/village-profile-app/app/all">
          <AllData />
        </Route>
        <Route path="/village-profile-app/app">
          <VillageProfileHome />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/village-profile-app">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
