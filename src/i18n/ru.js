/* eslint-disable quote-props,import/prefer-default-export,import/named */
import {
  content,
  cssText,
  cssTitle, footerContent,
  gitContent, htmlText, htmlTitle, lessonThreeContent, nodeContent, npmContent, secondLessonContent, sixthLessonTitle,
  solutionTitle, switchThemeBtn, tableHeader,
  task,
  vscText,
  vscTitleRu
} from '../constants/constants';

export const ru = {
  translations: {
    footer: { ...footerContent },
    secondLesson: { ...secondLessonContent },
    lessonThree: { ...lessonThreeContent },
    sixthLesson: {
      sixthLessonTitle,
      tableHeader: [...tableHeader]
    },
    switchTheme: switchThemeBtn,
    ninthLesson: {
      title: 'Компонент высшего порядка',
      text1:
            'Компонент высшего порядка (Higher-Order Component, HOC) '
            + '— это один из продвинутых способов для повторного использования логики. '
            + 'HOC не являются частью API React, но часто применяются из-за композиционной природы компонентов.',
    },
    content: { ...content },
    task: { ...task },
    answer: {
      solutionTitle,
      vsc: { vscTitle: vscTitleRu, vscText },
      git: { ...gitContent },
      node: { ...nodeContent },
      npm: { ...npmContent },
      html: { htmlTitle, htmlText },
      css: { cssTitle, cssText }
    }
  }
};
