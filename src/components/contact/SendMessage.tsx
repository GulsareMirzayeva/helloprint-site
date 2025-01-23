import MessageForm from './messageFormSection/MessageForm';
import MessageIntroduction from './messageFormSection/MessageIntroduction';

export default function SendMessage() {
  return (
    <section className="flex pt-6 pb-8">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
