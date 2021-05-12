import React from 'react';
import { useTranslation } from 'react-i18next';
import css from '../../assets/images/css.png';

const CSS = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="css">
      <img className="img-css" src={css} alt="css" />
      <b>{t('answer.css.cssTitle')}</b>
      {t('answer.css.cssText')}
    </div>
  );
};

export default CSS;
