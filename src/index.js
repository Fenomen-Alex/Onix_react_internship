import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/assets/css/main.css';
import Appheader from '../src/components/header';
import Apptask from '../src/components/task';
import Answer from './components/answer';
import Appfooter from './components/footer';
import Conspect from './components/secondLesson';
import LessonThree from './components/thirdLesson';

ReactDOM.render(
    <React.Fragment>
        <Appheader />
        <Apptask />
        <Answer />
        <Conspect />
        <LessonThree />
        <Appfooter />
    </React.Fragment>,
    document.getElementById('root')
);