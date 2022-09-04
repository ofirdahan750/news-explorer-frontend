import {Navigate} from "react-router-dom";

const ProtectedRoute = ({isLoggedIn, isLoading, children, ...props}) => {
  console.log("isLoggedIn:", isLoggedIn);
  console.log("isLoading:", isLoading);
  if (isLoading && !isLoggedIn) return;
  return isLoggedIn ? children : <Navigate {...props} to="/" />;
};

export default ProtectedRoute;
