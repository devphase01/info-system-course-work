import Layout from '@app/layouts';
import { GetStartedPage, SignIn, SignUp } from '@pages/index';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<GetStartedPage />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  ),
);