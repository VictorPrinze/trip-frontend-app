import React from 'react';
import { render, screen } from '@testing-library/react';
import TripSearchResults from './TripSearchResults';

describe('TripSearchResults', () => {
    const trips = [
        { id: 1, pickup_location: 'A', dropoff_location: 'B', status: 'COMPLETED', pickup_date: '2022-01-01', cost: 100, cost_unit: 'KES', driver_rating: 4 },
        { id: 2, pickup_location: 'C', dropoff_location: 'D', status: 'CANCELED', pickup_date: '2022-01-02', cost: 150, cost_unit: 'KES', driver_rating: 5 },
    ];

    test('renders the trip results', () => {
        render(<TripSearchResults trips={trips} onSelectTrip={() => {}} />);
        expect(screen.getByText(/search results/i)).toBeInTheDocument();
        expect(screen.getAllByText(/pickup:/i).length).toBe(2); // Expecting two instances of "Pickup:"
    });

    test('shows no trips found message when there are no trips', () => {
        render(<TripSearchResults trips={[]} onSelectTrip={() => {}} />);
        expect(screen.getByText(/no trips found/i)).toBeInTheDocument();
    });
});
