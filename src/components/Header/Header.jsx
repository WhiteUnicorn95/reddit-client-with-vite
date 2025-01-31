import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <img src="/reddit_orange.png" alt='orange reddit logo' />
            <h1>My Reddit Reader</h1>
            <SearchBar/>
        </header>
    )
};