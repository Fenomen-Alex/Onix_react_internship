import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/css/main.css';
import Appheader from './components/header';
import Apptask from './pages/task';
import Answer from './pages/answer';
import Appfooter from './components/footer';
import Conspect from './pages/secondLesson';
import LessonThree from './pages/thirdLesson';
import LessonFour from './pages/fourthLesson';
import LessonSix from './pages/sixthLesson';
import NavComp from './components/nav';
import NinthLesson from "./pages/ninthLesson";

ReactDOM.render(
  <>
    <Appheader />
    <Router>
      <NavComp />
      <Switch>
        <Route path="/answer">
          <Answer />
        </Route>
        <Route path="/second-lesson">
          <Conspect />
        </Route>
        <Route path="/third-lesson">
          <LessonThree />
        </Route>
        <Route path="/fourth-lesson">
          <LessonFour />
        </Route>
        <Route path="/sixth-lesson">
          <LessonSix />
        </Route>
        <Route path="/ninth-lesson" exact>
          <NinthLesson />
        </Route>
        <Route path="/" exact>
          <Apptask />
        </Route>
      </Switch>
    </Router>
    <Appfooter />
  </>,
  document.getElementById('root')
);
