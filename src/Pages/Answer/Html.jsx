import React from 'react';
import { useTranslation } from 'react-i18next';
import html from '../../assets/images/html.png';

const Html = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="html">
      <img className="img-html" src={html} alt="html" />
      <b>{t('answer.html.htmlTitle')}</b>
      {t('answer.html.htmlText')}
    </div>
  );
};

export default Html;
