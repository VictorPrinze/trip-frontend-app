import React from 'react';
import { render, screen } from '@testing-library/react';
import TripDetails from './TripDetails';

describe('TripDetails', () => {
    const trip = {
        pickup_location: 'A',
        dropoff_location: 'B',
        request_date: '2022-01-01',
        pickup_date: '2022-01-01 10:00',
        dropoff_date: '2022-01-01 10:30',
        distance: 10,
        distance_unit: 'km',
        duration: 30,
        duration_unit: 'min',
        cost: 100,
        cost_unit: 'KES',
        driver_name: 'John Doe',
        car_make: 'Toyota',
        car_model: 'Corolla',
        driver_rating: 4,
        driver_pic: 'driver.png',
        car_pic: 'car.png'
    };

    test('renders trip details correctly', () => {
        render(<TripDetails trip={trip} />);
        
        // Check for title
        expect(screen.getByText(/trip details/i)).toBeInTheDocument();
        
        // Check for pickup location
        const pickupElement = screen.getByText(/pickup location:/i).closest('p');
        expect(pickupElement).toHaveTextContent(`Pickup Location: ${trip.pickup_location}`);
        
        // Check for other important details
        expect(screen.getByText(/dropoff location:/i).closest('p'))
            .toHaveTextContent(`Dropoff Location: ${trip.dropoff_location}`);
        expect(screen.getByText(/trip distance:/i).closest('p'))
            .toHaveTextContent(`Trip Distance: ${trip.distance} ${trip.distance_unit}`);
        expect(screen.getByText(/final price:/i).closest('p'))
            .toHaveTextContent(`Final Price: ${trip.cost} ${trip.cost_unit}`);
    });

    test('renders placeholder for missing data', () => {
        const tripWithMissingData = {
            ...trip,
            pickup_location: undefined,
            driver_name: null
        };
        
        render(<TripDetails trip={tripWithMissingData} />);
        
        expect(screen.getByText(/pickup location:/i).closest('p'))
            .toHaveTextContent('Pickup Location: N/A');
        expect(screen.getByText(/driver:/i).closest('p'))
            .toHaveTextContent('Driver: N/A');
    });
});