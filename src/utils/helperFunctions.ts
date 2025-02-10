import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Make sure the scroll postion is set to the top of the page when rendered
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
