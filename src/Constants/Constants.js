// footer.js
export const authorLink = 'https://fenomen-alex.github.io/AlexCV/';
export const authorText = 'Автор: Александр Фоменко';
export const authorGitHubLink = 'https://github.com/Fenomen-Alex/Onix_react_internship';
export const authorGitHubText = 'Ссылка на GitHub';

// vsc.jsx
export const vscTitleRu = 'Система управления версиями';
const vscText1 = ' (от англ. Version Control System, VCS или Revision Control System — ';
const vscText2 = 'программное обеспечение для облегчения работы с изменяющейся информацией. ';
const vscText3 = 'Система управления версиями позволяет хранить несколько версий одного и того же документа, ';
const vscText4 = 'при необходимости возвращаться к более ранним версиям, определять, ';
const vscText5 = 'кто и когда сделал то или иное изменение, и многое другое.';
export const vscText = vscText1 + vscText2 + vscText3 + vscText4 + vscText5;

// git.jsx
export const gitTitle = 'GIT';
const gitText1 = ' позволяет разработчикам иметь множество совершенно независимых веток кода. ';
const gitText2 = 'Создание, удаление и объединение этих веток происходит без ';
const gitText3 = 'каких-либо проблем и больших затрат времени. Команды';
export const gitText = gitText1 + gitText2 + gitText3;
export const gitCommandsList = [
  ' checkout,',
  ' add,',
  ' commit,',
  ' pull,',
  ' push . ',
];
export const gitCommand = 'Команда';
export const commandCheckout = 'checkout ';
export const commandCheckoutText = 'используется для создания, удаления и работы между ветками. Команда';
export const commandAdd = ' add ';
export const and = 'и';
export const commandCommit = ' commit ';
export const commandsText = 'позволяют добавлять файлы в репозиторий, '
  + 'а также вносить изменения в существующие файлы. Команда';
export const commandPull = ' pull ';
export const pullText = 'используется для объединения изменений, а';
export const commandPush = 'push ';
export const pushText = 'позволяет поместить изменения в главную '
  + 'ветку удаленного хранилища связанного с рабочим каталогом.';

// node.jsx
export const nodeTitle = 'Node';
export const or = ' или ';
export const nodejsTitle = 'Node.js';
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
export const nodeText = nodeText1 + nodeText2 + nodeText3 + nodeText4 + nodeText5 + nodeText6
  + nodeText7 + nodeText8 + nodeText9 + nodeText10 + nodeText11;

// npm.jsx
export const npmTitle = 'Система управления пакетами';
const npmText1 = ' — набор программного обеспечения, позволяющего управлять процессом установки, ';
const npmText2 = 'удаления, настройки и обновления различных компонентов программного обеспечения.';
export const npmText = npmText1 + npmText2;
export const npmAbout = 'npm';
const npmAboutText1 = ' — это пакетный менеджер node.js. С его помощью можно управлять модулями и зависимостями. ';
const npmAboutText2 = 'Основные команды:';
export const npmAboutText = npmAboutText1 + npmAboutText2;
export const npmCommList = '"npm -h" — показывает список всех доступных команд пакетного менеджера.';
export const npmCommUpdate = '"npm update npm -g" позволяет обновить версию';
const npmCommInstall1 = '"npm install package" — позволяет установить любой пакет по его имени. ';
const npmCommInstall2 = 'Если при этом к команде добавить префикс "-g" ';
const npmCommInstall3 = 'пакет будет установлен глобально на весь компьютер.';
export const npmCommInstall = npmCommInstall1 + npmCommInstall2 + npmCommInstall3;

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
export const apiUrl = 'https://itunes.apple.com/search?term=starwars&limit=25&entity=song';
export const tableHeader = ['Image', 'Track Title', 'Artist Name', 'Price'];

// theTask.jsx
export const entryTask = 'Входное задание в интернатуру';
export const theme = 'Тема: ';
export const themeItems = 'git, node, npm, основы html css';
export const aim = 'Цель: ';
const aimItem1 = 'изучить базовые функции git, node, npm. ';
const aimItem2 = 'Подготовить к дальнейшей работе систему. Определить уровень умения верстки.';
export const aimItem = aimItem1 + aimItem2;

// content.jsx
export const discuss = 'Обсуждаемый материал: ';
export const discussVCM = 'Что такое система контроля версий и зачем она нужна';
export const discussGit = 'Git';
export const gitCommands = 'checkout, add, commit, pull, push';
export const gitBasics = 'Основы ветвления и слияния ';
export const discussNode = 'что такое nodejs, зачем он нужен и как устанавливать';
export const discussNPM = 'Что такое менеджер пакетов, установка npm';
const discussHtml1 = 'Html: теги, структура html страницы, блочные и строчные элементы, ';
const discussHtml2 = 'списки, таблицы, атрибуты, текст, якоря, ссылки,';
export const discussHtml = discussHtml1 + discussHtml2;
export const w3cLinkText = 'w3c валидация';
export const w3cLink = 'https://valclassator.w3.org/';
export const discussCss = 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы';
export const task = 'Задание:';
export const firstTask = 'установить git, node, npm. Создать аккаунт на ';
export const gitHubLink = 'https://github.com/';
export const gitHubLinkText = 'https://github.com/';
const firstTaskContinue1 = 'и публичный репозиторий для проекта. ';
const firstTaskContinue2 = 'Клонировать из репозитория проект, ';
const firstTaskContinue3 = 'сделать любые изменения в нем сделать коммит и запушить изменения.';
export const firstTaskContinue = firstTaskContinue1 + firstTaskContinue2 + firstTaskContinue3;
const secondTask1 = 'создать простой шаблон страницы для дальнейшей работы. ';
const secondTask2 = 'Страница должна содержать хедер, футер, блок с коротким описанием проекта ';
const secondTask3 = 'и элементы из раздела “Обсуждаемый материал этого урока”(хотя бы по одному примеру). ';
const secondTask4 = 'На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ';
const secondTask5 = 'ссылка на оригинал дизайна. Страница должна проходить валидацию на w3c.';
export const secondTask = secondTask1 + secondTask2 + secondTask3 + secondTask4 + secondTask5;

// theme
export const dark = 'dark';
export const light = 'light';
