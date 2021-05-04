import React from 'react';
import {
  aim, aimItem, entryTask, theme, themeItems
} from '../../Constants/Constants';

const TheTask = () => {
  return (
    <>
      <h2>
        <b>{entryTask}</b>
      </h2>
      <b>{theme}</b>
      <span>{themeItems}</span>
      <br />
      <b>{aim}</b>
      <span>
        {aimItem}
      </span>
      <br />
    </>
  );
};
export default TheTask;
