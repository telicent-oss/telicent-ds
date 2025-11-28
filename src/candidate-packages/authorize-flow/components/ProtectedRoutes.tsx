import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import { AuthModal } from "./AuthModal";

export const ProtectedRoutes = () => {
  const { user, login } = useAuth();

  useEffect(() => {
    if (!user) {
      login();
    }
  }, [user
    // login is intentionally omitted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ])

  if (!user) return null;

  return (
    <>
      <AuthModal />
      <Outlet />
    </>
  )

}

export default ProtectedRoutes;
