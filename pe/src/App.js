import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MoviePage from './component/MoviePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/" element={<Navigate to="/movie" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
