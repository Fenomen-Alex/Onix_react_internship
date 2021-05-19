import React from 'react';
import '../../assets/css/main.css';

import { useTranslation } from 'react-i18next';
import VCS from './Vsc';
import Git from './Git';
import Node from './Node';
import Npm from './Npm';
import Html from './Html';
import Css from './Css';

const Answer = () => {
  const { t } = useTranslation('translations');
  return (
    <>
      <strong className="solution">{t('answer.solutionTitle')}</strong>
      <div className="wrapper">
        <VCS />
        <Git />
        <Node />
        <Npm />
        <Html />
        <Css />
      </div>
    </>
  );
};

export default Answer;
