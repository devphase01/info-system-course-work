import { RoleType, selectUser } from "@entities/user";
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from "@shared/hooks/redux.hook";

export function AuthGuard() {
  const { isAuth } = useAppSelector(selectUser);

  if (!isAuth) {
    return <Navigate to={'/'} />;
  }

  return <Outlet />;
}

export function RoleGuard({ role }: { role: RoleType }) {
  const { role: userRole } = useAppSelector(selectUser);

  if (role !== userRole) {
    return <Navigate to={'/requests'} />
  }

  return <Outlet />;
}

export function GuestGuard() {
  const { isAuth } = useAppSelector(selectUser);

  if (isAuth) {
    return <Navigate to={'/'} />;
  }

  return <Outlet />;
}
