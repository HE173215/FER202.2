// src/components/DirectorList.js
import React from 'react';
import { Link } from 'react-router-dom';

function DirectorList({ directors }) {
    return (
        <div>
            <h3>Directors</h3>
            <ul className="ps-3" style={{ listStyleType: 'disc' }}>
                {directors.map(director => (
                    <li key={director.id} className="mb-1">
                        <Link to={`?directorId=${director.id}`} className="text-primary text-decoration-none">
                            {director.fullname}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DirectorList;
