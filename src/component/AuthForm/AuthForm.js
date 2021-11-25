import s from '../Contacts/ContactForm/ContactForm.module.css';
import stl from './AuthForm.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/user/userOperation';
import Button from '../Button/Button';

export function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
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
  return (
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

      <label className={s.label}>email</label>
      <input
        className={s.input}
        type="email"
        name="email"
        value={email}
        autoComplete="on"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title=""
        required
        onChange={handleChange}
      />

      <label className={s.label}>password</label>
      <input
        className={s.input}
        type="password"
        name="password"
        value={password}
        // autoComplete="on"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title=""
        minLength={7}
        required
        onChange={handleChange}
      />

      <Button
        className={`${s.button} ${stl.btn}`}
        type="submit"
        disabled={disabled}
      >
        signup
      </Button>
    </form>
  );
}
