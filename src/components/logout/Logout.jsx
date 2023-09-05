import { useNavigate } from 'react-router-dom';
import LogOut from '../../assets/out.png';


const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
   
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');

        navigate('/');
    };

    return ( 
        <button className="btn-navBar" onClick={logout}>
            <LogOut className="navBar-icon" />
            Logout
        </button>
    );
};

export default Logout;
