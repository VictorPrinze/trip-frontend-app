import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TripSearchForm from './TripSearchForm';

describe('TripSearchForm', () => {
    test('renders the search form', () => {
        render(<TripSearchForm onSearch={() => {}} />);
        expect(screen.getByPlaceholderText(/search by keyword/i)).toBeInTheDocument();
    });

    test('allows the user to type a keyword', () => {
        render(<TripSearchForm onSearch={() => {}} />);
        const input = screen.getByPlaceholderText(/search by keyword/i);
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('test');
    });

    test('calls onSearch with correct parameters when submitted', () => {
        const mockOnSearch = jest.fn();
        render(<TripSearchForm onSearch={mockOnSearch} />);
        const input = screen.getByPlaceholderText(/search by keyword/i);
        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.click(screen.getByRole('button', { name: /search/i })); // Specify the button role
        expect(mockOnSearch).toHaveBeenCalledWith(expect.objectContaining({ keyword: 'test' }));
    });
});
