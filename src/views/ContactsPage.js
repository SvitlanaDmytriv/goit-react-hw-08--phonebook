import { useState, useEffect } from 'react';
import { fetchContactsAll } from '../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/user/userSelectors';
import { UserMenu } from '../component/UserMenu/UserMenu';
import ContactsSection from '../component/Contacts/ContactsSection/ContactsSection';
import ContactForm from '../component/Contacts/ContactForm/ContactForm';
import Modal from '../component/Contacts/Modal/Modal';

export function ContactsPage() {
  const [showModal, setShowModal] = useState(false);
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  const toggleModall = () => {
    setShowModal(prevState => !prevState);
  };
  useEffect(() => {
    dispatch(fetchContactsAll());
  }, [dispatch]);
  return (
    <section className="container">
      {isAuth && <UserMenu />}
      {showModal && (
        <Modal toggleModall={toggleModall}>
          <ContactForm toggleModall={toggleModall} />
        </Modal>
      )}

      <ContactsSection toggleModall={toggleModall} />
    </section>
  );
}
