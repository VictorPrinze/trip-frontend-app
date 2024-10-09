import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the axios module
jest.mock('axios');

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Add appropriate assertions based on what should be visible in your App component
    expect(screen.getByText(/trip search/i)).toBeInTheDocument();
  });

  // Add more tests as needed
});