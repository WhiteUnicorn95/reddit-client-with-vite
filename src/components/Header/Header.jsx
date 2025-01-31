import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './header.css';

export default function Header() {
    return (
        <header>
            <img src="/reddit_orange.png" alt='orange reddit logo' width='100px' height='100px' />
            <h1>My Reddit Reader</h1>
            <SearchBar/>
        </header>
    )
};