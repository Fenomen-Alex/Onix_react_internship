import React from 'react';
// eslint-disable-next-line import/named
import { useTranslation } from 'react-i18next';

const VCS = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="vcs">
      <b>{t('answer.vsc.vscTitle')}</b>
      {t('answer.vsc.vscText')}
    </div>
  );
};

export default VCS;
