import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';  // Backend URL

// Search trips API call
export const searchTrips = (params) => {
    return axios.get(`${API_BASE_URL}/api/trips`, { params });
};

// Get trip details by ID API call
export const getTripDetails = (id) => {
    console.log(`Fetching trip details for ID: ${id}`);
    return axios.get(`${API_BASE_URL}/api/trips/${id}`);
};
