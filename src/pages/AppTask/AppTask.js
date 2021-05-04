import React from 'react';

import '../../assets/css/main.css';
import TheTask from './theTask';
import Content from './Content';

const AppTask = () => {
  return (
    <>
      <div className="task"><TheTask /></div>
      <div className="main-content"><Content /></div>
    </>
  ); 
};
export default AppTask;
