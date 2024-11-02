// src/components/StarList.js
import React from 'react';

function StarList({ stars, starIds, movieId, onRemoveStar }) {
    const getStarName = (id) => {
        const star = stars.find(s => s.id.toString() === id.toString());
        return star ? star.fullname : 'Not Available';
    };

    return (
        <div className="d-flex flex-wrap">
            {starIds.map((starId, index) => (
                <div key={index} className="d-flex align-items-center me-3">
                    <span className="me-1">
                        {index + 1} - {getStarName(starId)} -
                    </span>
                    <button
                        className="btn btn-link btn-sm text-danger p-0"
                        onClick={() => onRemoveStar(movieId, starId)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}

export default StarList;
