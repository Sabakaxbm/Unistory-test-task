import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from '../entities/ui/layout/Layout';

const MainPage = lazy(() => import('./mainPage'));
const MemberPage = lazy(() => import('./memberPage'));
const MemberInfoPage = lazy(() => import('./memberInfoPage'));

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <MainPage />
            </Suspense>
          }
        />
        <Route element={<PrivateRoutes />}>
          <Route
            path={'member'}
            element={
              <Suspense fallback={<h1>Loading</h1>}>
                <MemberPage />
              </Suspense>
            }
          />
          <Route
            path={`member/:id`}
            element={
              <Suspense fallback={<h1>Loading</h1>}>
                <MemberInfoPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

import { Navigate, Outlet } from 'react-router-dom';
import useStore from '../shared/store';

const PrivateRoutes = () => {
  const { isAuth } = useStore();
  return isAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={'/'} />
  );
};

export default PrivateRoutes;
