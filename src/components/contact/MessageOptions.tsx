import ContactForm from './contactInfo/ContactForm';
import ContactOptions from './contactInfo/ContactOptions';

export default function MessageOptions() {
  return (
    <section className="flex py-12 ">
      <ContactForm />
      <ContactOptions />
    </section>
  );
}
