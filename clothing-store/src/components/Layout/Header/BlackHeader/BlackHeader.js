import React from 'react';

export default function BlackHeader () {
    return (
        <div className="black-header">
            <div className="black-header__region">
                <span>Ваш регион доставки:</span>
                <select>
                    <option value="Гродно">Гродно</option>
                    <option value="Минск">Минск</option>
                </select>
            </div>
            <div className="black-header__currency">
                <span>Валюта:</span>
                <select>
                    <option value="USD">USD</option>
                    <option value="BYN">BYN</option>
                </select>
            </div>
            <a href="#" className="black-header__account">Аккаунт</a>
            <a href="#" className="black-header__exit">Выйти</a>
        </div>
    )
}

