import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminPage(){
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        
            logout(); 
        
            navigate('/', { replace: true }); 
    };
    return(
        <div onClick={handleLogout}>Dashboard</div>
    )
}