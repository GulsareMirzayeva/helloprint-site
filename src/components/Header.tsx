export default function Header() {
  return (
    <header>
      <nav className="z-10 flex justify-center gap-16 items-center shadow-md h-14">
        {/* Make these menu options render dynamicly so that adding new pages will be easier */}
        <span>Home</span>
        <span>Kopieren & Printen</span>
        <span>Drukwerk</span>
        <span>Kleding & Textiel</span>
        <span>Contact</span>
        <select className="p-1" name="language" id="">
          <option value="nl">Nl</option>
          <option value="en">En</option>
        </select>
      </nav>
    </header>
  );
}
