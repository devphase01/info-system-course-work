import Layout from '@app/layouts';
import { CreateRequestPage, GetStartedPage, UserReqListPage, SignIn, SignUp, ManagerReqListPage } from '@pages/index';

import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import { AuthGuard, GuestGuard, RoleGuard } from './router.guards';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<GuestGuard />}>
        <Route index element={<GetStartedPage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>

      <Route element={<AuthGuard />}>
        <Route element={<RoleGuard role="manager" />}>
          <Route path="/requests" element={<ManagerReqListPage />} />
          <Route path="strategies" element={<div>Strategies</div>} />
        </Route>

        <Route element={<RoleGuard role="user" />}>
          <Route path="/create-request" element={<CreateRequestPage />} />
          <Route path="/requests" element={<UserReqListPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/requests" />} />
      </Route>
    </Route>
  ),
);