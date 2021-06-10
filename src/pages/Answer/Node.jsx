/* eslint-disable import/named */
import React from 'react';
import { useTranslation } from 'react-i18next';
import node from '../../assets/images/node.jpg';

const Node = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="node">
      <img className="img-node" src={node} alt="node" />
      <b>{t('answer.node.nodeTitle')}</b>
      {t('answer.node.or')}
      <b>{t('answer.node.nodejsTitle')}</b>
      {t('answer.node.nodeText')}
    </div>
  );
};

export default Node;
