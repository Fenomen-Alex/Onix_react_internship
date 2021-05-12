// footer.js
const authorLink = 'https://fenomen-alex.github.io/AlexCV/';
const authorText = 'Автор: Александр Фоменко';
const authorGitHubLink = 'https://github.com/Fenomen-Alex/Onix_react_internship';
const authorGitHubText = 'Ссылка на GitHub';
export const footerContent = {
  authorLink, authorText, authorGitHubLink, authorGitHubText
};

// vsc.jsx
export const vscTitleRu = 'Система управления версиями';
const vscText1 = ' (от англ. Version Control System, VCS или Revision Control System — ';
const vscText2 = 'программное обеспечение для облегчения работы с изменяющейся информацией. ';
const vscText3 = 'Система управления версиями позволяет хранить несколько версий одного и того же документа, ';
const vscText4 = 'при необходимости возвращаться к более ранним версиям, определять, ';
const vscText5 = 'кто и когда сделал то или иное изменение, и многое другое.';
export const vscText = vscText1 + vscText2 + vscText3 + vscText4 + vscText5;

// git.jsx
const gitTitle = 'GIT';
const gitText1 = ' позволяет разработчикам иметь множество совершенно независимых веток кода. ';
const gitText2 = 'Создание, удаление и объединение этих веток происходит без ';
const gitText3 = 'каких-либо проблем и больших затрат времени. Команды';
const gitText = gitText1 + gitText2 + gitText3;
const gitCommandsList = ' checkout, add, commit, pull, push . ';
const gitCommand = 'Команда ';
const commandCheckout = 'checkout ';
const commandCheckoutText = 'используется для создания, удаления и работы между ветками. Команда';
const commandAdd = ' add ';
const and = 'и';
const commandCommit = ' commit ';
const commandsText = 'позволяют добавлять файлы в репозиторий, '
  + 'а также вносить изменения в существующие файлы. Команда';
const commandPull = ' pull ';
const pullText = 'используется для объединения изменений, а';
const commandPush = 'push ';
const pushText = 'позволяет поместить изменения в главную '
  + 'ветку удаленного хранилища связанного с рабочим каталогом.';
export const gitContent = {
  gitTitle,
  gitCommandsList,
  gitText,
  gitCommand,
  commandCheckout,
  commandCheckoutText,
  commandAdd,
  and,
  commandCommit,
  commandsText,
  commandPull,
  pullText,
  commandPush,
  pushText
};

// node.jsx
const nodeTitle = 'Node';
const or = ' или ';
const nodejsTitle = 'Node.js';
const nodeText1 = ' — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), ';
const nodeText2 = 'превращающая JavaScript из узкоспециализированного языка в язык общего назначения. ';
const nodeText3 = 'Node.js добавляет возможность JavaScript взаимодействовать ';
const nodeText4 = 'с устройствами ввода-вывода через свой API, ';
const nodeText5 = 'написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, ';
const nodeText6 = 'обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, ';
const nodeText7 = 'выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js ';
const nodeText8 = 'и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) ';
const nodeText9 = 'и даже программировать микроконтроллеры (например, tessel, low.js и espruino). ';
const nodeText10 = 'В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование ';
const nodeText11 = 'с неблокирующим вводом/выводом';
const nodeText = nodeText1 + nodeText2 + nodeText3 + nodeText4 + nodeText5 + nodeText6
  + nodeText7 + nodeText8 + nodeText9 + nodeText10 + nodeText11;
export const nodeContent = {
  nodeTitle, or, nodejsTitle, nodeText
};

