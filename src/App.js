import React, { useState } from 'react';
import TripSearchForm from './components/TripSearchForm';
import TripSearchResults from './components/TripSearchResults';
import TripDetails from './components/TripDetails';
import { searchTrips, getTripDetails } from './services/api';

function App() {
    const [trips, setTrips] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState(null);

    // Search trips
    const handleSearch = (searchParams) => {
        searchTrips(searchParams)
            .then((res) => {
                console.log('API Response:', res.data);
                setTrips(res.data);
            })
            .catch((err) => {
                console.error('Error fetching trips:', err);
            });
    };

    // Select trip
    const handleSelectTrip = (id) => {
        getTripDetails(id)
            .then((res) => {
                setSelectedTrip(res.data);
            })
            .catch((err) => {
                console.error('Error fetching trip details:', err);
            });
    };

    // Function to go back to the homepage
    const handleGoBack = () => {
        setSelectedTrip(null); // Reset the selected trip to show the homepage
    };

    return (
        <div>
            {!selectedTrip ? (
                <>
                    <TripSearchForm onSearch={handleSearch} />
                    {trips.length > 0 ? (
                        <TripSearchResults trips={trips} onSelectTrip={handleSelectTrip} />
                    ) : (
                        <p>No trips found. Try adjusting your search.</p>
                    )}
                </>
            ) : (
                <TripDetails trip={selectedTrip} onGoBack={handleGoBack} /> 
            )}
        </div>
    );
}

export default App;
