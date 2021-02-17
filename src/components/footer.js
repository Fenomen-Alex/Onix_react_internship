import React from 'react';

import '../assets/css/main.css';

const authorLink = 'https://fenomen-alex.github.io/AlexCV/';
const authorText = 'Автор: Александр Фоменко';
const authorGitHubLink = 'https://github.com/Fenomen-Alex/Onix_react_internship';
const authorGitHubText = 'Ссылка на GitHub';
const Appfooter=()=> {
    return(
        <div className="footer">
            <div className="author">
                <h2> <a href={authorLink} target="blank">{authorText}</a>
                </h2>
                <h3><a href={authorGitHubLink} target="blank">{authorGitHubText}</a></h3>
            </div>
        </div>
    )
};

export default Appfooter;