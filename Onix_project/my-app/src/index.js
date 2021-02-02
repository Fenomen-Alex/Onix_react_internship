import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/main.css';
import Appheader from '../src/components/header';
import Apptask from '../src/components/task';
import Answer from './components/answer';
import Appfooter from './components/footer';

ReactDOM.render(
    <React.Fragment>
        <Appheader />
        <Apptask />
        <Answer />
        <Appfooter />
    </React.Fragment>,
    document.getElementById('root')
);