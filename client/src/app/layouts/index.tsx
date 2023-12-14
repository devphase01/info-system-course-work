import { Outlet } from 'react-router-dom';

import Header from "@widgets/header";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="bg-anti-flash">
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
