import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import CreateProject from "./components/projects/CreateProject";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

//https://www.youtube.com/watch?v=jKqnfzdPqJI&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=4
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
