import React from 'react';
import { Link } from 'react-router-dom';
import Newseller from './Newseller/Newseller';
import './footer.css';

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <span>dresses.</span>
                </div>
                <div className="footer-links">
                    <ul className="footer-links__main">
                        <li className="footer-links__main_item"><Link to="/catalog">Каталог</Link></li>
                        <li className="footer-links__main_item"><Link to="/favorite">Избранное</Link></li>
                        <li className="footer-links__main_item"><Link to="/contacts">Контакты</Link></li>
                    </ul>
                    <ul className="footer-links__info">
                        <li className="footer-links__info_item"><Link to="/about">О нас</Link></li>
                        <li className="footer-links__info_item"><Link to="/delivery">Доставка</Link></li>
                        <li className="footer-links__info_item"><Link to="/policy">Политика конфиденциальности</Link></li>
                    </ul>
                </div>
                <div className="social-links"></div>
            </div>
            <Newseller/>
        </div>
    )
}