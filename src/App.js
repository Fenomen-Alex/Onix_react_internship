import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appheader from './components/header';
import NavComp from './components/nav';
import Answer from './pages/answer/answer';
import Conspect from './pages/secondLesson';
// eslint-disable-next-line import/no-cycle
// import LessonThree from './pages/thirdLesson';
// import LessonFour from './pages/fourthLesson';
// import LessonSix from './pages/sixthLesson';
import NinthLesson from './pages/ninthLesson';
import AppTask from './pages/AppTask/AppTask';
import Appfooter from './components/footer';
// eslint-disable-next-line import/no-cycle
import LessonThreeHooks from './pages/thirdLessonHooks';
import LessonFourHooks from './pages/fourthLessonHooks';
import LessonSixHooks from './pages/sixthLessonHooks';
import { dark, light } from './Constants/Constants';
import { ThemeContext } from './context/themeContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: dark
    };
  }

    toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === dark ? light : dark
      }));
    };

    render() {
      // eslint-disable-next-line no-shadow
      const { theme } = this.state;
      return (
        <ThemeContext.Provider value={theme}>
          <div className={theme}>
            <Appheader />
            <Router>
              <NavComp handleChangeTheme={this.toggleTheme} theme={theme} />
              <Switch>
                <Route path="/answer">
                  <Answer />
                </Route>
                <Route path="/second-lesson">
                  <Conspect />
                </Route>
                <Route path="/third-lesson">
                  <LessonThreeHooks />
                </Route>
                <Route path="/fourth-lesson">
                  <LessonFourHooks />
                </Route>
                <Route path="/sixth-lesson">
                  <LessonSixHooks />
                </Route>
                <Route path="/ninth-lesson" exact>
                  <NinthLesson />
                </Route>
                <Route path="/" exact>
                  <AppTask />
                </Route>
              </Switch>
            </Router>
            <Appfooter />
          </div>

        </ThemeContext.Provider>
      );
    }
}

export default App;
