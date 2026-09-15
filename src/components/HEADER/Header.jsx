import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    const [active, setActive] = useState(true);
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__group">
                        <Link to='/' className="header__title">Web<span>Studio</span></Link>
                        <div className={active? "header__link-group":"header__link-group active"}>
                            <Link to='/' className={active ? "header__link" : "header__link active"}
                            >Студия</Link>
                            <Link to='/portfoilo' className={active ? "header__link" : "header__link active"}
                            >Портфолио</Link>
                            <Link to='/contact' className={active ? "header__link" : "header__link active"}
                            >Контакты</Link>
                        </div>
                    </div>
                    <div className={active ? "header__box" : "header__box active"}>
                        <div className={active ? "header__left-box": "header__left-box active"}>
                            <img className='header__img' src="./../../../public/header-sms-img.svg" alt=""/>
                            <a href="#" className={active ? 'header__box-link1': 'header__box-link1 active'}>info@devstudio.com</a>
                        </div>
                        <div className={active ? "header__right-box": "header__right-box active"}>
                            <img className='header__img' src="./../../../public/header-smartphone.svg" alt=""/>
                            <a href="#" className={active ? 'header__box-link2': 'header__box-link2 active'}>+38 096 111 11 11</a>
                        </div>
                    </div>
                    <div className={active ? "header__social-box" : "header__social-box active"}>
                        <Link to='/' className="header__social-box-link">Instagram</Link>
                        <div className="header__vertical-line"></div>
                        <Link to='/' className="header__social-box-link">Twitter</Link>
                        <div className="header__vertical-line"></div>
                        <Link to='/' className="header__social-box-link">Facebook</Link>
                        <div className="header__vertical-line"></div>
                        <Link to='/' className="header__social-box-link">LinkedIn</Link>
                    </div>
                    <img onClick={()=>{setActive(prev => !prev)}} className='header__burger-img' src="/header__burger-img.svg" alt=""/>
                </nav>
            </div>
        </header>
    );
};

export default Header;