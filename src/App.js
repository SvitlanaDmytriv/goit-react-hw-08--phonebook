import { useEffect } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PrivateRoute, PublicRoute } from './component/Routes/';
import { getIsAuth } from './redux/user/userSelectors';
import { currentUser } from './redux/user/userOperation';
import {
  ContactsPage,
  LoginPage,
  AuthPage,
  // Filter,
  NotFoundPage,
} from './views';

function App() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <main>
        {/* <Link to="/filter">Filter</Link> */}
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
          />{' '}
          {/* <Route path="/filter" element={<Filter />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
