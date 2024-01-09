import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("logged-in");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first" }}
        replace
      />
    );
  }

  //the replace prop is used to replace the current entry in the history stack

  return <Outlet />;
}
