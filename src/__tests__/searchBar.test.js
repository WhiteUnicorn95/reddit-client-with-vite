import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar', () => {
    
    it('search input renders', () => {
        render(<SearchBar />);
        const searchInput = screen.getByRole('searchbox');
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveAttribute('placeholder', 'I want to search for...'); // Check placeholder (more general) or use your actual placeholder
      });
    
    test("searchbar search button renders", () => {
        render(<SearchBar/>); //renders searchBar
        const searchButton = screen.getByRole('button');
        expect(searchButton).toBeInTheDocument();
        expect(searchButton).toHaveTextContent('Search');
    });
});