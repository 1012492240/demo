import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import { routes } from './routes';

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <div style={{ padding: '0 1rem' }}>
                    <Routes>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;