import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../../Button/Button';
import './navbar.css';
export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar__left-col">
                <div className="navbar__logo">
                    <span>dresses.</span>
                </div>
                <ul className="navbar__link-list">
                    <li className="navbar__list-item navbar__home">
                        <Link to="/">Главная</Link>
                    </li>
                    <li className="navbar__list-item navbar__catalog">
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li className="navbar__list-item navbar__contacts">
                        <Link to="/contacts">Контакты</Link>
                    </li>
                    <li className="navbar__list-item navbar__other">
                        <Link to="/other">Прочее</Link>
                    </li>
                </ul>
                <button className="navbar__call-order">Заказать звонок</button>
            </div>
            <div className="navbar__right-col">
                <Link className="navbar__favorite-link" to="/favorite">Сердечко</Link> 
                <Link className="navbar__cart-link" to="/cart">Корзина</Link>
            </div>
        </nav>
    )
}