import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import { menuButtonNames } from '../lib/translationPaths';
import { ExpandableLinkType } from '../lib/types/headerNavigationTypes';
import { NavigationLink, SubNavigationLink } from '../utils/GenerateElements';
import { Divider } from '@mui/material';

export default function Header() {
  // Used for translation with the i18next package, set default language to Dutch(nl)
  const { t, i18n } = useTranslation();
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
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`p-1 flex items-center cursor-default border-b-2 ${
            location.pathname.startsWith('/custom-print')
              ? 'border-b-[#FB0036]'
              : 'border-b-white'
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
            <KeyboardArrowUpIcon className="mt-1 ml-2" />
          ) : (
            <KeyboardArrowDownIcon className="mt-1 ml-2" />
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
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <nav className="flex flex-col lg:flex-row lg:justify-center lg:h-16 px-4">
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
          } flex-col lg:flex lg:flex-row lg:items-center md: items-start lg:gap-16`}
        >
          <NavigationLink path={'/'} value={t(menuButtonNames.home)} />

          <NavigationLink
            path={'/copy-print'}
            value={t(menuButtonNames.copyPrint)}
          />
          <NagivationExpandableLink>
            {isAccordionOpen && (
              <ul className="absolute top-[calc(100%+6px)] min-w-[105%] bg-white shadow-md rounded-sm">
                <SubNavigationLink
                  path={'/custom-print'}
                  value={t(menuButtonNames.overview)}
                  callBack={handleAccordionLinkClick}
                />
                <Divider variant="fullWidth" />
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
          <div className="flex items-center pb-2 pt-2 sm:pb-2 md:pb-2 md:pt-2 lg:pt-0 lg:pb-0 pl-1">
            <LanguageIcon fontSize={'small'} />
            <select
              className="text-xs ml-2 p-1 bg-white border-2 rounded-lg cursor-pointer"
              name="language"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="nl">🇳🇱 NL</option>
              <option value="en">🇬🇧 EN</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}
