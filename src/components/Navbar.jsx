import { NavLink } from 'react-router-dom';
import { routes } from '../AppRouter';

const Navbar = () => {
  return (
    <nav className='mb-4'>
      <ul className='nav-links'>
        {
          routes.map((route, index) => {
            return (
              <li className='mt-2' key={index}>
                <NavLink className="text-decoration-none text-white " to={route.path} exact activeClassName="active">
                  {route.name}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;