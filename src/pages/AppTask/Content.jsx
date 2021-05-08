import React from 'react';
// eslint-disable-next-line import/named
import { content } from '../../Constants/Constants';

const Content = () => {
  return (
    <>
      <b>{content.discuss}</b>
      <ol>
        <li>
          <span>{content.discussVCM}</span>
        </li>
        <li>
          <span>{content.discussGit}</span>
          <ol>
            <li>
              <span>{content.gitCommands}</span>
            </li>
            <li>
              <span>{content.gitBasics}</span>
            </li>
          </ol>
        </li>
        <li>
          <span>{content.discussNode}</span>
        </li>
        <li>
          <span>{content.discussNPM}</span>
        </li>
        <li>
          <span>{content.discussHtml}</span>
          <a href={content.w3cLink}>
            <span>{content.w3cLinkText}</span>
          </a>
        </li>
        <li>
          <span>{content.discussCss}</span>
        </li>
      </ol>
      <br />
      <b>{content.contentTask}</b>
      <span> </span>
      <ol>
        <li>
          <span>{content.firstTask}</span>
          <a href={content.gitHubLink}>
            <span>{content.gitHubLinkText}</span>
          </a>
          <span>{content.firstTaskContinue}</span>
        </li>
        <li>
          <span>{content.secondTask}</span>
        </li>
      </ol>
    </>
  );
};

export default Content;
