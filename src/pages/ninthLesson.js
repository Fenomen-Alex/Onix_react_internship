import React, { useState } from 'react';
import { Button } from 'reactstrap';
import NineLessonText from '../components/NineLessonText';

const NinthLesson = () => {
  const [lang, setLang] = useState('ru');
  return (
    <div>
      <Button color="primary" onClick={setLang}>{lang}</Button>
      <NineLessonText lang={lang} />
    </div>
  );
};
export default NinthLesson;
