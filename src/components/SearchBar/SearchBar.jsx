import React from 'react';

export default function SearchBar() {
    return <>
        <input type="search" id="searchTerm" name="searchTerm" maxlength="30" placeholder="I want to search for..."/>
        <button name="search">Search</button>
    </>;
};