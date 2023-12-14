import { Outlet } from 'react-router-dom';

import { Header, AuthHeader } from '@widgets/header';

import { RoleType, selectUser } from '@entities/user';
import { useAppSelector } from '@shared/hooks/redux.hook';

const Layout = () => {
  const { isAuth, role } = useAppSelector(selectUser);

  return (
    <>
      {isAuth ? <AuthHeader role={role as RoleType} /> : <Header />}

      <main className="bg-anti-flash">
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
