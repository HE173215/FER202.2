// src/components/MoviePage.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GenreFilter from './GenreFilter';
import DirectorList from './DirectorList';
import MovieTable from './MovieTable';

function MoviePage() {
    const [movies, setMovies] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [producers, setProducers] = useState([]);
    const [stars, setStars] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const directorId = searchParams.get('directorId');
        const genre = searchParams.get('genre');

        if (directorId) {
            filterByDirector(parseInt(directorId));
        } else if (genre) {
            filterByGenre(genre);
        } else {
            setFilteredMovies(movies); // Show all movies if no filter is applied
        }
    }, [searchParams, movies]);

    const fetchData = async () => {
        try {
            const [moviesRes, directorsRes, producersRes, starsRes] = await Promise.all([
                fetch('http://localhost:9999/movies'),
                fetch('http://localhost:9999/directors'),
                fetch('http://localhost:9999/producers'),
                fetch('http://localhost:9999/stars')
            ]);

            setMovies(await moviesRes.json());
            setDirectors(await directorsRes.json());
            setProducers(await producersRes.json());
            setStars(await starsRes.json());
            setFilteredMovies(await moviesRes.json());
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filterByGenre = (genre) => {
        const filtered = movies.filter(movie => movie.genres.includes(genre));
        setFilteredMovies(filtered);
    };

    const filterByDirector = (directorId) => {
        const filtered = movies.filter(movie => movie.director === directorId);
        setFilteredMovies(filtered);
    };

    const showAllMovies = () => {
        setFilteredMovies(movies);
    };

    const handleRemoveStar = (movieId, starId) => {
        if (window.confirm('Are you sure you want to remove this star?')) {
            const updatedMovies = movies.map(movie => {
                if (movie.id === movieId) {
                    movie.stars = movie.stars.filter(id => id !== starId);
                }
                return movie;
            });
            setMovies(updatedMovies);
            setFilteredMovies(updatedMovies);
        }
    };

    return (
        <div className="container mt-4">
            <header className="text-center mb-4">
                <h1>React Application</h1>
                <GenreFilter onFilter={filterByGenre} onShowAll={showAllMovies} />
            </header>
            <div className="row">
                <aside className="col-md-3">
                    <DirectorList directors={directors} />
                </aside>
                <main className="col-md-9">
                    <h2 className="text-center mb-3">List of Movies</h2>
                    <MovieTable
                        movies={filteredMovies}
                        producers={producers}
                        directors={directors}
                        stars={stars}
                        onRemoveStar={handleRemoveStar}
                        onShowAll={showAllMovies} // Pass showAllMovies as onShowAll
                    />
                </main>
            </div>
        </div>
    );
}

export default MoviePage;
