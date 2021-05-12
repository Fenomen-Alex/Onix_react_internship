/* eslint-disable import/named */
import React from 'react';
import { useTranslation } from 'react-i18next';

const NPM = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="npm">
      <b>{t('answer.npm.npmTitle')}</b>
      {t('answer.npm.npmText')}
      <br />
      <b>{t('answer.npm.npmAbout')}</b>
      {t('answer.npm.npmAboutText')}
      <br />
      {t('answer.npm.npmCommList')}
      <br />
      {t('answer.npm.npmCommUpdate')}
      <br />
      {t('answer.npm.npmCommInstall')}
      <br />
    </div>
  );
};

export default NPM;
