import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateComp = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("Applicants"));
  const location = useLocation();

  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  if (location.pathname.endsWith("/admin") && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  if (location.pathname.endsWith("/student") && user.role !== "student") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};


export default PrivateComp;
