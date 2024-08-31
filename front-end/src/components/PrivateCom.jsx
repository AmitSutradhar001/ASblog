import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const PrivateCom = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const token = Cookies.get("asblog_token");
  if (!currentUser?.user || !token) {
    <Navigate to="/signin" replace />;
    return toast.info("Cookie has expires! please Login");
  }
  return children;
};
export default PrivateCom;
