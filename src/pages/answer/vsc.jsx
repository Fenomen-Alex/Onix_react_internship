import React from 'react';
// eslint-disable-next-line import/named
import { vscText, vscTitleRu } from '../../Constants/Constants';

const VCS = () => {
  return (
    <div className="vcs">
      <b>{vscTitleRu}</b>
      {vscText}
    </div>
  );
};

export default VCS;
