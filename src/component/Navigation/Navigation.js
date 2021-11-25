import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../../redux/user/userSelectors';
import { UserMenu } from '../UserMenu/UserMenu';

export function Navigation() {
  const isAuth = useSelector(getIsAuth);
  return (
    <header>
      {isAuth ? (
        <div>
          <NavLink to="/contacts">contacts</NavLink> <UserMenu />
        </div>
      ) : (
        <div className="nav">
          <NavLink to="/login">login</NavLink>

          <NavLink to="/signup">signup</NavLink>
        </div>
      )}
    </header>
  );
}
