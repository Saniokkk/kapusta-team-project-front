import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selector";
import { useSelector } from "react-redux";

const PublicRoute = ({
    children,
    redirectTo = "/",
    restricted = false,
    ...routeProps

}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
};

export default PublicRoute;