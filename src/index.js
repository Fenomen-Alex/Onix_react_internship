import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../src/assets/css/main.css";
import Appheader from "../src/components/header";
import Apptask from "../src/components/task";
import Answer from "./components/answer";
import Appfooter from "./components/footer";
import Conspect from "./components/secondLesson";
import LessonThree from "./components/thirdLesson";
import LessonFour from "./components/fourthLesson";
import LessonSix from "./components/sixthLesson";
import NavComp from "./components/nav";

ReactDOM.render(
  <React.Fragment>
    <Appheader />
    <Router>
      <NavComp />
      <Switch>
        <Route path="/answer">
          <Answer />
        </Route>
        <Route path="/secondlesson">
          <Conspect />
        </Route>
        <Route path="/thirdlesson">
          <LessonThree />
        </Route>
        <Route path="/fourthlesson">
          <LessonFour />
        </Route>
        <Route path="/sixthlesson">
          <LessonSix />
        </Route>
        <Route path="/" exact>
          <Apptask />
        </Route>
      </Switch>
    </Router>

    {/* <Apptask />
        <Answer />
        <Conspect />
        <LessonThree />
        <LessonFour />
        <LessonSix /> */}
    <Appfooter />
  </React.Fragment>,
  document.getElementById("root")
);
