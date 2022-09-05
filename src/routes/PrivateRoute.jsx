import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selector';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const hasToken = useSelector(authSelectors.getToken);

  return isLoggedIn || hasToken ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;

//  <Route {...routeProps}>
//    {isLoggedIn || hasToken ? children : <Redirect to={redirectTo} />}
//  </Route>;
