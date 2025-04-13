import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../auth/firebase";

const ProtectedRoute = ({ children, message }) => {
  const location = useLocation();

  if (!auth.currentUser) {
    return (
      <Navigate 
        to="/login" 
        state={{ 
          from: location,
          message: message || "Please log in or create an account to access this page" 
        }} 
        replace 
      />
    );
  }

  return children;
};

export default ProtectedRoute;