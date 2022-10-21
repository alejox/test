import { Navigate, Outlet } from "react-router-dom";

const getUser = localStorage.getItem('userData');
const getPassword = localStorage.getItem('passwordData');

const useAuth = () => {
  const user = { loggedIn: getUser && getPassword };
  return user && user.loggedIn;
};

export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to='/login'/>;
};

