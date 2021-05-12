// footer.js
const authorLink = 'https://fenomen-alex.github.io/AlexCV/';
const authorText = 'Author: Alex Fomenko';
const authorGitHubLink = 'https://github.com/Fenomen-Alex/Onix_react_internship';
const authorGitHubText = 'Link to GitHub';
export const footerContentEN = {
  authorLink, authorText, authorGitHubLink, authorGitHubText
};

// vsc.jsx
export const vscTitleEN = 'Version Control System - ';
const vscText2 = 'software to facilitate work with changing information. ';
const vscText3 = 'The version control system allows you to store multiple versions of the same document, ';
const vscText4 = 'revert to earlier versions if necessary, determine ';
const vscText5 = 'who and when made this or that change, and much more.';
export const vscTextEN = vscText2 + vscText3 + vscText4 + vscText5;

// git.jsx
const gitTitle = 'GIT ';
const gitText1 = 'allows developers to have many completely independent branches of code. ';
const gitText2 = 'Creation, deletion and merging of these branches happens';
const gitText3 = ' without any problems and a lot of time. Commands';
const gitText = gitText1 + gitText2 + gitText3;
const gitCommandsList = ' checkout, add, commit, pull, push . ';
const gitCommand = 'Command ';
const commandCheckout = 'checkout ';
const commandCheckoutText = 'used to create, delete and work between branches. ';
const commandAdd = 'Command add ';
const and = 'and';
const commandCommit = ' commit ';
const commandsText = 'allow you to add files to the repository as well as make changes to existing files. ';
const commandPull = 'Command pull ';
const pullText = 'is used to merge changes and ';
const commandPush = 'push ';
const pushText = 'allows you to push changes to the master '
  + 'branch of the remote repository linked to the working directory.';
