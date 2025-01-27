import { t } from 'i18next';
import { Link } from 'react-router-dom';
import {
  SubNavigationType,
  NavigationType,
} from '../lib/types/headerNavigationTypes';

export const NavigationLink = (linkProps: NavigationType) => {
  return (
    <Link
      className={`p-1 flex items-center cursor-default border-b-2 ${
        location.pathname === linkProps.path
          ? 'border-b-[#FB0036] hover:border-b-gray-[#FB0036]'
          : 'border-b-white hover:border-b-gray-200'
      }`}
      to={linkProps.path}
    >
      {t(linkProps.value)}
    </Link>
  );
};

export const SubNavigationLink = (linkProps: SubNavigationType) => {
  return (
    <Link to={linkProps.path} onClick={linkProps.callBack}>
      <li className="p-2 hover:bg-gray-100 cursor-default">
        {t(linkProps.value)}
      </li>
    </Link>
  );
};
