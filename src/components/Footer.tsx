export default function Footer() {
  return (
    <div className="flex justify-around h-56 border-t-2 border-[#FB0036] pt-2">
      <div className="flex flex-col">
        <p className="text-sm font-bold pb-2">Voorwaarden</p>
        <a className="text-xs" href="">
          Erkenning voorwaarden
        </a>
        <a className="text-xs" href="">
          Offertes
        </a>
        <a className="text-xs" href="">
          Bestelling
        </a>
        <a className="text-xs" href="">
          Betaling
        </a>
        <a className="text-xs" href="">
          Prijzen
        </a>
        <a className="text-xs" href="">
          Leveringen
        </a>
        <a className="text-xs" href="">
          Klachten
        </a>
      </div>
      <div>
        <p className="text-sm font-bold pb-2">Adres</p>
        <p className="text-xs">Copy & Printshop</p>
        <p className="text-xs">Straatnaam 123</p>
        <p className="text-xs">1234 AB</p>
        <p className="text-xs">Groningen, Nederland</p>
        <a className="text-xs" href="">
          Bekijk op Google Maps
        </a>
      </div>
      <div>
        <p className="text-sm font-bold pb-2">Contact</p>
        <p className="text-xs">Telefoon: 050-1234567</p>
        <p className="text-xs">Email: info@mail.nl</p>
        <p className="text-xs">Facebook</p>
      </div>
      <div>
        <p className="text-sm font-bold pb-2">Openingstijden</p>
        <p className="text-xs font-semibold">Maandag - Vrijdag</p>
        <p className="text-xs">09:00 - 18:00</p>
        <p className="text-xs font-semibold">Zaterdag</p>
        <p className="text-xs">10:00 - 17:00</p>
        <p className="text-xs font-semibold">Zondag</p>
        <p className="text-xs">Gesloten</p>
      </div>
    </div>
  );
}
