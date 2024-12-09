import AdressWithMap from '../contact/AdressWithMap';
import SendMessage from '../contact/SendMessage';
import Footer from '../Footer';

export default function Contact() {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <SendMessage />
      <AdressWithMap />
      <Footer />
    </div>
  );
}
