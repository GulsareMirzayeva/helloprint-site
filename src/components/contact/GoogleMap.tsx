export default function GoogleMap() {
  return (
    <iframe
      className="shadow-[0_5px_5px_-5px_rgba(0,0,0,0.5)] border border-gray-300"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.439114416333!2d6.5630913!3d53.2279044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd433917e0e3%3A0xe989b02452837192!2s&#39;t%20Hartje!5e0!3m2!1snl!2snl!4v1733416775290!5m2!1snl!2snl"
      width="460"
      height="300"
      allowFullScreen={true}
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
