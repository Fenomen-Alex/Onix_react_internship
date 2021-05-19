import React from 'react';
import { useTranslation } from 'react-i18next';

const TheTask = () => {
  const { t } = useTranslation('translations');
  return (
    <>
      <h2>
        <b>{t('task.entryTask')}</b>
      </h2>
      <b>{t('task.theme')}</b>
      <span>{t('task.themeItems')}</span>
      <br />
      <b>{t('task.aim')}</b>
      <span>
        {t('task.aimItem')}
      </span>
      <br />
    </>
  );
};
export default TheTask;
