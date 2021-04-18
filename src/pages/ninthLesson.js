import React, { useState } from 'react';
import NineLessonText from "../components/NineLessonText";
import {Button} from "reactstrap";

const NinthLesson = () => {
    const [lang, setLang] = useState("ru");
    return (
        <div>
            <Button color="primary" onClick={setLang}>{lang}</Button>
            <NineLessonText lang={lang}/>
        </div>
    )
}
export default NinthLesson