// npm.jsx
const npmTitle = 'Система управления пакетами';
const npmText1 = ' — набор программного обеспечения, позволяющего управлять процессом установки, ';
const npmText2 = 'удаления, настройки и обновления различных компонентов программного обеспечения.';
const npmText = npmText1 + npmText2;
const npmAbout = 'npm';
const npmAboutText1 = ' — это пакетный менеджер node.js. С его помощью можно управлять модулями и зависимостями. ';
const npmAboutText2 = 'Основные команды:';
const npmAboutText = npmAboutText1 + npmAboutText2;
const npmCommList = '"npm -h" — показывает список всех доступных команд пакетного менеджера.';
const npmCommUpdate = '"npm update npm -g" позволяет обновить версию';
const npmCommInstall1 = '"npm install package" — позволяет установить любой пакет по его имени. ';
const npmCommInstall2 = 'Если при этом к команде добавить префикс "-g" ';
const npmCommInstall3 = 'пакет будет установлен глобально на весь компьютер.';
const npmCommInstall = npmCommInstall1 + npmCommInstall2 + npmCommInstall3;
export const npmContent = {
  npmTitle, npmText, npmAbout, npmAboutText, npmCommList, npmCommUpdate, npmCommInstall
};

// html.jsx
export const htmlTitle = 'HTML';
const htmlText1 = ' (HyperText Markup Language) - язык разметки гипертекста - предназначен для создания Web-страниц. ';
const htmlText2 = 'Под гипертекстом в этом случае понимается текст, ';
const htmlText3 = 'связанный с другими текстами указателями-ссылками. ';
const htmlText4 = 'HTML представляет собой достаточно простой набор кодов, которые описывают структуру документа. ';
const htmlText5 = 'HTML позволяет выделить в тексте отдельные логические части (заголовки, абзацы, списки и т.д.), ';
const htmlText6 = 'поместить на Web-страницу подготовленную фотографию или картинку, организовать на странице ссылки ';
const htmlText7 = 'для связи с другими документами.';
export const htmlText = htmlText1 + htmlText2 + htmlText3 + htmlText4 + htmlText5 + htmlText6 + htmlText7;

// css.jsx
export const cssTitle = 'CSS';
const cssText1 = ' (Cascading Style Sheets - каскадные таблицы стилей) это язык стилей, ';
const cssText2 = 'определяющий внешний вид документа, написанного с использованием языка разметки. ';
const cssText3 = 'HTML может (неправильно) использоваться для оформления web-сайтов, ';
const cssText4 = 'но CSS предоставляет гораздо бóльшие возможности и более точен и проработан. ';
const cssText5 = 'Например, CSS позволяет управлять отображением текста,';
const cssText6 = ' размерами полей и другими параметрами блочных элементов, ';
const cssText7 = 'фоновыми изображениями, позиционированием элементов и т.д. ';
const cssText8 = 'Кроме того, использование каскадных таблиц стилей способствует ';
const cssText9 = 'разделению представления и содержимого документа. ';
const cssText10 = 'Такое разделение обеспечивает большую гибкость и возможность управления его представлением, ';
const cssText11 = 'а также уменьшает сложность и повторяемость в структурированном содержимом, ';
const cssText12 = 'что значительно упрощает разработку веб-ресурсов.';
export const cssText = cssText1 + cssText2 + cssText3 + cssText4 + cssText5 + cssText6 + cssText7
  + cssText8 + cssText9 + cssText10 + cssText11 + cssText12;

// answer.js
export const solutionTitle = 'Решение задания:';

// lessonthree.js + hooks.js
export const starWarsOriginal = [
  [1977, 'Звёздные войны. Эпизод IV: Новая надежда'],
  [1980, 'Звёздные войны. Эпизод V: Империя наносит ответный удар'],
  [1983, 'Звёздные войны. Эпизод VI: Возвращение джедая'],
];
export const starWarsPrequel = [
  [1999, 'Звёздные войны. Эпизод I: Скрытая угроза'],
  [2002, 'Звёздные войны. Эпизод II: Атака клонов'],
  [2005, 'Звёздные войны. Эпизод III: Месть ситхов'],
];
export const starWarsSequel = [
  [2015, 'Звёздные войны. Эпизод VII: Пробуждение Силы'],
  [2017, 'Звёздные войны. Эпизод VIII: Последние джедаи'],
  [2019, 'Звёздные войны. Эпизод IX: Скайуокер. Восход'],
];

