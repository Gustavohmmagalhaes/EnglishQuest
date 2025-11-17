import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // 👈 IMPORTAR O HOOK REAL

const AdminRoute: React.FC = () => {
    // 🔑 Usa a lógica de isAdmin do seu AuthContext estável
    const { isAdmin, user } = useAuth();
    
    // Se não houver usuário logado OU se o usuário não for admin, redireciona
    if (!user || !isAdmin) {
        // Redireciona para o login ('/')
        return <Navigate to="/" replace />;
    }

    // Se for administrador, renderiza o componente filho
    return <Outlet />; 
};

export default AdminRoute;