import MessageForm from './messageFormSection/MessageForm';
import MessageIntroduction from './messageFormSection/MessageIntroduction';

export default function SendMessage() {
  return (
    <section className="flex py-12">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
