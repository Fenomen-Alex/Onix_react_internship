import React from 'react';

import '../assets/css/main.css';
import {
  // eslint-disable-next-line import/named
  footerContent
} from '../Constants/Constants';

const Appfooter = () => {
  return (
    <div className="footer">
      <div className="author">
        <h2> 
          {' '}
          <a href={footerContent.authorLink} target="blank">{footerContent.authorText}</a>
        </h2>
        <h3><a href={footerContent.authorGitHubLink} target="blank">{footerContent.authorGitHubText}</a></h3>
      </div>
    </div>
  );
};

export default Appfooter;
