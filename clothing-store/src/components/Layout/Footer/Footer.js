import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <div className="footer">
            <div>
                <div className="logo"></div>
                <div className="footer-links">
                    <ul className="footer-links__main">
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/favorite">Избранное</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                    <ul className="footer-links__info">
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/delivery">Доставка</Link></li>
                        <li><Link to="/policy">Политика конфиденциальности</Link></li>
                    </ul>
                </div>
                <div className="social-links"></div>
            </div>
            <div className="newseller">
                <p>Хотите чтобы мы связались с вами?</p>
                <p>Оставьте свой мобильный телефон и мы вам перезвоним</p>
                <form>
                    <input type="text"></input>
                </form>
                <p>Нажимая на кнопку отправить, Вы соглашаетесь на обработку персональных данных в соответствии с <Link to="/policy">условиями</Link> данного сайта.</p>
            </div>
        </div>
    )
}