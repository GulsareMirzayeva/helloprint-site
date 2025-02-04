import { t } from 'i18next';
import { Link } from 'react-router-dom';
import {
  SubNavigationType,
  NavigationType,
} from '../lib/types/headerNavigationTypes';
import { useData } from '../context/DataContext';

export const NavigationLink = (linkProps: NavigationType) => {
  const { stylePreset } = useData();

  return (
    <Link
      className={`p-1 flex items-center cursor-default border-b-2 ${
        location.pathname === linkProps.path
          ? `${stylePreset.navigation.underlineActiveColor}`
          : `${stylePreset.navigation.underlineInActiveColor} ${stylePreset.navigation.underlineHoverColor}`
      }`}
      to={linkProps.path}
    >
      {t(linkProps.value)}
    </Link>
  );
};

export const SubNavigationLink = (linkProps: SubNavigationType) => {
  const { stylePreset } = useData();

  return (
    <Link to={linkProps.path} onClick={linkProps.callBack}>
      <li
        className={`${stylePreset.navigation.backgroundHover} p-2 cursor-default`}
      >
        {t(linkProps.value)}
      </li>
    </Link>
  );
};
