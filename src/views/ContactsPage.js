import { useState, useEffect } from 'react';
import { fetchContactsAll } from '../redux/contacts/contactsOperations';
import ContactsSection from '../component/Contacts/ContactsSection/ContactsSection';
import { useDispatch } from 'react-redux';
import ContactForm from '../component/Contacts/ContactForm/ContactForm';
import Modal from '../component/Contacts/Modal/Modal';

export function ContactsPage() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModall = () => {
    setShowModal(prevState => !prevState);
  };
  useEffect(() => {
    dispatch(fetchContactsAll());
  }, [dispatch]);
  return (
    <>
      {showModal && (
        <Modal toggleModall={toggleModall}>
          <ContactForm toggleModall={toggleModall} />
        </Modal>
      )}

      <ContactsSection toggleModall={toggleModall} />
    </>
  );
}
