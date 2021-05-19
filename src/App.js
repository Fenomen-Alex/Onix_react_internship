import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appheader from './Components/Header';
import NavComp from './Components/Nav';
import Answer from './Pages/Answer/Answer';
import Conspect from './Pages/SecondLesson';
import NineLessonText from './Pages/NineLessonText';
import AppTask from './Pages/AppTask/AppTask';
import AppFooter from './Components/Footer';
import LessonThreeHooks from './Pages/ThirdLessonHooks';
import LessonFourHooks from './Pages/FourthLessonHooks';
import LessonSixHooks from './Pages/SixthLesson/SixthLessonHooks';
import { dark, light } from './constants/constants';
import ThemeContext from './context/themeContext';
import './i18n';

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
                  <NineLessonText />
                </Route>
                <Route path="/" exact>
                  <AppTask />
                </Route>
              </Switch>
            </Router>
            <AppFooter />
          </div>

        </ThemeContext.Provider>
      );
    }
}

export default App;
