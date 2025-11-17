import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Ajuste o caminho conforme necessário

const GuestRoute: React.FC = () => {
    const { user, isAdmin } = useAuth();
    
    // Se o usuário está logado, ele não é mais um "convidado" (guest)
    if (user) {
        // Redireciona para a área de admin se for admin
        if (isAdmin) {
            return <Navigate to="/admin/dashboardAdmin" replace />;
        }
        // Redireciona para a home se for usuário comum
        return <Navigate to="/home" replace />;
    }

    // Se NÃO estiver logado (user é null), renderiza a rota filha (LoginPage, RegisterPage)
    return <Outlet />; 
};

export default GuestRoute;