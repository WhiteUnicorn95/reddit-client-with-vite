import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header', () => {
    test("h1 'My Reddit Reader' renders", () => {
        render(<Header />); //render header
        const title = screen.getByRole('heading', { name: /My Reddit Reader/i }); // get title
        expect(title).toBeInTheDocument(); //verifies that the title is in the document
    });
});git 