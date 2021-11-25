import { Navigate } from 'react-router-dom';

export function PublicRoute({ isAuth, component: Component }) {
  return <>{isAuth ? <Navigate to="/contacts" /> : <Component />}</>;
}
