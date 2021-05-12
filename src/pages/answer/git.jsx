import React from 'react';
import { useTranslation } from 'react-i18next';
import git from '../../assets/images/git.png';

const GIT = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="git">
      <img className="img-git" src={git} alt="git" />
      <strong>{t('answer.git.gitTitle')}</strong>
      {t('answer.git.gitText')}
      <em>
        <span>{t('answer.git.gitCommandsList')}</span>
      </em>
      <span>
        {t('answer.git.gitCommand')}
        <strong>
          <em>{t('answer.git.commandCheckout')}</em>
        </strong>
        {t('answer.git.commandCheckoutText')}
        <strong>
          <em>{t('answer.git.commandAdd')}</em>
        </strong>
        {t('answer.git.and')}
        <strong>
          <em>{t('answer.git.commandCommit')}</em>
        </strong>
        {t('answer.git.commandsText')}
        <strong>
          <em>{t('answer.git.commandPull')}</em>
        </strong>
        {t('answer.git.pullText')}
        <strong>
          <em>{t('answer.git.commandPush')}</em>
        </strong>
        {t('answer.git.pushText')}
      </span>
    </div>
  );
};

export default GIT;
