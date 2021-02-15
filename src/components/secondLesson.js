import React from "react";

import "../assets/css/main.css";

let varStr = 'Some string';
let varNum = 123;
let varBool = true;
let varObj = {
    "name" : "Alex",
    "birthday" : "30/11/1991"
};
let varArr = [varStr, varNum, varBool, varObj];
let varUndefined;
let varNaN = NaN;



const Conspect = () => {
    console.log(typeof varStr, 
        typeof varNum, 
        typeof varBool, 
        typeof varObj, 
        typeof varArr ,
        typeof varUndefined, 
        typeof varNaN,
        varArr);
    if (varStr > varNum) {
        console.log(varStr +" больше, чем " + varNum)
    } else {
        console.log(varNum +" больше, чем " + varStr)
    };

    return (<div />);
};

export default Conspect;