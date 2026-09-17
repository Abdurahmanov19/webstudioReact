import React, {useState} from 'react';
import './Portfoilo.css';

const projects = [
    {
        id: 1,
        title: "Технокран",
        category: "Веб-сайт",
        image: "/project1.jpg",
        textHover: "Ресурс предлагает комплексные предложения с разным уровнем функционала и сервисов. Все это позволит посетителю получить исчерпывающие сведения  о компании или частном лице."
    },
    {
        id: 2,
        title: "Постер New Orleans vs Golden ",
        category: "Дизайн",
        image: "/project2.jpg",
        textHover: "Яркий спортивный постер посвящен матчу баскетбольных команд New Orleans и Golden State, объединяя фотографии игроков, яркую графику, цвета и атмосферу большого спортивного события."
    },
    {
        id: 3,
        title: "Ресторан Seafood",
        category: "Приложение",
        image: "/project3.jpg",
        textHover: "Логотип ресторана Seafood выполнен в морской стилистике, сочетая типографику, силуэт морского существа и яркую композицию, передающую атмосферу заведения и подчеркивающую его название."
    },
    {
        id: 4,
        title: "Проект Prime",
        category: "Маркетинг",
        image: "/project4.jpg",
        textHover: "Проект Prime представляет продукт с минималистичным визуальным стилем, акцентируя внимание на презентации, узнаваемом образе и привлекательной подаче бренда для современной аудитории."
    },
    {
        id: 5,
        title: "Проект Boxes",
        category: "Приложение",
        image: "/project5.jpg",
        textHover: "Проект Boxes показывает дизайн упаковки с двумя коробками разных размеров, сочетая светлые поверхности, лаконичную типографику и минималистичное оформление для презентации современного продукта."
    },
    {
        id: 6,
        title: "Inspiration has no Borders",
        category: "Веб-сайт",
        image: "/project6.jpg",
        textHover: "Темный веб-сайт Inspiration has no Borders использует контрастный интерфейс, крупную типографику и структурированную подачу информации, создавая цифровой образ и удобную композицию для пользователей."
    },
    {
        id: 7,
        title: "Издание Limited Edition",
        category: "Дизайн",
        image: "/project7.jpg",
        textHover: "Издание Limited Edition демонстрирует журнальный дизайн с фотографиями, крупными заголовками и аккуратной версткой, создавая ощущение яркой печатной продукции и продуманной визуальной подачи."
    },
    {
        id: 8,
        title: "Проект LAB",
        category: "Маркетинг",
        image: "/project8.jpg",
        textHover: "Проект LAB представляет минималистичный дизайн бирки с лаконичной надписью, подвесным элементом и чистой композицией, создавая фирменный образ для современного продукта и бренда."
    },
    {
        id: 9,
        title: "Growing Business",
        category: "Приложение",
        image: "/project9.jpg",
        textHover: "Growing Business показывает презентацию для бизнеса на экране ноутбука, сочетая деловую тематику, крупную типографику, фотографии и структурированную композицию для понятного восприятия современного проекта."
    }
];

const categories = [
    "Все",
    "Веб-сайт",
    "Приложение",
    "Дизайн",
    "Маркетинг",
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Все');

    const filteredProjects =
        activeCategory === "Все"
            ? projects
            : projects.filter(
            (project) => project.category === activeCategory
            );
    return (
        <div className='container'>
            <div className="categories">
                {
                    categories.map((category)=>(
                        <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={activeCategory === category? 'categories__btn active': 'categories__btn'}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>
            <div className="projects">
                {filteredProjects.map((project) => (
                    <div className="project" key={project.id}>
                        <div className="project__hover">
                            <img className='project__img' src={project.image} alt={project.title} />
                            <div className="project__hover-text">{project.textHover}</div>
                        </div>

                        <div className="project__wrapper">
                            <h3 className='project__title'>{project.title}</h3>
                            <p className='project__text'>{project.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;