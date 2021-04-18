import React from 'react';
import withTranslation from "../services/withTranslation";

const NineLessonText = ({translation}) => {
    const {title, text1} = translation;
    return (
        <div>
            <p>{title}</p>
            <p>{text1}</p>
        </div>
    );
};

export default withTranslation("NineLessonText")(NineLessonText);