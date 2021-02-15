import React from "react";
import "../assets/css/main.css";
import git from "../assets/images/git.png";
import node from "../assets/images/node.jpg";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";

const solutionTitle = "Решение задания:";

const vscTitleRu = "Система управления версиями";
const vscText =
  " (от англ. Version Control System, VCS или Revision Control System — программное обеспечение для облегчения работы с изменяющейся информацией. Система управления версиями позволяет хранить несколько версий одного и того же документа, при необходимости возвращаться к более ранним версиям, определять, кто и когда сделал то или иное изменение, и многое другое.";
const VCS = () => {
  return (
    <div className="vcs">
      <b>{vscTitleRu}</b>
      {vscText}
    </div>
  );
};

const gitTitle = 'GIT';
const gitText = ' позволяет разработчикам иметь множество совершенно независимых веток кода. Создание, удаление и объединение этих веток происходит без каких-либо проблем и больших затрат времени. Команды';
const gitCommandsList = [" checkout,"," add,"," commit,"," pull,"," push . "];
const gitCommand = 'Команда';
const commandCheckout = 'checkout ';
const commandCheckoutText = 'используется для создания, удаления и работы между ветками. Команда';
const commandAdd = ' add ';
const and = 'и';
const commandCommit = ' commit ';
const commandsText = 'позволяют добавлять файлы в репозиторий, а также вносить изменения в существующие файлы. Команда';
const commandPull = ' pull ';
const pullText = 'используется для объединения изменений, а';
const commandPush = 'push ';
const pushText = 'позволяет поместить изменения в главную ветку удаленного хранилища связанного с рабочим каталогом.';
const GIT = () => {
  return (
    <div className="git">
      <img className="img-git" src={git} alt="git" />
      <strong>{gitTitle}</strong>{gitText}
      <em>
        <span>{gitCommandsList}</span>
      </em>
      <span>
        {gitCommand}
        <strong>
          <em>{commandCheckout}</em>
        </strong>{commandCheckoutText}
        <strong>
          <em>{commandAdd}</em>
        </strong>
        {and}
        <strong>
          <em>{commandCommit}</em>
        </strong>
        {commandsText}
        <strong>
          <em>{commandPull}</em>
        </strong>
        {pullText}
        <strong>
          <em>{commandPush}</em>
        </strong>
        {pushText}
      </span>
    </div>
  );
};

const nodeTitle = 'Node';
const or = ' или ';
const nodejsTitle = 'Node.js';
const nodeText = ' — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать микроконтроллеры (например, tessel, low.js и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом';
const Node = () => {
  return(
    <div className="node">
          <img className="img-node" src={node} alt="node" />
          <b>{nodeTitle}</b>{or}<b>{nodejsTitle}</b>{nodeText}
        </div>
  );
};

const npmTitle = 'Система управления пакетами';
const npmText = ' — набор программного обеспечения, позволяющего управлять процессом установки, удаления, настройки и обновления различных компонентов программного обеспечения.';
const npmAbout = 'npm';
const npmAboutText = ' — это пакетный менеджер node.js. С его помощью можно управлять модулями и зависимостями. Основные команды:';
const npmCommList = '"npm -h" — показывает список всех доступных команд пакетного менеджера.';
const npmCommUpdate = '"npm update npm -g" позволяет обновить версию';
const npmCommInstall = '"npm install package" — позволяет установить любой пакет по его имени. Если при этом к команде добавить префикс "-g" пакет будет установлен глобально на весь компьютер.';
const NPM = () => {
  return(
    <div className="npm">
          <b>{npmTitle}</b>{npmText}
          <br />
          <b>{npmAbout}</b>{npmAboutText}
          <br />
          {npmCommList}
          <br />
          {npmCommUpdate}
          <br />
          {npmCommInstall}
          <br />
        </div>
  );
};
const htmlTitle = 'HTML';
const htmlText = ' (HyperText Markup Language) - язык разметки гипертекста - предназначен для создания Web-страниц. Под гипертекстом в этом случае понимается текст, связанный с другими текстами указателями-ссылками. HTML представляет собой достаточно простой набор кодов, которые описывают структуру документа. HTML позволяет выделить в тексте отдельные логические части (заголовки, абзацы, списки и т.д.), поместить на Web-страницу подготовленную фотографию или картинку, организовать на странице ссылки для связи с другими документами.';
const HTML = () => {
  return (
    <div className="html">
      <img className="img-html" src={html} alt="html" />
      <b>{htmlTitle}</b>{htmlText}
    </div>
  );
};

const cssTitle = 'CSS';
const cssText = ' (Cascading Style Sheets - каскадные таблицы стилей) это язык стилей, определяющий внешний вид документа, написанного с использованием языка разметки. HTML может (неправильно) использоваться для оформления web-сайтов, но CSS предоставляет гораздо бóльшие возможности и более точен и проработан. Например, CSS позволяет управлять отображением текста, размерами полей и другими параметрами блочных элементов, фоновыми изображениями, позиционированием элементов и т.д. Кроме того, использование каскадных таблиц стилей способствует разделению представления и содержимого документа. Такое разделение обеспечивает большую гибкость и возможность управления его представлением, а также уменьшает сложность и повторяемость в структурированном содержимом, что значительно упрощает разработку веб-ресурсов.';
const CSS = () => {
  return (
    <div className="css">
          <img className="img-css" src={css} alt="css" />
          <b>{cssTitle}</b>{cssText}
        </div>
  );
};

const Answer = () => {
  return (
    <React.Fragment>
      <strong className="solution">{solutionTitle}</strong>
      <div className="wrapper">
        <VCS />
        <GIT />
        <Node />
        <NPM />
        <HTML />
        <CSS />        
      </div>
    </React.Fragment>
  );
};

export default Answer;
