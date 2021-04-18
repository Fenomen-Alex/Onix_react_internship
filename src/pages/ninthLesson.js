import React, { useState } from 'react';
import NineLessonText from "../components/NineLessonText";

const NinthLesson = () => {
    const [lang, setLang] = useState("ru");
    return (
        <div>
            <NineLessonText lang={lang}/>
            <button onClick={setLang}>{lang}</button>
        </div>
    )
}
export default NinthLesson