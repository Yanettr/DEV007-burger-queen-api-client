import "./chefHeader.css";
import LogoOut from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";
import ChefNavBar from "../ChefNavBar/ChefNavBar";

function ChefHeader() {
    const navigate = useNavigate();

    function signOut() {
        navigate('/');
    }

    return (
        <header className="chef-header">
            <div className= "navbar">
                <ChefNavBar/>
                <div className="signout" onClick={signOut}>
                    <img src={LogoOut} alt="Icon for sign out" className="icon" />
                </div>
            </div>
        </header>   
    );
}

export default ChefHeader;
