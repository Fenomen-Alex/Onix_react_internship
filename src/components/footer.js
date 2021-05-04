import React from 'react';

import '../assets/css/main.css';
import {
  authorGitHubLink, authorGitHubText, authorLink, authorText
} from '../Constants/Constants';

const Appfooter = () => {
  return (
    <div className="footer">
      <div className="author">
        <h2> 
          {' '}
          <a href={authorLink} target="blank">{authorText}</a>
        </h2>
        <h3><a href={authorGitHubLink} target="blank">{authorGitHubText}</a></h3>
      </div>
    </div>
  );
};

export default Appfooter;
