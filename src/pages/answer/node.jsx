import React from 'react';
import node from '../../assets/images/node.jpg';
import {
  nodejsTitle, nodeText, nodeTitle, or
} from '../../Constants/Constants';

const Node = () => {
  return (
    <div className="node">
      <img className="img-node" src={node} alt="node" />
      <b>{nodeTitle}</b>
      {or}
      <b>{nodejsTitle}</b>
      {nodeText}
    </div>
  );
};

export default Node;
