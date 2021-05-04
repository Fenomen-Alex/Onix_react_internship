import React from 'react';
import git from '../../assets/images/git.png';
import {
  and,
  commandAdd,
  commandCheckout,
  commandCheckoutText, commandCommit, commandPull, commandPush, commandsText,
  gitCommand,
  gitCommandsList,
  gitText,
  gitTitle, pullText, pushText
} from '../../Constants/Constants';

const GIT = () => {
  return (
    <div className="git">
      <img className="img-git" src={git} alt="git" />
      <strong>{gitTitle}</strong>
      {gitText}
      <em>
        <span>{gitCommandsList}</span>
      </em>
      <span>
        {gitCommand}
        <strong>
          <em>{commandCheckout}</em>
        </strong>
        {commandCheckoutText}
        <strong>
          <em>{commandAdd}</em>
        </strong>
        {and}
        <strong>
          <em>{commandCommit}</em>
        </strong>
        {commandsText}
        <strong>
          <em>{commandPull}</em>
        </strong>
        {pullText}
        <strong>
          <em>{commandPush}</em>
        </strong>
        {pushText}
      </span>
    </div>
  );
};

export default GIT;
