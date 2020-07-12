import React from 'react';
import './blackHeader.css';

export default function BlackHeader () {
    return (
        <div className="black-header">
            <div className ="black-header__left-col">
                <div className="black-header__region">
                    <span className="black-header__region_text">Ваш регион доставки:</span>
                    <select className="black-header__region_select">
                        <option value="Гродно">г.Гродно</option>
                        <option value="Минск">г.Минск</option>
                    </select>
                </div>
                <div className="black-header__currency">
                <span className="black-header__currency_text">Валюта:</span>
                <select className="black-header__currency_select">
                    <option value="USD">USD</option>
                    <option value="BYN">BYN</option>
                </select>
            </div>
            </div>
            <div className ="black-header__right-col">
                <a href="#" className="black-header__account">Аккаунт</a>
                <a href="#" className="black-header__exit">Выйти</a>
            </div>
        </div>
    )
}

