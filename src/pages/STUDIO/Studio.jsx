import React, {useState} from 'react';
import './Studio.css';
import Cards from "../../components/CARD/Cards";
import Icon from "../../components/ICON/Icon";
import Form from "../../components/UI/FORM/Form";

const team = [
    {
        img: '/team__img1.jpg',
        title: 'Игорь Демьяненко',
        text: 'Product Designer'
    },
    {
        img: '/team__img2.jpg',
        title: 'Ольга Репина',
        text: 'Frontend Developer'
    },
    {
        img: '/team__img3.jpg',
        title: 'Николай Тарасов',
        text: 'Marketing'
    },
    {
        img: '/team__img4.jpg',
        title: 'Михаил Ермаков',
        text: 'UI Designer'
    }
];
const clients = [
    {img:'/clients__logo1.svg'},
    {img:'/clients__logo2.svg'},
    {img:'/clients__logo3.svg'},
    {img:'/clients__logo4.svg'},
    {img:'/clients__logo5.svg'},
    {img:'/clients__logo6.svg'}
];

const Studio = () => {
    const [active, setActive] = useState(false);
    return (
        <div>
            <section className='hero'>
                <div className="container">
                    <h2 className="hero__title">Эффективные решения <br/>
                        для вашего бизнеса</h2>
                    <button onClick={() => setActive(prev => !prev)} className="hero__btn">Заказать услугу</button>
                </div>
            </section>
            <section className='advantages'>
                <div className="container">
                    <div className="advantages__block">
                        <div className="advantages__box">
                            <div className="advantages__content">
                                <img src="/advantages-antenna.svg" alt="" className="advantages__img"/>
                            </div>
                            <h4 className="advantages__title">Внимание к деталям</h4>
                            <p className="advantages__text">
                                Идейные соображения, а также <br/>
                                начало повседневной работы по <br/>
                                формированию позиции.
                            </p>
                        </div>
                        <div className="advantages__box">
                            <div className="advantages__content">
                                <img src="/advantages-clock.svg" alt="" className="advantages__img"/>
                            </div>
                            <h4 className="advantages__title">Пунктуальность</h4>
                            <p className="advantages__text">
                                Задача организации, в особенности <br/>
                                же рамки и место обучения кадров <br/>
                                влечет за собой.
                            </p>
                        </div>
                        <div className="advantages__box">
                            <div className="advantages__content">
                                <img src="/advantages-diagram.svg" alt="" className="advantages__img"/>
                            </div>
                            <h4 className="advantages__title">Планирование</h4>
                            <p className="advantages__text">
                                Равным образом консультация с <br/>
                                широким активом в значительной <br/>
                                степени обуславливает.
                            </p>
                        </div>
                        <div className="advantages__box">
                            <div className="advantages__content">
                                <img src="/advantages-astronaut.svg" alt="" className="advantages__img"/>
                            </div>
                            <h4 className="advantages__title">Современные технологии</h4>
                            <p className="advantages__text">
                                Значимость этих проблем настолько <br/>
                                очевидна, что реализация плановых <br/>
                                заданий.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service">
                <div className="container">
                    <h2 className="service__title">Чем мы занимаемся</h2>
                    <div className="service__wrapper">
                        <div className="service__box">
                            <img src="/service__img1.png" alt="" className="service__img"/>
                            <div className="service__dark-light">
                                <p className="service__text">Десктопные приложения</p>
                            </div>
                        </div>
                        <div className="service__box">
                            <img src="/service__img2.png" alt="" className="service__img"/>
                            <div className="service__dark-light">
                                <p className="service__text">Мобильные приложения</p>
                            </div>
                        </div>
                        <div className="service__box">
                            <img src="/service__img3.png" alt="" className="service__img"/>
                            <div className="service__dark-light">
                                <p className="service__text">Дизайнерские решения</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section className="team">*/}
            {/*    <div className="container">*/}
            {/*        <h2 className="team__title">Наша команда</h2>*/}
            {/*        <div className="team__wrapper">*/}
            {/*            {team.map((item)=>(*/}
            {/*                <Cards*/}
            {/*                    key={item.title}*/}
            {/*                    person={item.img}*/}
            {/*                    title={item.title}*/}
            {/*                    text={item.text}*/}
            {/*                />*/}
            {/*                ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="clients">*/}
            {/*    <div className="container">*/}
            {/*        <h2 className="clients__title">Постоянные клиенты</h2>*/}
            {/*        <div className="clients__wrapper">*/}
            {/*            {clients.map((item)=>(*/}
            {/*                <div className='clients__box' key={item.img}>*/}
            {/*                    <Icon img={item.img}/>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <Form active={active} setActive={setActive}/>
        </div>
    );
};

export default Studio;