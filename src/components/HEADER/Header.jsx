import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Burger from '/public/header__burger-img.svg'
import BurgerX from '/public/header__burger-imgx.svg'

const Header = () => {
    const [active, setActive] = useState(true);
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__group">
                        <Link onClick={()=>{setActive(prev => !prev)}} to='/' className="header__title">Web<span>Studio</span></Link>
                        <div className={active? "header__link-group":"header__link-group active"}>
                            <NavLink  to='/' className={active ? "header__link" : "header__link active"}
                            >Студия</NavLink>
                            <NavLink  to='/portfoilo' className={active ? "header__link" : "header__link active"}
                            >Портфолио</NavLink>
                            <NavLink  to='/contact' className={active ? "header__link" : "header__link active"}
                            >Контакты</NavLink>
                        </div>
                    </div>
                    <div className={active ? "header__box" : "header__box active"}>
                        <div className={active ? "header__left-box": "header__left-box active"}>
                            <img className='header__img' src="/header-sms-img.svg" alt=""/>
                            <a href="#" className={active ? 'header__box-link1': 'header__box-link1 active'}>info@devstudio.com</a>
                        </div>
                        <div className={active ? "header__right-box": "header__right-box active"}>
                            <img className='header__img' src="/header-smartphone.svg" alt=""/>
                            <a href="#" className={active ? 'header__box-link2': 'header__box-link2 active'}>+38 096 111 11 11</a>
                        </div>
                    </div>
                    <div className={active ? "header__social-box" : "header__social-box active"}>
                        <NavLink to='/' className="header__social-box-link">Instagram</NavLink>
                        <div className="header__vertical-line"></div>
                        <Link to='/' className="header__social-box-link">Twitter</Link>
                        <div className="header__vertical-line"></div>
                        <Link to='/' className="header__social-box-link">Facebook</Link>
                        <div className="header__vertical-line"></div>
                        <Link to='/' className="header__social-box-link">LinkedIn</Link>
                    </div>
                    <img onClick={()=>{setActive(prev => !prev)}} className='header__burger-img' src={active ? Burger : BurgerX} alt=""/>
                </nav>
            </div>
        </header>
    );
};

export default Header;