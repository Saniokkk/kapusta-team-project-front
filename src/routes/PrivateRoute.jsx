import { Route, Redirect } from 'react-router-dom';
import authSelectors from "../redux/auth/auth-selector";
import { useSelector } from 'react-redux';

const PrivateRoute = ({
    children,
    redirectTo = '/',
    ...routeProps
}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const hasToken = useSelector(authSelectors.getToken);
    return (
        <Route {...routeProps}>
            {isLoggedIn || hasToken ? children : <Redirect to={redirectTo} />}
        </Route>
    );
};
export default PrivateRoute;