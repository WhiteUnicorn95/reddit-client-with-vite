import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import './header.css';

export default function Header() {
    return (
        <header>
            <h1>My Reddit Reader</h1>
            <SearchBar/>
        </header>
    )
};