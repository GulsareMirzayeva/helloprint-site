import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'nl');

  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Change language
  const changeLanguage = (language: string) => {
    setLanguage(language);
    i18n.changeLanguage(language);
  };

  // Open the accordion with a delay of 1 second
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    openTimeoutRef.current = setTimeout(() => {
      setAccordionOpen(true);
    }, 1000);
  };

  // Close the accordion with a delay of 1 second
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

  // Close menu immediately when clicking an accordion link
  const handleLinkClick = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setAccordionOpen(false);
  };

  return (
    <header>
      <nav className="flex justify-center gap-16 items-center shadow-md h-16">
        <Link to="/">{t('menu.home')}</Link>
        <Link to="copy-print">{t('menu.copyPrint')}</Link>

        {/* Accordion start */}
        <div
          ref={accordionRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Drukwerk/Custom printing button */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleOpen}
          >
            <button
              aria-label="Toggle custom printing submenu"
              className="mr-2"
            >
              {t('menu.customPrinting')}
            </button>
            {isAccordionOpen ? (
              <KeyboardArrowUpIcon className="mt-1" />
            ) : (
              <KeyboardArrowDownIcon className="mt-1" />
            )}
          </div>

          {/* Accordion content */}
          {isAccordionOpen && (
            <ul className="absolute top-[calc(100%+2px)] min-w-[110%] mt-4 bg-white shadow-md rounded-sm">
              <Link to="/custom-printing/stickers" onClick={handleLinkClick}>
                <li className="p-2 hover:bg-gray-200">Stickers</li>
              </Link>
              <Link
                to="/custom-printing/business-cards"
                onClick={handleLinkClick}
              >
                <li className="p-2 hover:bg-gray-200">{t('menu.cards')}</li>
              </Link>
              <Link to="/custom-printing/flyers" onClick={handleLinkClick}>
                <li className="p-2 hover:bg-gray-200">Flyers</li>
              </Link>
              <Link to="/custom-printing/folders" onClick={handleLinkClick}>
                <li className="p-2 hover:bg-gray-200">Folders</li>
              </Link>
              <Link to="/custom-printing/posters" onClick={handleLinkClick}>
                <li className="p-2 hover:bg-gray-200">Posters</li>
              </Link>
            </ul>
          )}
        </div>
        {/* Accordion end */}

        <Link to="custom-clothing">{t('menu.customClothing')}</Link>
        <Link to="contact">{t('menu.contact')}</Link>
        <div>
          <span>
            <LanguageIcon fontSize={'small'} />
          </span>
          <select
            className="text-xs ml-1 p-1 bg-white border-2 rounded-lg"
            name="language"
            value={language}
            onChange={(e) => {
              changeLanguage(e.target.value);
            }}
          >
            <option value="nl">&#127475;&#127473; NL</option>
            <option value="en">&#127468;&#127463; EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
