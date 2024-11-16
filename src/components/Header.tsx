import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="z-10 flex justify-center gap-16 items-center shadow-md h-14">
        {/* Make these menu options render dynamicly so that adding new pages will be easier */}
        <Link to="/">Home</Link>
        <Link to="copy-print">Kopieren & Printen</Link>
        <Link to="custom-printing">Drukwerk</Link>
        <Link to="custom-clothing">Kleding & Textiel</Link>
        <Link to="contact">Contact</Link>
        <select className="p-1" name="language" id="">
          <option value="nl">Nl</option>
          <option value="en">En</option>
        </select>
      </nav>
    </header>
  );
}
