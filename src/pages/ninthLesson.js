import React, { useState } from 'react';
import { Button } from 'reactstrap';
import NineLessonText from '../components/NineLessonText';

const NinthLesson = () => {
  const [lang, setLang] = useState('ru');
  const handleClick = () => {
    return lang === 'ru' ? setLang('en') : setLang('ru');
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>{lang}</Button>
      <NineLessonText lang={lang} />
    </div>
  );
};
export default NinthLesson;
