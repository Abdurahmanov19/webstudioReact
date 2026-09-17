import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                   <nav className="footer__nav">
                       <div className="footer__box">
                           <h2 className="footer__title">Web<span>Studio</span></h2>
                           <p className="footer__text">г. Киев, пр-т Леси Украинки, 26</p>
                           <a href="#" className='footer__link footer__link-m'>info@example.com</a>
                           <a href="#" className='footer__link'>+38 099 111 11 11</a>
                       </div>
                       <div className="footer__box">
                           <h3 className="footer__subtitle">присоединяйтесь</h3>
                           <div className="footer__wrapper">
                               <div className='footer__content'>
                                   <img src="/footer__instagram.svg" alt="" className="footer__img"/>
                               </div>
                               <div className='footer__content'>
                                   <img src="/footer__twiter.svg" alt="" className="footer__img"/>
                               </div>
                               <div className='footer__content'>
                                   <img src="/footer__facebook.svg" alt="" className="footer__img"/>
                               </div>
                               <div className='footer__content'>
                                   <img src="/footer__linkedin.svg" alt="" className="footer__img"/>
                               </div>
                           </div>
                       </div>
                       <div className="footer__box">
                           <h3 className="footer__subtitle">Подпишитесь на рассылку</h3>
                           <div className="footer__box-form">
                               <input placeholder='E-mail' type="text" className="footer__input"/>
                               <button className="footer__btn">
                                   Подписаться
                                   <img src="/footer__btn-img.svg" alt="" className="footer__btn-img"/>
                               </button>
                           </div>
                       </div>
                   </nav>
            </div>
        </footer>
    );
};

export default Footer;