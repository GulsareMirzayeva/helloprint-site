import MessageForm from './messageFormSection/MessageForm';
import MessageIntroduction from './messageFormSection/MessageIntroduction';

export default function SendMessage() {
  return (
    <section className="flex py-8 max-w-[1000px]">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
