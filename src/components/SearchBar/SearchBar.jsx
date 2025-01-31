import React from 'react';
import styles from './searchBar.module.css';

export default function SearchBar() {
    return (
        <div id='searchBar'>
            <input type="search" id="searchTerm" name="searchTerm" maxLength="30" placeholder="I want to search for..."/>
            <button name="search">Search</button>
        </div>
    )
};