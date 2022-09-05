import {Navigate} from "react-router-dom";

const ProtectedRoute = ({isLoggedIn, isLoading, children, ...props}) => {
  if (isLoading && !isLoggedIn) return;
  return isLoggedIn ? children : <Navigate {...props} to="/" />;
};

export default ProtectedRoute;
