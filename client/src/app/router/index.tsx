import Layout from '@app/layouts';
import { GetStartedPage, SignIn, SignUp } from '@pages/index';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthGuard, GuestGuard, RoleGuard } from './router.guards';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<GuestGuard />}>
        <Route index element={<GetStartedPage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route element={<AuthGuard />}>
        <Route index element={<div>Index</div>} />
        <Route path="requests" element={<div>Requests</div>} />
        
        <Route element={<RoleGuard role="manager" />}>
          <Route path="strategies" element={<div>Strategies</div>} />
        </Route>
      </Route>
    </Route>
  ),
);