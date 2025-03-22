import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import {
  Home,
  Cards,
  Contact,
  CopyPrint,
  CustomPrint,
  CustomClothing,
  Flyers,
  Folders,
  Posters,
  Stickers,
  OfficeSupplies,
  TermsOfSalePage,
  ErrorPage,
} from './components/pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <ErrorPage
        error={
          <>
            Het lijkt erop dat de pagina die u zoekt niet bestaat of is
            verplaatst.
            <br />
            Controleer de URL of ga terug naar de startpagina.
          </>
        }
      />
    ),
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
        path: 'custom-print',
        element: <CustomPrint />,
      },
      {
        path: 'custom-print/stickers',
        element: <Stickers />,
      },
      {
        path: 'custom-print/cards',
        element: <Cards />,
      },
      {
        path: 'custom-print/flyers',
        element: <Flyers />,
      },
      {
        path: 'custom-print/folders',
        element: <Folders />,
      },
      {
        path: 'custom-print/posters',
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
