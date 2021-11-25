import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/userOperation';

import { getEmail, getName } from '../../redux/user/userSelectors';

export function UserMenu() {
  const email = useSelector(getEmail);
  const name = useSelector(getName);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <p>{name}</p>
      <a href={`mailto:${email}`}>{email}</a>;
      <button type="button" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
}
