import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  Home,
  Cards,
  Contact,
  CopyPrint,
  CustomClothing,
  Flyers,
  Folders,
  Posters,
  Stickers,
  ErrorPage,
} from './components/pages/index';
import TermsOfSalePage from './components/pages/TermsOfSalePage';
import CustomPrint from './components/pages/CustomPrint';
import OfficeSupplies from './components/pages/OfficeSupplies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage error={`This page doesn't exist`} />,
    children: [
      {
        index: true, // Set this page as default "Homepage"
        element: <Home />,
      },
      {
        path: 'copy-print',
        element: <CopyPrint />,
      },
      {
        path: 'custom-clothing',
        element: <CustomClothing />,
      },
      {
        path: 'custom-printing',
        element: <CustomPrint />,
      },
      {
        path: 'custom-printing/stickers',
        element: <Stickers />,
      },
      {
        path: 'custom-printing/cards',
        element: <Cards />,
      },
      {
        path: 'custom-printing/flyers',
        element: <Flyers />,
      },
      {
        path: 'custom-printing/folders',
        element: <Folders />,
      },
      {
        path: 'custom-printing/posters',
        element: <Posters />,
      },
      {
        path: 'office-supplies',
        element: <OfficeSupplies />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'terms-of-sale',
        element: <TermsOfSalePage />,
      },
    ],
  },
]);

export default router;
