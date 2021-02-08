import React from 'react';


import '../assets/css/main.css';

const entryTask = 'Входное задание в интернатуру';
const theme = 'Тема: ';
const themeItems = 'git, node, npm, основы html css';
const aim = 'Цель: ';
const aimItem =
  "изучить базовые функции git, node, npm. Подготовить к дальнейшей работе систему. Определить уровень умения верстки.";


const Apptask=()=>{
  const TheTask = () => {
    return(
      <React.Fragment>
        <h2>
        <b>{entryTask}</b>
        </h2>
        <b>{theme}</b>
        <span>{themeItems}</span>
        <br />
        <b>{aim}</b>
        <span>{aimItem}
        </span>
        <br />
      </React.Fragment>
    );
  };

const discuss = 'Обсуждаемый материал: ';
const discussVCM = 'Что такое система контроля версий и зачем она нужна';
const discussGit = 'Git';
const gitCommands = 'checkout, add, commit, pull, push';
const gitBasics = 'Основы ветвления и слияния ';
const discussNode = 'что такое nodejs, зачем он нужен и как устанавливать';
const discussNPM = 'Что такое менеджер пакетов, установка npm';
const discussHtml =
  "Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки,";
const w3cLinkText = 'w3c валидация';
const w3cLink = 'https://valclassator.w3.org/';
const discussCss = 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы';
const task = 'Задание:';
const firstTask = 'установить git, node, npm. Создать аккаунт на ';
const gitHubLink = 'https://github.com/';
const gitHubLinkText = 'https://github.com/';
const firstTaskContinue =
  'и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем сделать коммит и запушить изменения.';
const secondTask = 'создать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта и элементы из раздела “Обсуждаемый материал этого урока”(хотя бы по одному примеру). На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна. Страница должна проходить валидацию на w3c.'

const Content = () => {
  return (
    <React.Fragment>
      <b>{discuss}</b>
      <ol>
        <li>
          <span>{discussVCM}</span>
        </li>
        <li>
          <span>{discussGit}</span>
          <ol>
            <li>
              <span>{gitCommands}</span>
            </li>
            <li>
              <span>{gitBasics}</span>
            </li>
          </ol>
        </li>
        <li>
          <span>{discussNode}</span>
        </li>
        <li>
          <span>{discussNPM}</span>
        </li>
        <li>
          <span>{discussHtml}</span>
          <a href={w3cLink}>
            <span>{w3cLinkText}</span>
          </a>
        </li>
        <li>
          <span>{discussCss}</span>
        </li>
      </ol>
      <br />
      <b>{task}</b>
      <span> </span>
      <ol>
        <li>
          <span>{firstTask}</span>
          <a href={gitHubLink}>
            <span>{gitHubLinkText}</span>
          </a>
          <span>{firstTaskContinue}</span>
        </li>
        <li>
          <span>{secondTask}</span>
        </li>
      </ol>
    </React.Fragment>
  );
};

    return (
      <React.Fragment>
        <div className="task"><TheTask /></div>
        <div className="main-content"><Content /></div>
      </React.Fragment>
    );};
export default Apptask;