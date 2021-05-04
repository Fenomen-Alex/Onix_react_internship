import React from 'react';
import {
  discuss, discussCss,
  discussGit, discussHtml,
  discussNode,
  discussNPM,
  discussVCM,
  firstTask, firstTaskContinue,
  gitBasics,
  gitCommands, gitHubLink, gitHubLinkText, secondTask, task,
  w3cLink, w3cLinkText
} from '../../Constants/Constants';

const Content = () => {
  return (
    <>
      <b>{discuss}</b>
      <ol>
        <li>
          <span>{discussVCM}</span>
        </li>
        <li>
          <span>{discussGit}</span>
          <ol>
            <li>
              <span>{gitCommands}</span>
            </li>
            <li>
              <span>{gitBasics}</span>
            </li>
          </ol>
        </li>
        <li>
          <span>{discussNode}</span>
        </li>
        <li>
          <span>{discussNPM}</span>
        </li>
        <li>
          <span>{discussHtml}</span>
          <a href={w3cLink}>
            <span>{w3cLinkText}</span>
          </a>
        </li>
        <li>
          <span>{discussCss}</span>
        </li>
      </ol>
      <br />
      <b>{task}</b>
      <span> </span>
      <ol>
        <li>
          <span>{firstTask}</span>
          <a href={gitHubLink}>
            <span>{gitHubLinkText}</span>
          </a>
          <span>{firstTaskContinue}</span>
        </li>
        <li>
          <span>{secondTask}</span>
        </li>
      </ol>
    </>
  );
};

export default Content;
