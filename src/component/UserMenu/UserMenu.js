import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import { logoutUser } from '../../redux/user/userOperation';
import { getEmail } from '../../redux/user/userSelectors';
import Button from '../Button/Button';

export function UserMenu() {
  const email = useSelector(getEmail);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className={s.userMenu}>
      <Button type="button" onClick={handleLogout} className={s.button}>
        <BoxArrowLeft className={s.icon} />
      </Button>
      <a className={s.user} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
}
