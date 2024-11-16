import { useState } from 'react';
import { Link } from 'react-router-dom';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

export default function Header() {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const handleOpen = () => {
    setAccordionOpen((prev) => !prev); // Toggle accordion state
  };

  return (
    <header>
      <nav className="flex justify-center gap-16 items-center shadow-md h-16">
        <Link to="/">Home</Link>
        <Link to="copy-print">Kopieren & Printen</Link>

        {/* Accordion start */}
        <div className="relative">
          {/* Drukwerk/Custom printing button */}
          <div
            className="flex items-center cursor-pointer"
            onClick={handleOpen}
          >
            <button
              aria-label="Toggle custom printing submenu"
              className="mr-2"
            >
              Drukwerk
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
              <li className="p-2 hover:bg-gray-200">
                <Link to="/custom-printing/stickers">Stickers</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/custom-printing/business-cards">Cards</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/custom-printing/flyers">Flyers</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/custom-printing/folders">Folders</Link>
              </li>
              <li className="p-2 hover:bg-gray-200">
                <Link to="/custom-printing/posters">Posters</Link>
              </li>
            </ul>
          )}
        </div>
        {/* Accordion end */}

        <Link to="custom-clothing">Kleding & Textiel</Link>
        <Link to="contact">Contact</Link>
        <div>
          <span>
            <LanguageIcon fontSize={'small'} />
          </span>
          <select
            className="text-xs ml-1 p-1 bg-white border-2 rounded-lg"
            name="language"
          >
            <option value="nl">&#127475;&#127473; NL</option>
            <option value="en">&#127468;&#127463; EN</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
