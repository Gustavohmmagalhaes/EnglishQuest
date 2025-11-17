import React, { createContext, useContext, useState, useEffect,useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

interface Token {
    id: string;
    nome: string;
    email: string;
    role: 'user' | 'admin';
    exp: number; // Campo presente em JWTs reais
}

interface User {
    id: string;
    nome: string;
    email: string;
    role: 'user' | 'admin';
}

interface AuthContextType {
    user: User | null;
    isAdmin: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const logout = useCallback(() => {
        localStorage.removeItem('jwt_token');
        setUser(null);
    }, []); // Array de dependências vazio significa que a função NUNCA muda.
    // 2. 🚀 FUNÇÃO LOGIN (Adicionada)
    const login = (token: string) => {
        try {
            // ATENÇÃO: Usamos JSON.parse() porque o token no seu mock de login é um JSON stringificado, não um JWT Base64.
            const decodedPayload = JSON.parse(token); 
            
            if (!decodedPayload.role) {
                throw new Error("Token payload inválido: role ausente.");
            }

            const loggedInUser: User = {
                id: decodedPayload.id,
                nome: decodedPayload.nome,
                email: decodedPayload.email,
                role: decodedPayload.role,
            };

            localStorage.setItem('jwt_token', token); // Armazena o token stringificado
            setUser(loggedInUser);

        } catch (error) {
            console.error("Erro ao processar token no login:", error);
            logout();
        }
    };
    
    // 3. EFEITO (Ajustado para lidar com token mockado)
    useEffect(() => {
        const token = localStorage.getItem('jwt_token');

        if (token) {
            try {
                // Tenta fazer a decodificação:
                const decodedPayload = JSON.parse(token);
                
                // Verifica se o token tem o campo 'exp' (indicador de JWT Real)
                const isRealJWT = decodedPayload.exp !== undefined;

                if (isRealJWT) {
                    // Lógica para JWT Real (com Base64 e expiração)
                    const realToken = jwtDecode<Token>(token);
                    const currentTime = Date.now() / 1000;
                    if (realToken.exp < currentTime) {
                        logout();
                        return;
                    }
                    setUser({ id: realToken.id, nome: realToken.nome, email: realToken.email, role: realToken.role });
                } else {
                    // Lógica para Token Mockado (JSON Server)
                    if (!decodedPayload.role) {
                         throw new Error("Token mockado inválido: role ausente.");
                    }
                    setUser({ 
                        id: decodedPayload.id, 
                        nome: decodedPayload.nome, 
                        email: decodedPayload.email, 
                        role: decodedPayload.role 
                    });
                }
            } catch (error) {
                console.error("Erro ao decodificar token na inicialização:", error);
                logout();
            }
        }
    }, [logout]); // Adicionando 'logout' como dependência para evitar avisos do linter

    const isAdmin = user?.role === 'admin';

    return (
        <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};