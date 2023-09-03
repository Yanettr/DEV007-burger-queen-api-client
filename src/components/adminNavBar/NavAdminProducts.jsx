import { useNavigate } from 'react-router-dom';
import Logo from '../logo/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BiLogOut } from 'react-icons/bi'
const logoutIcon = <FontAwesomeIcon icon={BiLogOut} size="2xl" style={{ color: "#D11515", }} />
const iconWorkers = <FontAwesomeIcon icon={faUser} size="2xl" style={{ color: "#FFF", }} />

const NavAdminProducts = () => {
  const navigateTo = useNavigate();
  const logout = () => {
    navigateTo('/');
  }
  const workersView = () => {
    navigateTo('/adminUsers');
  }
  
  return (
    <>
      <section className='section-waiter'>
        <div className='waiter-nav'>
          <div className='logos'>
          <div className='container-order-logo workers-logo' onClick={workersView}>{iconWorkers}</div>
          
            <div className='container-logos'>
              <img src={Logo} className='BQLogo' alt='' />
            </div>
          </div>
          <div className='container-logout' onClick={logout}>
            {logoutIcon}
          </div>
        </div>
      </section>
    </>
  );
};
export default NavAdminProducts