import { useNavigate } from 'react-router-dom';
import LogOut from '../../assets/out.png';

// Función para cerrar sesión
const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        // Remover el token y el role del usuario
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        // Redirigir al inicio de sesión
        navigate('/');
    };

    return ( 
        <button className="btn-navBar" onClick={logout}>
            <Logout className="navBar-icon" />
            Logout
        </button>
    );
};

export default Logout;
