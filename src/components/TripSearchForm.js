import React, { useState } from 'react';
import './TripSearchForm.css'; // Import CSS file for styling

function TripSearchForm({ onSearch }) {
    const [keyword, setKeyword] = useState('');
    const [includeCancelled, setIncludeCancelled] = useState(false);
    const [minDistance, setMinDistance] = useState('');
    const [maxDistance, setMaxDistance] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [showFilters, setShowFilters] = useState(false); // State to control filter visibility
    const [anyDistance, setAnyDistance] = useState(false); // State for "Any Distance" checkbox
    const [anyTime, setAnyTime] = useState(false); // State for "Any Time" checkbox

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ 
            keyword, 
            includeCancelled, 
            minDistance, 
            maxDistance, 
            startTime, 
            endTime,
            anyDistance,
            anyTime
        });
    };

    const toggleFilters = () => {
        setShowFilters(prev => !prev); // Toggle filter visibility
    };

    return (
        <form className="trip-search-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Trip Search</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                    placeholder="Search by keyword"
                    aria-label="Search by keyword"
                    className="form-input"
                />
                <label className="checkbox-label">
                    <input 
                        type="checkbox" 
                        checked={includeCancelled} 
                        onChange={(e) => setIncludeCancelled(e.target.checked)} 
                        className="checkbox-input"
                    />
                    Include cancelled trips
                </label>
            </div>
            <button type="button" className="toggle-filters" onClick={toggleFilters}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            {showFilters && (
                <div className="filter-options">
                    <div className="filter-group">
                        <label>
                            Distance:
                            <div>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={anyDistance} 
                                        onChange={(e) => setAnyDistance(e.target.checked)} 
                                    />
                                    Any Distance
                                </label>
                                <label>
                                    Min Distance (km):
                                    <input 
                                        type="number" 
                                        value={minDistance} 
                                        onChange={(e) => setMinDistance(e.target.value)} 
                                        placeholder="Min Distance"
                                        className="filter-input"
                                        disabled={anyDistance} // Disable if "Any Distance" is checked
                                    />
                                </label>
                                <label>
                                    Max Distance (km):
                                    <input 
                                        type="number" 
                                        value={maxDistance} 
                                        onChange={(e) => setMaxDistance(e.target.value)} 
                                        placeholder="Max Distance"
                                        className="filter-input"
                                        disabled={anyDistance} // Disable if "Any Distance" is checked
                                    />
                                </label>
                            </div>
                        </label>
                    </div>
                    <div className="filter-group">
                        <label>
                            Time:
                            <div>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={anyTime} 
                                        onChange={(e) => setAnyTime(e.target.checked)} 
                                    />
                                    Any Time
                                </label>
                                <label>
                                    Start Time:
                                    <input 
                                        type="time" 
                                        value={startTime} 
                                        onChange={(e) => setStartTime(e.target.value)} 
                                        className="filter-input"
                                        disabled={anyTime} // Disable if "Any Time" is checked
                                    />
                                </label>
                                <label>
                                    End Time:
                                    <input 
                                        type="time" 
                                        value={endTime} 
                                        onChange={(e) => setEndTime(e.target.value)} 
                                        className="filter-input"
                                        disabled={anyTime} // Disable if "Any Time" is checked
                                    />
                                </label>
                            </div>
                        </label>
                    </div>
                </div>
            )}
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default TripSearchForm;
