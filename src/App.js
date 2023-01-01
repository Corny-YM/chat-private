// React
import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './style.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './context/AuthContext';

function App() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) return <Navigate to="/login" />;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
