import React from 'react';
import '../../assets/css/main.css';

import VCS from './vsc';
import GIT from './git';
import {
  solutionTitle
} from '../../Constants/Constants';
import Node from './node';
import NPM from './npm';
import HTML from './html';
import CSS from './css';

const Answer = () => {
  return (
    <>
      <strong className="solution">{solutionTitle}</strong>
      <div className="wrapper">
        <VCS />
        <GIT />
        <Node />
        <NPM />
        <HTML />
        <CSS />
      </div>
    </>
  );
};

export default Answer;
