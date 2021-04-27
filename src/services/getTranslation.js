const tr = {
  en: {
    NineLessonText: {
      title: 'Higher-Order Component, HOC ',
      text1: 'A higher-order component (HOC) is an advanced technique in React for reusing component logic. '
                + 'HOCs are not part of the React API, per se. '
                + 'They are a pattern that emerges from React’s compositional nature.'
    }
  },
  ru: {
    NineLessonText: {
      title: 'Компонент высшего порядка',
      text1: 'Компонент высшего порядка (Higher-Order Component, HOC) '
                + '— это один из продвинутых способов для повторного использования логики. '
                + 'HOC не являются частью API React, но часто применяются из-за композиционной природы компонентов.',
    }
  }
};
const getTranslation = (language, name) => {
  return tr[language][name];
};
export default getTranslation;
