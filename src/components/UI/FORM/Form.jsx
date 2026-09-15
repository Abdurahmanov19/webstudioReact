import React, {useState} from 'react';
import './Form.css';
const Form = ({active,setActive}) => {
    return (
        <form className={active ? "form active" : 'form' }>
            <div className="form__cleanse">
                <div className="form__cleanse-circle" onClick={() => setActive(prev => !prev)}>
                    <img src="/form__cleanse-img.svg" className='form__cleanse-img' alt=""/>
                </div>
            </div>
            <h3 className="form__title">Оставьте свои данные, мы вам перезвоним</h3>
            <p className="form__text">Имя</p>
            <div className="form__wrapper">
                <input required maxLength='14' type="text" className="form__input"/>
                <img src="/form__img1.svg" alt="" className="form__img"/>
            </div>
            <p className="form__text">Телефон</p>
            <div className="form__wrapper">
                <input required type="number" className="form__input"/>
                <img src="/form__img2.svg" alt="" className="form__img"/>
            </div>
            <p className="form__text">Почта</p>
            <div className="form__wrapper">
                <input required type="email" className="form__input"/>
                <img src="/form__img3.svg" alt="" className="form__img"/>
            </div>
            <p className="form__text">Комментарий</p>
            <textarea required placeholder='Введите текст'/>
            <div className="form__agreement">
                <input  className='form__agreement-checkbox' type="checkbox"/>
                <p className="form__agreement-text">Соглашаюсь с рассылкой и принимаю <a href="#" className='form__agreement-link'>Условия договора</a> </p>
            </div>
            <div className="form__box">
                <button className='form__box-btn'>Отправить</button>
            </div>
        </form>
    );
};

export default Form;