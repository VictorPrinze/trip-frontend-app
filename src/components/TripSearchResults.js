import React from 'react';
import './TripSearchResults.css'; // Import the new CSS file

function TripSearchResults({ trips, onSelectTrip }) {
    return (
        <div className="trip-search-results">
            <h2>Search Results ({trips.length})</h2>
            {trips.length === 0 && <p>No trips found. Try adjusting your search criteria.</p>}
            <ul>
                {trips.map(trip => (
                    <li key={trip.id} onClick={() => onSelectTrip(trip.id)}>
                        <div>
                            <strong>Pickup:</strong> {trip.pickup_location} <br />
                            <strong>Dropoff:</strong> {trip.dropoff_location} <br />
                            <strong>Status:</strong> {trip.status} <br />
                            <strong>Trip Start Time:</strong> {trip.pickup_date} <br />
                            <strong>Final Cost:</strong> {trip.cost} {trip.cost_unit} <br />
                            <strong>Rating:</strong> {trip.driver_rating}
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    );
}

export default TripSearchResults;
