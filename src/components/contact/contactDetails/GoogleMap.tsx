export default function GoogleMap() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 pb-4 sm:pb-0">
      <iframe
        className="w-full h-[300px] border border-gray-400 shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.439114416333!2d6.5630913!3d53.2279044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd433917e0e3%3A0xe989b02452837192!2s&#39;t%20Hartje!5e0!3m2!1snl!2snl!4v1733416775290!5m2!1snl!2snl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
