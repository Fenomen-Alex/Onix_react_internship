import '../assets/css/main.css';
const Apptask=()=>{
    return (
    <React.Fragment>
        <strong className='solution'>Решение задания:</strong>
        <div className="task">
            <h2><b>Входное задание в интернатуру</b></h2>
            <b>Тема</b><span>: git, node, npm, основы html css</span><br/>
            <b>Цель</b><span>: изучить базовые функции git, node, npm. Подготовить к дальнейшей работе систему. Определить уровень умения верстки.</span><br/>
        </div>
        <div className="main-content">
                <b>Обсуждаемый материал</b><span>: </span>
        <ol>
            <li><span>Что такое система контроля версий и зачем она нужна</span></li>
            <li><span>Git</span>
        <ol>
            <li><span>checkout, add, commit, pull, push</span></li>
            <li><span>Основы ветвления и слияния </span></li>
        </ol>
        </li>
            <li><span>что такое nodejs, зачем он нужен и как устанавливать</span></li>
            <li><span>Что такое менеджер пакетов, установка npm</span></li>
            <li><span>Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, </span><a href="https://valclassator.w3.org/"><span>w3c валидация</span></a></li>
            <li><span>Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы</span></li>
        </ol><br/>
            <b>Задание:</b><span> </span>
        <ol>
            <li><span>установить git, node, npm. Создать аккаунт на </span><a href="https://github.com/"><span>https://github.com/</span></a><span> и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем сделать коммит и запушить изменения.</span></li>
            <li><span>создать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта и элементы из раздела “Обсуждаемый материал этого урока”(хотя бы по одному примеру). На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна. Страница должна проходить валидацию на w3c.</span></li>
        </ol>
        </div>
    </React.Fragment>
    )};
    export default Apptask;