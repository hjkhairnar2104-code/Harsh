import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const userRole = useSelector((state) => state.auth.role);

  if (userRole !== role) {
    return <Navigate to="/equipment" />;
  }

  return children;
};

export default ProtectedRoute;
