import React from 'react';

import '../assets/css/main.css';

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
  // eslint-disable-next-line no-console
  console.log(typeof varStr,
    typeof varNum, 
    typeof varBool, 
    typeof varObj, 
    typeof varArr,
    typeof varUndefined, 
    typeof varNaN,
    varArr);
  if (varStr > varNum) {
    // eslint-disable-next-line no-console
    console.log(`${varStr} больше, чем ${varNum}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`${varNum} больше, чем ${varStr}`);
  }

  return (
    <div className="secondLesson">
      <h1>Lesson 2</h1>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Go to console to look what's happening))
        <br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        let varStr = 'Some string';
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
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        "name" : "Alex",
        <br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        "birthday" : "30/11/1991"
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
