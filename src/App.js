import React, {Component} from 'react';
import Appheader from "./components/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavComp from "./components/nav";
import Answer from "./pages/answer";
import Conspect from "./pages/secondLesson";
import LessonThree from "./pages/thirdLesson";
import LessonFour from "./pages/fourthLesson";
import LessonSix from "./pages/sixthLesson";
import NinthLesson from "./pages/ninthLesson";
import Apptask from "./pages/task";
import Appfooter from "./components/footer";

const theme = "light";
export const ThemeContext = React.createContext(theme);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark"
        };
    }
    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === "dark" ? "light" : "dark"
        }));
    };
    render() {
        const { theme } = this.state
        return (
            <ThemeContext.Provider value={theme}>
                <div className={theme}>
                    <Appheader />
                    <Router>
                        <NavComp handleChangeTheme={this.toggleTheme} theme={theme}/>
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
                </div>

            </ThemeContext.Provider>
        );
    }
}

export default App;