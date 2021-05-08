import React from 'react';
import {
  task
} from '../../Constants/Constants';

const TheTask = () => {
  return (
    <>
      <h2>
        <b>{task.entryTask}</b>
      </h2>
      <b>{task.theme}</b>
      <span>{task.themeItems}</span>
      <br />
      <b>{task.aim}</b>
      <span>
        {task.aimItem}
      </span>
      <br />
    </>
  );
};
export default TheTask;
