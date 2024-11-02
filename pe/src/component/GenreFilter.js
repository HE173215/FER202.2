// src/components/GenreFilter.js
import React from 'react';
import { Link } from 'react-router-dom';

function GenreFilter({ onShowAll }) {
    return (
        <div className="d-flex justify-content-center genre-links border-top border-bottom py-2">
            <Link to="?genre=Comedy" className="me-3 text-primary text-decoration-none">Comedy</Link>
            <Link to="?genre=Action" className="me-3 text-primary text-decoration-none">Action</Link>
            <Link to="?genre=Cartoon" className="me-3 text-primary text-decoration-none">Cartoon</Link>
            <Link to="?genre=Drama" className="text-primary text-decoration-none">Drama</Link>
        </div>
    );
}

export default GenreFilter;
