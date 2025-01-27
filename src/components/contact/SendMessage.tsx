import MessageForm from './messageFormSection/MessageForm';
import MessageIntroduction from './messageFormSection/MessageIntroduction';

export default function SendMessage() {
  return (
    <section className="flex pt-4 pb-12">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
