// Redux Toolkit
import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'react-bootstrap-icons';
import { changeFilter } from '../../../redux/contacts/contactsAction';
import { getFilter } from '../../../redux/contacts/contactsSelectors';

function ContactFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const сhangeFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  const handleClick = () => {
    setShowFilter(!showFilter);
    setDisabled(!disabled);
  };

  return (
    <div
      className={
        showFilter
          ? `${s.searchWrapper} ${s.active} ${s.close}`
          : `${s.searchWrapper}`
      }
    >
      <div className={s.inputHolder}>
        <input
          type="text"
          value={value}
          onChange={сhangeFilter}
          className={s.searchInput}
          placeholder="Search contacts"
        />

        <button
          className={s.searchBtn}
          onClick={handleClick}
          disabled={disabled}
        >
          <Search className={s.searchIcon} />
        </button>
      </div>
      <span className={s.close} onClick={handleClick}></span>
    </div>
  );
}

ContactFilter.propTypes = {
  value: PropTypes.string,
  сhangeFilter: PropTypes.func,
};

export default ContactFilter;
// function ContactFilter() {
//   const dispatch = useDispatch();
//   const value = useSelector(getFilter);

//   const сhangeFilter = e => {
//     const { value } = e.target;
//     dispatch(changeFilter(value));
//   };

//   return (
//     <label className={s.label}>
//       Find contacts by name
//       <input
//         className={s.input}
//         type="text"
//         value={value}
//         onChange={сhangeFilter}
//       ></input>
//     </label>
//   );
// }
