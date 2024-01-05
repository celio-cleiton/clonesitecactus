// Router.jsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import QuemSomosPage from '../pages/QuemSomosPage/QuemSomosPage';
import SolucoesPage from '../pages/SolucoesPage/SolucoesPage';
import TalentosPage from '../pages/TalentosPage/TalentosPage';
import BlogPage from '../pages/Blog/BlogPage';
import ErrorPage from '../pages/error/Error';
import App from '../App';
import Contact from '../components/form/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:([
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/quemSomos',
        element: <QuemSomosPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/solucoes',
        element: <SolucoesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/talentos',
        element: <TalentosPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contato',
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ])
  },
  
]);

export default router;
