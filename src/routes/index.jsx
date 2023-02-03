import PageDashboard from '../pages/dashboard';
import PageNotFound from '../pages/404';

const AppRoutes = [
  {
    id: 'page_dashboard',
    path: '/',
    page: <PageDashboard />,
  },
  {
    id: 'page_not_found',
    path: '*',
    page: <PageNotFound />,
  },
];
export default AppRoutes;
