/* eslint-disable no-console */
import React from 'react';

import '../assets/css/main.css';
import { useTranslation } from 'react-i18next';

const varStr = 'Some string';
const varNum = 123;
const varBool = true;
const varObj = {
  name: 'Alex',
  birthday: '30/11/1991'
};
const varArr = [varStr, varNum, varBool, varObj];
let varUndefined;
const varNaN = NaN;

const Conspect = () => {
  console.log(typeof varStr,
    typeof varNum, 
    typeof varBool, 
    typeof varObj, 
    typeof varArr,
    typeof varUndefined, 
    typeof varNaN,
    varArr);
  if (varStr > varNum) {
    console.log(`${varStr} больше, чем ${varNum}`);
  } else {
    console.log(`${varNum} больше, чем ${varStr}`);
  }

  const { t } = useTranslation('translations');

  return (
    <div className="secondLesson">
      <h1>{t('secondLesson.secondLessonTitle')}</h1>
      <p>
        {t('secondLesson.secondLessonText')}
        <br />
        let varStr = `&#39;` Some string `&#39;`;
        {' '}
        <br />
        let varNum = 123; 
        {' '}
        <br />
        let varBool = true;
        <br />
        let varObj = 
        {' '}
        {'{'}
        <br />
        `&#34;`name`&#34;` : `&#34;`Alex`&#34;`,
        <br />
        `&#34;`birthday`&#34;` : `&#34;`30/11/1991`&#34;`
        <br />
        {'}'}
        ;
        <br />
        let varArr = [varStr, varNum, varBool, varObj];
        <br />
        let varUndefined;
        <br />
        let varNaN = NaN;
        <br />

      </p>
    </div>
  );
};

export default Conspect;
