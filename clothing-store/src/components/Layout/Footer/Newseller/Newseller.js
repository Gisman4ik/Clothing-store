           
import React from 'react';
import { Link } from 'react-router-dom';
import './newseller.css';

export default function Newseller () {
    return (
        <div className="newseller">
            <p className="newseller__headline">Хотите чтобы мы связались с вами?</p>
            <p className="newseller__subheadline">Оставьте свой мобильный телефон и мы вам перезвоним</p>
            <form className="newseller__form">
                <input className="newseller__input" type="text" placeholder="Ваш номер"></input>
            </form>
            <p className="newseller__agreement">Нажимая на кнопку отправить, Вы соглашаетесь на обработку персональных данных в соответствии с <Link to="/policy">условиями</Link> данного сайта.</p>
        </div>
    )
}