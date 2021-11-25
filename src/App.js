import './App.css';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PrivateRoute, PublicRoute } from './component/Routes/';
import { Navigation } from './component/Navigation/Navigation';
import { ContactsPage, LoginPage, AuthPage, NotFoundPage } from './views';
import { getIsAuth } from './redux/user/userSelectors';
import { currentUser } from './redux/user/userOperation';
import { fetchContactsAll } from './redux/contacts/contactsOperations';

function App() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(fetchContactsAll());
  }, [dispatch]);

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={<PublicRoute isAuth={isAuth} component={LoginPage} />}
        />
        <Route
          path="/signup"
          element={<PublicRoute isAuth={isAuth} component={AuthPage} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute isAuth={isAuth} component={ContactsPage} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
export default App;
