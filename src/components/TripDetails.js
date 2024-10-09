// TripDetails.js
import React from 'react';
import './TripDetails.css'; // Import CSS file for styling

function TripDetails({ trip, onGoBack }) {
    return (
        <div className="trip-details">
            <h2 className="details-title">Trip Details</h2>
            <div className="details-section">
                <p><strong>Pickup Location:</strong> {trip.pickup_location || "N/A"}</p>
                <p><strong>Dropoff Location:</strong> {trip.dropoff_location || "N/A"}</p>
                <p><strong>Request Date/Time:</strong> {trip.request_date || "N/A"}</p>
                <p><strong>Trip Start Time:</strong> {trip.pickup_date || "N/A"}</p>
                <p><strong>Trip End Time:</strong> {trip.dropoff_date || "N/A"}</p>
                <p><strong>Trip Distance:</strong> {trip.distance} {trip.distance_unit || "km"}</p>
                <p><strong>Trip Duration:</strong> {trip.duration} {trip.duration_unit || "min"}</p>
                <p><strong>Final Price:</strong> {trip.cost} {trip.cost_unit || "KES"}</p>
                <p><strong>Driver:</strong> {trip.driver_name || "N/A"}</p>
                <p><strong>Car Make & Model:</strong> {trip.car_make} {trip.car_model || "N/A"}</p>
                <p><strong>Driver Rating:</strong> {trip.driver_rating || "N/A"}</p>
            </div>
            <div className="media-section">
                {trip.driver_pic && <img src={trip.driver_pic} alt="Driver" className="media-image" />}
                {trip.car_pic && <img src={trip.car_pic} alt="Car" className="media-image" />}
            </div>
            <button className="back-button" onClick={onGoBack}>Back to Homepage</button> {/* Use the go back function */}
        </div>
    );
}

export default TripDetails;
