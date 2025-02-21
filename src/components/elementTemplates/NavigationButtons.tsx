import { t } from 'i18next';
import { Link } from 'react-router-dom';
import {
  SubNavigationType,
  NavigationType,
} from '../../lib/types/headerNavigationTypes';
import { useData } from '../../context/DataContext';

// This returns a custom navigation links with a dynamic value
export const NavigationLink = (linkProps: NavigationType) => {
  const { stylePreset } = useData();

  return (
    <Link
      to={linkProps.path}
      className={`
        flex items-center cursor-default border-b-2 transition 
        ${stylePreset.navigation.textSize}
        ${
          location.pathname === linkProps.path
            ? `${stylePreset.navigation.underlineActiveColor}`
            : `${stylePreset.navigation.underlineInActiveColor}
              ${stylePreset.navigation.underlineHoverColor}`
        }
      `}
    >
      {t(linkProps.value)}
    </Link>
  );
};

// This returns a custom subnavigation links with a dynamic value
export const SubNavigationLink = (linkProps: SubNavigationType) => {
  const { stylePreset } = useData();

  return (
    <Link to={linkProps.path} onClick={linkProps.callBack}>
      <li
        className={`
          p-1 cursor-pointer
          ${stylePreset.navigation.textSize}
          ${stylePreset.navigation.backgroundHover}
          ${stylePreset.navigation.textColorHover}
          ${stylePreset.navigation.textColor}
          `}
      >
        {t(linkProps.value)}
      </li>
    </Link>
  );
};
