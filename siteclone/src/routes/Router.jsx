// Router.jsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import QuemSomosPage from '../pages/QuemSomosPage/QuemSomosPage';
import SolucoesPage from '../pages/SolucoesPage/SolucoesPage';
import TalentosPage from '../pages/TalentosPage/TalentosPage';
import ContactDetails from '../pages/Details/ContactDetails';
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
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'quemSomos',
        element: <QuemSomosPage />,
      },
      {
        path: 'solucoes',
        element: <SolucoesPage />,
      },
      {
        path: 'talentos',
        element: <TalentosPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'contato',
        element: <Contact />,
      },
      {
        path: 'talentos/:name',
        element: <ContactDetails />
      }
    ])
  },
  
]);

export default router;
