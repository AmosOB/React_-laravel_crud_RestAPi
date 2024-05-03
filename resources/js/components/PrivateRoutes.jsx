import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const token = localStorage.getItem('token');
    const isAuthenticated = token !== null;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
