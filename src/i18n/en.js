/* eslint-disable quote-props,import/prefer-default-export,import/named */
// eslint-disable-next-line import/prefer-default-export

import {
  contentEN,
  cssTextEN,
  cssTitleEN, footerContentEN, gitContentEN,
  htmlTextEN,
  htmlTitleEN, nodeContentEN,
  npmContentEN,
  solutionTitleEN,
  taskEN,
  vscTextEN,
  vscTitleEN,
  secondLessonContentEN, lessonThreeContentEN, switchThemeBtnEN, sixthLessonTitleEN
} from '../Constants/ConstantsEN';

export const en = {
  translations: {
    footer: { ...footerContentEN },
    secondLesson: { ...secondLessonContentEN },
    lessonThree: { ...lessonThreeContentEN },
    switchTheme: switchThemeBtnEN,
    sixthLessonTitle: sixthLessonTitleEN,
    ninthLesson: {
      title: 'Higher-Order Component, HOC ',
      text1: 'A higher-order component (HOC) is an advanced technique in React for reusing component logic. '
        + 'HOCs are not part of the React API, per se. '
        + 'They are a pattern that emerges from React’s compositional nature.'
    },
    content: { ...contentEN },
    task: { ...taskEN },
    answer: {
      solutionTitle: solutionTitleEN,
      vsc: { vscTitle: vscTitleEN, vscText: vscTextEN },
      git: { ...gitContentEN },
      node: { ...nodeContentEN },
      npm: { ...npmContentEN },
      html: { htmlTitle: htmlTitleEN, htmlText: htmlTextEN },
      css: { cssTitle: cssTitleEN, cssText: cssTextEN }
    }
  }
};
