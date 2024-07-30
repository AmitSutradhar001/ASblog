import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateCom = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user.user);
  return currentUser ? children : <Navigate to="/signin" replace />;
};
