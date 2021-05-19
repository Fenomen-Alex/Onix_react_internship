import React from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const NineLessonText = () => {
  const { t } = useTranslation('translations');

  return (
    <div>
      <p>{t('ninthLesson.title')}</p>
      <p>{t('ninthLesson.text1')}</p>
    </div>
  );
};

export default NineLessonText;
