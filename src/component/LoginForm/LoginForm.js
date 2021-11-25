import s from '../Contacts/ContactForm/ContactForm.module.css';
import stl from './LoginForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/userOperation';

import Button from '../Button/Button';
export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
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

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>email</label>
      <input
        className={s.input}
        type="email"
        name="email"
        value={email}
        autoComplete="on"
        required
        onChange={handleChange}
      />

      <label className={s.label}>password</label>
      <input
        className={s.input}
        type="password"
        name="password"
        value={password}
        required
        onChange={handleChange}
      />

      <Button
        className={`${s.button} ${stl.btn}`}
        type="submit"
        disabled={disabled}
      >
        login
      </Button>
    </form>
  );
}
