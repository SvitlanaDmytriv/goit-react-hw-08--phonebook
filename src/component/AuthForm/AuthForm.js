import s from './AuthForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../redux/user/userOperation';
import Button from '../Button/Button';

export function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (name === '' || email === '' || password === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, name, password]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    const user = { name, email, password };
    dispatch(signupUser(user));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleClick = () => {
    return navigate('/login');
  };

  return (
    <>
      <Button
        className={`${s.button} ${s.btnAbsolute}`}
        type="button"
        onClick={handleClick}
      >
        LogIn
      </Button>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>Name </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          autoComplete="on"
        />

        <label className={s.label}>Email</label>
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          autoComplete="on"
          title=""
          required
          onChange={handleChange}
        />

        <label className={s.label}>Password</label>
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          autoComplete="on"
          title=""
          minLength={7}
          required
          onChange={handleChange}
        />

        <Button className={s.button} type="submit" disabled={disabled}>
          SignUp
        </Button>
      </form>
    </>
  );
}
