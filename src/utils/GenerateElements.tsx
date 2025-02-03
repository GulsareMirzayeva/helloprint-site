import { t } from 'i18next';
import { Link } from 'react-router-dom';
import {
  SubNavigationType,
  NavigationType,
} from '../lib/types/headerNavigationTypes';
import { colorPresets } from '../lib/stylePresets';

export const NavigationLink = (linkProps: NavigationType) => {
  return (
    <Link
      className={`p-1 flex items-center cursor-default border-b-2 ${
        location.pathname === linkProps.path
          ? `${colorPresets.navigation.underlineActiveColorProperty}`
          : `${colorPresets.navigation.underlineInActiveColorProperty} ${colorPresets.navigation.underlineHoverColorProperty}`
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
      <li
        className={`${colorPresets.navigation.backgroundHoverProperty} p-2 cursor-default`}
      >
        {t(linkProps.value)}
      </li>
    </Link>
  );
};