// sixthlesson.js
export const apiUrl = 'https://itunes.apple.com/search?term=starwars&limit=25';
export const tableHeader = ['Картинка', 'Название трека', 'Исполнитель', 'Цена'];
export const sixthLessonTitle = 'Урок 6';

// theTask.jsx

const entryTask = 'Входное задание в интернатуру';
const theme = 'Тема: ';
const themeItems = 'git, node, npm, основы html css';
const aim = 'Цель: ';
const aimItem1 = 'изучить базовые функции git, node, npm. ';
const aimItem2 = 'Подготовить к дальнейшей работе систему. Определить уровень умения верстки.';
const aimItem = aimItem1 + aimItem2;
export const task = {
  entryTask, theme, themeItems, aim, aimItem
};

// content.jsx
const discuss = 'Обсуждаемый материал: ';
const discussVCM = 'Что такое система контроля версий и зачем она нужна';
const discussGit = 'Git';
const gitCommands = 'checkout, add, commit, pull, push';
const gitBasics = 'Основы ветвления и слияния ';
const discussNode = 'что такое nodejs, зачем он нужен и как устанавливать';
const discussNPM = 'Что такое менеджер пакетов, установка npm';
const discussHtml1 = 'Html: теги, структура html страницы, блочные и строчные элементы, ';
const discussHtml2 = 'списки, таблицы, атрибуты, текст, якоря, ссылки,';
const discussHtml = discussHtml1 + discussHtml2;
const w3cLinkText = 'w3c валидация';
const w3cLink = 'https://valclassator.w3.org/';
const discussCss = 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы';
const contentTask = 'Задание:';
const firstTask = 'установить git, node, npm. Создать аккаунт на ';
const gitHubLink = 'https://github.com/';
const gitHubLinkText = 'https://github.com/';
const firstTaskContinue1 = 'и публичный репозиторий для проекта. ';
const firstTaskContinue2 = 'Клонировать из репозитория проект, ';
const firstTaskContinue3 = 'сделать любые изменения в нем сделать коммит и запушить изменения.';
const firstTaskContinue = firstTaskContinue1 + firstTaskContinue2 + firstTaskContinue3;
const secondTask1 = 'создать простой шаблон страницы для дальнейшей работы. ';
const secondTask2 = 'Страница должна содержать хедер, футер, блок с коротким описанием проекта ';
const secondTask3 = 'и элементы из раздела “Обсуждаемый материал этого урока”(хотя бы по одному примеру). ';
const secondTask4 = 'На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ';
const secondTask5 = 'ссылка на оригинал дизайна. Страница должна проходить валидацию на w3c.';
const secondTask = secondTask1 + secondTask2 + secondTask3 + secondTask4 + secondTask5;
export const content = {
  discuss,
  discussVCM,
  discussGit,
  gitCommands,
  gitBasics,
  discussNode,
  discussNPM,
  discussHtml,
  w3cLinkText,
  w3cLink,
  discussCss,
  contentTask,
  firstTask,
  gitHubLink,
  gitHubLinkText,
  firstTaskContinue,
  secondTask
};

// theme
export const dark = 'dark';
export const light = 'light';

// lessonThree.js
const lessonThreeHooksTitle = 'Урок 3 с использованием хуков';
const btnYears = 'Год';
const btnFilms = 'Фильм';
const btnAdd = 'Добавить';
const btnDelete = 'Удалить';
export const lessonThreeContent = {
  lessonThreeHooksTitle, btnAdd, btnDelete, btnFilms, btnYears
};

// secondLesson.js
const secondLessonTitle = 'Урок 2';
const secondLessonText = 'Дополнительные операции в консоли';
export const secondLessonContent = { secondLessonTitle, secondLessonText };

// btn
export const switchThemeBtn = 'Переключить тему';

// fourthLesson
export const starWarsData = [
  { id: 2, year: 2017, film: 'Звёздные войны. Эпизод VIII: Последние джедаи' },
  { id: 1, year: 2015, film: 'Авёздные войны. Эпизод VII: Пробуждение Силы' },
  { id: 3, year: 2019, film: 'Звёздные войны. Эпизод IX: Скайуокер. Восход' },
];
