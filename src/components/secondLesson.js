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

    return (
        <div className="secondLesson">
            <h1>Lesson 2</h1>
            <p>
            Go to console to look what's happening))<br />
            let varStr = 'Some string'; <br />
            let varNum = 123; <br />
            let varBool = true;<br />
            let varObj = {"{"}<br />
                "name" : "Alex",<br />
                "birthday" : "30/11/1991"<br />
            {"}"};<br />
            let varArr = [varStr, varNum, varBool, varObj];<br />
            let varUndefined;<br />
            let varNaN = NaN;<br />

            </p>
        </div>
    );
};

export default Conspect;