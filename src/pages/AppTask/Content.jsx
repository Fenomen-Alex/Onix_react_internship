import React from 'react';
// eslint-disable-next-line import/named
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation('translations');
  return (
    <>
      <b>{t('content.discuss')}</b>
      <ol>
        <li>
          <span>{t('content.discussVCM')}</span>
        </li>
        <li>
          <span>{t('content.discussGit')}</span>
          <ol>
            <li>
              <span>{t('content.gitCommands')}</span>
            </li>
            <li>
              <span>{t('content.gitBasics')}</span>
            </li>
          </ol>
        </li>
        <li>
          <span>{t('content.discussNode')}</span>
        </li>
        <li>
          <span>{t('content.discussNPM')}</span>
        </li>
        <li>
          <span>{t('content.discussHtml')}</span>
          <a href={t('content.w3cLink')}>
            <span>{t('content.w3cLinkText')}</span>
          </a>
        </li>
        <li>
          <span>{t('content.discussCss')}</span>
        </li>
      </ol>
      <br />
      <b>{t('content.contentTask')}</b>
      <span> </span>
      <ol>
        <li>
          <span>{t('content.firstTask')}</span>
          <a href={t('content.gitHubLink')}>
            <span>{t('content.gitHubLinkText')}</span>
          </a>
          <span>{t('content.firstTaskContinue')}</span>
        </li>
        <li>
          <span>{t('content.secondTask')}</span>
        </li>
      </ol>
    </>
  );
};

export default Content;
