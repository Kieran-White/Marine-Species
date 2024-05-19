import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

global.fetch = jest.fn();

describe('NavBar component', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const homeLink = screen.getByText(/home/i);
    const oceanMapLink = screen.getByText(/oceanmap/i);
    const donationsLink = screen.getByText(/donations/i);
    const articlesLink = screen.getByText(/articles/i);

    expect(homeLink).toBeTruthy();
    expect(oceanMapLink).toBeTruthy();
    expect(donationsLink).toBeTruthy();
    expect(articlesLink).toBeTruthy();
  });

  test('does not fetch search results when search input is empty', async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: '' } });


    // Ensure fetch is not called
    expect(fetch).not.toHaveBeenCalled();
  });
});
