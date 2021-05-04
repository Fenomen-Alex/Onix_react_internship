import React from 'react';
import withTranslation from '../pages/hoc/withTranslation';

// eslint-disable-next-line react/prop-types
const NineLessonText = ({ translation }) => {
  // eslint-disable-next-line react/prop-types
  const { title, text1 } = translation;
  return (
    <div>
      <p>{title}</p>
      <p>{text1}</p>
    </div>
  );
};

export default withTranslation('NineLessonText')(NineLessonText);
