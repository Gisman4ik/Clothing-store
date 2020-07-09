import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="logo">
            </div>
            <ul className="link-list">
                <li className="link-list_home">
                    <Link to="/">Главная</Link>
                </li>
                <li className="link-list_catalog">
                    <Link to="/catalog">Каталог</Link>
                </li>
                <li className="link-list_contacts">
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li className="link-list_other">
                    <Link to="/other">Прочее</Link>
                </li>
            </ul>
            <button className="call-order">Заказать звонок</button>
            <Link className="favorite-link" to="/favorite">Сердечко</Link> 
            <Link className="cart-link" to="/cart">Корзина</Link>
        </nav>
    )
}