import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import { menuButtonNames } from '../lib/translationPaths';
import { ExpandableLinkType } from '../lib/types/headerNavigationTypes';
import {
  NavigationLink,
  SubNavigationLink,
} from './elementTemplates/NavigationButtons';
import { Divider } from '@mui/material';
import { useData } from '../context/DataContext';

export default function Header() {
  // Used for translation with the i18next package, set default language to Dutch(nl)
  const { t, i18n } = useTranslation();
  const { stylePreset, setDarkMode, darkMode } = useData();
  const [language, setLanguage] = useState(i18n.language || 'nl');

  // Keep track if mobile menu is opened or not
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Keep track of the active/current page, so the corresponding button can be highlighted
  const location = useLocation();

  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Change language
  const changeLanguage = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  // Open the accordion with a certain amount of delay
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    openTimeoutRef.current = setTimeout(() => {
      setAccordionOpen(true);
    }, 2000);
  };

  // Close the accordion with a certain amount of delay
  const handleMouseLeave = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);

    closeTimeoutRef.current = setTimeout(() => {
      setAccordionOpen(false);
    }, 1000);
  };

  // Close the accordion when user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setAccordionOpen(false);
        if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function removes the eventlistener on the document
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle accordion state immediately when clicking the "parent" link on the navigation bar
  const handleOpen = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setAccordionOpen((prev) => !prev);
  };

  // Close accordion immediately when clicking an link in the accordion
  const handleAccordionLinkClick = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setAccordionOpen(false);
  };

  const NagivationExpandableLink: React.FC<ExpandableLinkType> = ({
    children,
  }) => {
    return (
      <div
        ref={accordionRef}
        className={`
          relative
          ${stylePreset.navigation.textSize}
          `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex items-center cursor-default border-b-2
            ${
              location.pathname.startsWith('/custom-print')
                ? `${stylePreset.navigation.underlineActiveColor}`
                : `${stylePreset.navigation.underlineInActiveColor} ${stylePreset.navigation.underlineHoverColor}`
            }`}
          onClick={handleOpen}
        >
          <button
            aria-label="Toggle custom printing submenu"
            className="flex cursor-default h-full items-center"
          >
            {t(menuButtonNames.customPrinting)}
          </button>
          {isAccordionOpen ? (
            <KeyboardArrowUpIcon fontSize="medium" />
          ) : (
            <KeyboardArrowDownIcon fontSize="medium" />
          )}
        </div>
        {children}
      </div>
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`
        sticky top-0 pt-1 z-20 shadow-md text-sm
        ${stylePreset.header.backgroundColor}
      `}
    >
      <nav className="flex flex-col lg:flex-row lg:justify-center pb-1 px-4">
        {/* Logo + Hamburger menu */}
        <div>
          {/* Hamburger button - only visible at small screens */}
          <button className="lg:hidden pt-2" onClick={toggleMobileMenu}>
            <MenuIcon fontSize="large" />
          </button>
        </div>

        {/* Navigatie-items */}
        <div
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } flex-col gap-2 pl-1 lg:flex lg:flex-row lg:items-center items-start lg:gap-12`}
        >
          <NavigationLink path={'/'} value={t(menuButtonNames.home)} />

          <NavigationLink
            path={'/copy-print'}
            value={t(menuButtonNames.copyPrint)}
          />
          <NagivationExpandableLink>
            {isAccordionOpen && (
              <ul
                className={`
                  absolute z-20 top-[calc(100%)] lg:top-[calc(100%+4px)] w-[120px] shadow-md rounded-sm
                  ${stylePreset.navigation.backgroundColor}  
                `}
              >
                <SubNavigationLink
                  path={'/custom-print'}
                  value={t(menuButtonNames.overview)}
                  callBack={handleAccordionLinkClick}
                />
                <Divider
                  style={{
                    backgroundColor: `${stylePreset.overall.diverderColor}`,
                  }}
                  flexItem
                  variant="fullWidth"
                />
                <SubNavigationLink
                  path={'/custom-print/stickers'}
                  value={t(menuButtonNames.stickers)}
                  callBack={handleAccordionLinkClick}
                />
                <SubNavigationLink
                  path={'/custom-print/cards'}
                  value={t(menuButtonNames.cards)}
                  callBack={handleAccordionLinkClick}
                />
                <SubNavigationLink
                  path={'/custom-print/flyers'}
                  value={t(menuButtonNames.flyers)}
                  callBack={handleAccordionLinkClick}
                />
                <SubNavigationLink
                  path={'/custom-print/folders'}
                  value={t(menuButtonNames.folders)}
                  callBack={handleAccordionLinkClick}
                />
                <SubNavigationLink
                  path={'/custom-print/posters'}
                  value={t(menuButtonNames.posters)}
                  callBack={handleAccordionLinkClick}
                />
              </ul>
            )}
          </NagivationExpandableLink>
          <NavigationLink
            path={'/custom-clothing'}
            value={t(menuButtonNames.customClothing)}
          />
          <NavigationLink
            path={'/office-supplies'}
            value={t(menuButtonNames.officeSupplies)}
          />
          <NavigationLink
            path={'/contact'}
            value={t(menuButtonNames.contact)}
          />

          {/* Taalkeuze */}
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-6">
            <div className="flex items-center pt-2 lg:pt-0">
              <LanguageIcon fontSize={'small'} />
              <select
                name="language"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="
                text-xs w-15 h-5 ml-2 pl-1 rounded-lg cursor-pointer text-[#202020] bg-white border border-gray-400 
                transition hover:ring-1 hover:ring-gray-300 focus:ring-[#fb0036] focus:ring-1"
              >
                <option value="nl">NL</option>
                <option value="en">EN</option>
              </select>
            </div>
            <div className="flex items-center gap-1 pt-1 lg:pt-0">
              <div className="text-yellow-500 pb-1">
                <LightModeIcon fontSize="small" />
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`
                relative w-8 h-4 flex items-center rounded-full p-1 transition
                hover:ring-1 hover:ring-gray-400 focus:ring-[#fb0036] focus:ring-1
                ${darkMode ? 'bg-gray-50' : 'bg-gray-600'}
              `}
              >
                <span
                  className={`
                  w-3 h-3 bg-gray-50 dark:bg-gray-800 rounded-full shadow-md transform transition 
                  ${darkMode ? 'translate-x-3' : 'translate-x-0'}
                `}
                />
              </button>
              <div className="text-gray-600 pb-1">
                <DarkModeOutlinedIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
