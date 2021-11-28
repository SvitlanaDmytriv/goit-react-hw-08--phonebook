import s from './LoginForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/user/userOperation';
import Button from '../Button/Button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (email === '' || password === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleClick = () => {
    return navigate('/signup');
  };

  return (
    <>
      <Button
        className={`${s.button} ${s.btnAbsolute}`}
        type="button"
        onClick={handleClick}
      >
        SignUp
      </Button>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>Email</label>
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          autoComplete="on"
          required
          onChange={handleChange}
        />

        <label className={s.label}>Password</label>
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <Button className={s.button} type="submit" disabled={disabled}>
          Login
        </Button>
      </form>
    </>
  );
}
