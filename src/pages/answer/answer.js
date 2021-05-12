import React from 'react';
import '../../assets/css/main.css';

import { useTranslation } from 'react-i18next';
import VCS from './vsc';
import GIT from './git';
import Node from './node';
import NPM from './npm';
import HTML from './html';
import CSS from './css';

const Answer = () => {
  const { t } = useTranslation('translations');
  return (
    <>
      <strong className="solution">{t('answer.solutionTitle')}</strong>
      <div className="wrapper">
        <VCS />
        <GIT />
        <Node />
        <NPM />
        <HTML />
        <CSS />
      </div>
    </>
  );
};

export default Answer;
