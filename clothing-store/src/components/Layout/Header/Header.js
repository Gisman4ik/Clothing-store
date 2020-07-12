import React from 'react';
import Navbar from './Navbar/Navbar';
import BlackHeader from './BlackHeader/BlackHeader';
import './header.css';

export default function Header () {
    return (
        <div className="header">
            <BlackHeader/>
            <Navbar/>
        </div>
    )
}