export const gitContentEN = {
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
const or = ' or ';
const nodejsTitle = 'Node.js';
const nodeText1 = ' — software platform based on the V8 engine (translating JavaScript into machine code), ';
const nodeText2 = 'transforming JavaScript from a highly specialized language into a general-purpose language. ';
const nodeText3 = 'Node.js adds JavaScript ability to interact ';
const nodeText4 = 'with I / O devices through its API, ';
const nodeText5 = 'written in C ++, connect other external libraries written in different languages, ';
const nodeText6 = 'providing calls to them from JavaScript code. Node.js is mainly used on the server, ';
const nodeText7 = 'acting as a web server, but it is possible to develop in Node.js ';
const nodeText8 = 'also desktop window applications (using NW.js, AppJS or Electron for Linux, Windows and macOS) ';
const nodeText9 = 'and even program microcontrollers (like tessel, low.js and espruino). ';
const nodeText10 = 'Node.js is based on event-driven and asynchronous (or reactive) programming. ';
const nodeText11 = 'with non-blocking I / O';
const nodeText = nodeText1 + nodeText2 + nodeText3 + nodeText4 + nodeText5 + nodeText6
  + nodeText7 + nodeText8 + nodeText9 + nodeText10 + nodeText11;
export const nodeContentEN = {
  nodeTitle, or, nodejsTitle, nodeText
};

// npm.jsx
const npmTitle = 'Package management system';
const npmText1 = ' — a set of software that allows you to manage the installation process, ';
const npmText2 = 'removal, customization and updating of various software components.';
const npmText = npmText1 + npmText2;
const npmAbout = 'npm';
const npmAboutText1 = ' — it is the node.js package manager. It can be used to manage modules and dependencies. ';
const npmAboutText2 = 'Main commands:';
const npmAboutText = npmAboutText1 + npmAboutText2;
const npmCommList = '"npm -h" — shows a list of all available package manager commands.';
const npmCommUpdate = '"npm update npm -g" allows to update version';
const npmCommInstall1 = '"npm install package" — allows to install any package by name. ';
const npmCommInstall2 = 'If add the prefix "-g" to the command ';
const npmCommInstall3 = 'the package will be installed globally on the entire computer.';
const npmCommInstall = npmCommInstall1 + npmCommInstall2 + npmCommInstall3;
export const npmContentEN = {
  npmTitle, npmText, npmAbout, npmAboutText, npmCommList, npmCommUpdate, npmCommInstall
};

// html.jsx
export const htmlTitleEN = 'HTML';
const htmlText1 = ' (HyperText Markup Language) - designed for creating Web pages. ';
const htmlText2 = 'In this case, hypertext means text ';
const htmlText3 = 'linked to other texts by reference pointers. ';
const htmlText4 = 'HTML is a fairly simple set of codes that describe the structure of a document. ';
const htmlText5 = 'HTML allows you to highlight separate logical parts in the text (headings,paragraphs,lists, etc.), ';
const htmlText6 = 'place a prepared photo or picture on the web page, organize links on the page ';
const htmlText7 = 'to link with other documents.';
export const htmlTextEN = htmlText1 + htmlText2 + htmlText3 + htmlText4 + htmlText5 + htmlText6 + htmlText7;

// css.jsx
export const cssTitleEN = 'CSS';
const cssText1 = ' (Cascading Style Sheets) it`s a style language, ';
const cssText2 = 'defining the appearance of a document written using a markup language. ';
const cssText3 = 'HTML can (incorrectly) be used to design websites, ';
const cssText4 = 'but CSS is much more powerful and more precise and refined. ';
const cssText5 = 'For example, CSS allows you to control the display of text,';
const cssText6 = ' sizes of fields and other parameters of block elements, ';
const cssText7 = 'background images, positioning elements, etc. ';
const cssText8 = 'In addition, the use of cascading style sheets contributes to ';
const cssText9 = 'separation of presentation and content of the document. ';
const cssText10 = 'This separation provides more flexibility and control over its presentation, ';
const cssText11 = 'and also reduces complexity and repetition in structured content, ';
const cssText12 = 'which greatly simplifies the development of web resources.';
export const cssTextEN = cssText1 + cssText2 + cssText3 + cssText4 + cssText5 + cssText6 + cssText7
  + cssText8 + cssText9 + cssText10 + cssText11 + cssText12;

// answer.js
export const solutionTitleEN = 'Solving the task:';

// lessonthree.js + hooks.js
export const starWarsOriginalEN = [
  [1977, 'Star Wars. Episode IV: New hope'],
  [1980, 'Star Wars. Episode V: Empire strikes back'],
  [1983, 'Star Wars. Episode VI: Return of the Jedi'],
];
export const starWarsPrequelEN = [
  [1999, 'Star Wars. Episode I: Phantom menace'],
  [2002, 'Star Wars. Episode II: Attack of the Clones'],
  [2005, 'Star Wars. Episode III: Revenge of the Sith'],
];
export const starWarsSequelEN = [
  [2015, 'Star Wars. Episode VII: The Force Awakens'],
  [2017, 'Star Wars. Episode VIII: The Last Jedi'],
  [2019, 'Star Wars. Episode IX: The Rise of Skywalker'],
];

// sixthlesson.js
export const apiUrl = 'https://itunes.apple.com/search?term=starwars&limit=25&entity=song';
export const tableHeaderEN = ['Image', 'Track Title', 'Artist Name', 'Price'];
export const sixthLessonTitleEN = 'Урок 6';

// theTask.jsx

const entryTask = 'Entry task to internation';
const theme = 'Theme: ';
const themeItems = 'git, node, npm, html-css basics';
const aim = 'Aim: ';
const aimItem1 = 'Learn basic functions git, node, npm. ';
const aimItem2 = 'Prepare the system for further work. Determine the level of layout skill.';
const aimItem = aimItem1 + aimItem2;
export const taskEN = {
  entryTask, theme, themeItems, aim, aimItem
};

// content.jsx
const discuss = 'Discussed material: ';
const discussVCM = 'What is a version control system and why is it needed';
const discussGit = 'Git';
const gitCommands = 'checkout, add, commit, pull, push';
const gitBasics = 'Branching and merging basics ';
const discussNode = 'what is nodejs, why is it needed and how to install it';
const discussNPM = 'What is package manager, installing npm';
const discussHtml1 = 'Html: tags, structure of html page, block and inline elements, ';
const discussHtml2 = 'lists, tables, attributes, text, anchors, links,';
const discussHtml = discussHtml1 + discussHtml2;
const w3cLinkText = 'w3c validation';
const w3cLink = 'https://valclassator.w3.org/';
const discussCss = 'Css: styles, classes, identifiers, selectors, pseudo-classes, pseudo-elements';
const contentTask = 'Task:';
const firstTask = 'install git, node, npm. Create an account on ';
const gitHubLink = 'https://github.com/';
const gitHubLinkText = 'https://github.com/';
const firstTaskContinue1 = 'and a public repository for the project. ';
const firstTaskContinue2 = 'Clone a project from the repository, ';
const firstTaskContinue3 = 'make any changes to it, commit and push the changes.';
const firstTaskContinue = firstTaskContinue1 + firstTaskContinue2 + firstTaskContinue3;
const secondTask1 = 'create a simple page template for further work. ';
const secondTask2 = 'The page must contain a header, footer, a block with a short description of the project and ';
const secondTask3 = 'items from the “Material under discussion in this lesson” section (at least one example each). ';
const secondTask4 = 'The page should contain: the author\'s name and surname, a link to the github account, ';
const secondTask5 = 'link to the original design. The page must be validated by w3c.';
const secondTask = secondTask1 + secondTask2 + secondTask3 + secondTask4 + secondTask5;
export const contentEN = {
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

// lessonThree.js
const lessonThreeHooksTitle = 'Lesson 3 Using Hooks';
const btnYears = 'Year';
const btnFilms = 'Film';
const btnAdd = 'Add';
const btnDelete = 'Delete';
export const lessonThreeContentEN = {
  lessonThreeHooksTitle, btnAdd, btnDelete, btnFilms, btnYears
};

// secondLesson.js
const secondLessonTitle = 'Lesson 2';
const secondLessonText = 'Go to console to look what\'s happening))';
export const secondLessonContentEN = { secondLessonTitle, secondLessonText };

// btn
export const switchThemeBtnEN = 'Switch theme';
