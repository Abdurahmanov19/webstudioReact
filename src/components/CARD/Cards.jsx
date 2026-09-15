import React from 'react';
import '../../pages/STUDIO/Studio.css'
const socialIcons = [
    {
        img: '/team__instagram.svg',
        id:1
    },
    {
        img: '/team__twitter.svg',
        id:2
    },
    {
        img: '/team__facebook.svg',
        id:3
    },
    {
        img: '/team__linkedin.svg',
        id:4
    }
];

const Cards = ({person, title, text}) => {
    return (
        <div className="team__card">
            <img className='team__img' src={person} alt=""/>
            <h4 className="team__subtitle">{title}</h4>
            <p className="team__text">{text}</p>
            <div className="team__box-icon">
                {socialIcons.map((item)=>(
                    <div className="team__social" key={item.id}>
                        <img src={item.img} alt="" className='team__icon'/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;