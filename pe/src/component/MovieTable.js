// src/components/MovieTable.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarList from './StarList';

function MovieTable({ movies, producers, directors, stars, onRemoveStar, onShowAll }) {
    // Enrich movies with producer and director names and format release date
    const enrichedMovies = movies.map(movie => {
        const director = directors.find(d => d.id.toString() === movie.director.toString());
        const producer = producers.find(p => p.id.toString() === movie.producer.toString());

        // Format release date to dd/mm/yyyy
        const releaseDate = new Date(movie.release);
        const formattedDate = `${releaseDate.getDate().toString().padStart(2, '0')}/${(releaseDate.getMonth() + 1).toString().padStart(2, '0')}/${releaseDate.getFullYear()}`;

        return {
            ...movie,
            directorName: director ? director.fullname : 'Not Available',
            producerName: producer ? producer.name : 'Unknown',
            formattedReleaseDate: formattedDate
        };
    });

    return (
        <>
            <Link to="?" onClick={onShowAll} className="btn btn-link mb-3">Show all movies</Link>
            <table className="table table-bordered">
                <thead className="thead-light">
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Release</th>
                    <th>Description</th>
                    <th>Producer</th>
                    <th>Director</th>
                    <th>Genres</th>
                    <th>Stars</th>
                </tr>
                </thead>
                <tbody>
                {enrichedMovies.map(movie => (
                    <tr key={movie.id}>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.formattedReleaseDate}</td>
                        <td>{movie.description}</td>
                        <td>{movie.producerName}</td>
                        <td>{movie.directorName}</td>
                        <td>{movie.genres.join(', ')}</td>
                        <td>
                            <StarList stars={stars} starIds={movie.stars} movieId={movie.id} onRemoveStar={onRemoveStar} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default MovieTable;
