import React from 'react';
import html from '../../assets/images/html.png';
import {
  htmlText, htmlTitle
} from '../../Constants/Constants';

const HTML = () => {
  return (
    <div className="html">
      <img className="img-html" src={html} alt="html" />
      <b>{htmlTitle}</b>
      {htmlText}
    </div>
  );
};

export default HTML;
