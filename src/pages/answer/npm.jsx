import React from 'react';
import {
  // eslint-disable-next-line import/named
  npmAbout, npmAboutText, npmCommInstall, npmCommList, npmCommUpdate,
  npmText, npmTitle
} from '../../Constants/Constants';

const NPM = () => {
  return (
    <div className="npm">
      <b>{npmTitle}</b>
      {npmText}
      <br />
      <b>{npmAbout}</b>
      {npmAboutText}
      <br />
      {npmCommList}
      <br />
      {npmCommUpdate}
      <br />
      {npmCommInstall}
      <br />
    </div>
  );
};

export default NPM;
