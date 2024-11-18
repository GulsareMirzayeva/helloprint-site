import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  // Used for translation with the i18next package, set default language to Dutch(nl)
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'nl');
  //

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

  return (
    <header>
      <nav className="flex justify-center gap-16 items-center shadow-md h-16">
        <Link
          className={`p-1 flex items-center cursor-default border-b-2 ${
            location.pathname === '/'
              ? 'border-b-[#FB0036] hover:border-b-gray-[#FB0036]'
              : 'border-b-white hover:border-b-gray-200'
          }`}
          to="/"
        >
          {t('menu.home')}
        </Link>
        <Link
          className={`p-1 flex items-center cursor-default border-b-2 ${
            location.pathname === '/copy-print'
              ? 'border-b-[#FB0036] hover:border-b-[#FB0036]'
              : 'border-b-white hover:border-b-gray-200'
          }`}
          to="copy-print"
        >
          {t('menu.copyPrint')}
        </Link>

        {/* Accordion start */}
        <div
          ref={accordionRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`p-1 flex items-center cursor-default border-b-2 ${
              location.pathname.startsWith('/custom-printing')
                ? 'border-b-[#FB0036]'
                : 'border-b-white'
            }`}
            onClick={handleOpen}
          >
            <button
              aria-label="Toggle custom printing submenu"
              className="flex cursor-default h-full items-center"
            >
              {t('menu.customPrinting')}
            </button>
            {isAccordionOpen ? (
              <KeyboardArrowUpIcon className="mt-1 ml-2" />
            ) : (
              <KeyboardArrowDownIcon className="mt-1 ml-2" />
            )}
          </div>

          {/* Accordion content */}
          {isAccordionOpen && (
            <ul className="absolute top-[calc(100%+13px)] min-w-[105%] bg-white shadow-md rounded-sm">
              <Link
                to="/custom-printing/stickers"
                onClick={handleAccordionLinkClick}
              >
                <li className="p-2 hover:bg-gray-200 cursor-default">
                  Stickers
                </li>
              </Link>
              <Link
                to="/custom-printing/business-cards"
                onClick={handleAccordionLinkClick}
              >
                <li className="p-2 hover:bg-gray-200 cursor-default">
                  {t('menu.cards')}
                </li>
              </Link>
              <Link
                to="/custom-printing/flyers"
                onClick={handleAccordionLinkClick}
              >
                <li className="p-2 hover:bg-gray-200 cursor-default">Flyers</li>
              </Link>
              <Link
                to="/custom-printing/folders"
                onClick={handleAccordionLinkClick}
              >
                <li className="p-2 hover:bg-gray-200 cursor-default">
                  Folders
                </li>
              </Link>
              <Link
                to="/custom-printing/posters"
                onClick={handleAccordionLinkClick}
              >
                <li className="p-2 hover:bg-gray-200 cursor-default">
                  Posters
                </li>
              </Link>
            </ul>
          )}
        </div>
        {/* Accordion end */}

        <Link
          className={`p-1 flex items-center cursor-default border-b-2 ${
            location.pathname === '/custom-clothing'
              ? 'border-b-[#FB0036] hover:border-b-[#FB0036]'
              : 'border-b-white hover:border-b-gray-200'
          }`}
          to="custom-clothing"
        >
          {t('menu.customClothing')}
        </Link>
        <Link
          className={`p-1 flex items-center cursor-default border-b-2 ${
            location.pathname === '/contact'
              ? 'border-b-[#FB0036] hover:border-b-[#FB0036]'
              : 'border-b-white hover:border-b-gray-200'
          }`}
          to="contact"
        >
          {t('menu.contact')}
        </Link>
        <div>
          <span>
            <LanguageIcon fontSize={'small'} />
          </span>
          <select
            className="text-xs ml-2 p-1 bg-white border-2 rounded-lg cursor-pointer"
            name="language"
            value={language}
            onChange={(e) => {
              changeLanguage(e.target.value);
            }}
          >
            <option value="nl">&#127475;&#127473; &nbsp;NL</option>
            <option value="en">&#127468;&#127463; &nbsp;EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
