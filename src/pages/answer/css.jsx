import React from 'react';
import css from '../../assets/images/css.png';
import {
  cssText, cssTitle
} from '../../Constants/Constants';

const CSS = () => {
  return (
    <div className="css">
      <img className="img-css" src={css} alt="css" />
      <b>{cssTitle}</b>
      {cssText}
    </div>
  );
};

export default CSS;
