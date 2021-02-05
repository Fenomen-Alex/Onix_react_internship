import React from "react";
import "../assets/css/main.css";
import git from "../assets/images/git.png";
import node from "../assets/images/node.jpg";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";

const Answer = () => {
  return (
    <div class="wrapper">
      <div class="vcs">
        <b>Система управления версиями</b> (от англ.{" "}
        <span lang="en">Version Control System, VCS</span> или{" "}
        <span lang="en">Revision Control System</span>) — программное
        обеспечение для облегчения работы с изменяющейся информацией. Система
        управления версиями позволяет хранить несколько версий одного и того же
        документа, при необходимости возвращаться к более ранним версиям,
        определять, кто и когда сделал то или иное изменение, и многое другое.
      </div>
      <div class="git">
        <img class="img-git" src={git} alt="git" />
        <strong>GIT</strong> позволяет разработчикам иметь множество совершенно
        независимых веток кода. Создание, удаление и объединение этих веток
        происходит без каких-либо проблем и больших затрат времени. Команды{" "}
        <em>
          <span>checkout, add, commit, pull, push . </span>
        </em>
        <span>
          Команда{" "}
          <strong>
            <em>checkout </em>
          </strong>
          используется для создания, удаления и работы между ветками. Команда{" "}
          <strong>
            <em> add </em>
          </strong>
          и
          <strong>
            <em> commit </em>
          </strong>
          позволяют добавлять файлы в репозиторий, а также вносить изменения в
          существующие файлы. Команда{" "}
          <strong>
            <em>pull </em>
          </strong>
          <strong> </strong>используется для объединения изменений, а{" "}
          <strong>
            <em>push </em>
          </strong>
          позволяет поместить изменения в главную ветку удаленного хранилища
          связанного с рабочим каталогом.{" "}
        </span>
      </div>
      <div class="node">
        <img
          class="img-node"
          src={node}
          alt="node"
        />
        <b>Node</b> или <b>Node.js</b> — программная платформа, основанная на
        движке V8 (транслирующем JavaScript в машинный код), превращающая
        JavaScript из узкоспециализированного языка в язык общего назначения.
        Node.js добавляет возможность JavaScript взаимодействовать с
        устройствами ввода-вывода через свой API, написанный на C++, подключать
        другие внешние библиотеки, написанные на разных языках, обеспечивая
        вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на
        сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на
        Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или
        Electron для Linux, Windows и macOS) и даже программировать
        микроконтроллеры (например, tessel, low.js и espruino). В основе Node.js
        лежит событийно-ориентированное и асинхронное (или реактивное)
        программирование с неблокирующим вводом/выводом
      </div>
      <div class="npm">
        <b>Система управления пакетами</b> — набор программного обеспечения,
        позволяющего управлять процессом установки, удаления, настройки и
        обновления различных компонентов программного обеспечения.
        <br />
        <b>npm</b> — это пакетный менеджер node.js. С его помощью можно
        управлять модулями и зависимостями. Основные команды:
        <br />
        "npm -h" — показывает список всех доступных команд пакетного менеджера.
        <br />
        "npm update npm -g" позволяет обновить версию
        <br />
        "npm install package" — позволяет установить любой пакет по его имени.
        Если при этом к команде добавить префикс "-g" пакет будет установлен
        глобально на весь компьютер.
        <br />
      </div>
      <div class="html">
        <img
          class="img-html"
          src={html}
          alt="html"
        />
        <b>HTML</b> (HyperText Markup Language) - язык разметки гипертекста -
        предназначен для создания Web-страниц. Под гипертекстом в этом случае
        понимается текст, связанный с другими текстами указателями-ссылками.
        HTML представляет собой достаточно простой набор кодов, которые
        описывают структуру документа. HTML позволяет выделить в тексте
        отдельные логические части (заголовки, абзацы, списки и т.д.), поместить
        на Web-страницу подготовленную фотографию или картинку, организовать на
        странице ссылки для связи с другими документами.
      </div>
      <div class="css">
        <img
          class="img-css"
          src={css}
          alt="css"
        />
        <b>CSS</b> (Cascading Style Sheets - каскадные таблицы стилей) это язык
        стилей, определяющий внешний вид документа, написанного с использованием
        языка разметки. HTML может (неправильно) использоваться для оформления
        web-сайтов, но CSS предоставляет гораздо бóльшие возможности и более
        точен и проработан. Например, CSS позволяет управлять отображением
        текста, размерами полей и другими параметрами блочных элементов,
        фоновыми изображениями, позиционированием элементов и т.д. Кроме того,
        использование каскадных таблиц стилей способствует разделению
        представления и содержимого документа. Такое разделение обеспечивает
        большую гибкость и возможность управления его представлением, а также
        уменьшает сложность и повторяемость в структурированном содержимом, что
        значительно упрощает разработку веб-ресурсов.
      </div>
    </div>
  );
};

export default Answer;