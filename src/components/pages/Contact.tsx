import LocationAdressWithHours from '../contact/locationInfo/LocationAdressWithHours';
import MessageOptions from '../contact/MessageOptions';
import Footer from '../Footer';

export default function Contact() {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <MessageOptions />
      <LocationAdressWithHours />
      <Footer />
    </div>
  );
}
