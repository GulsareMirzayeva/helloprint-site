import MessageForm from './sendMessage/MessageForm';
import MessageIntroduction from './sendMessage/MessageIntroduction';

// Section with the introduction text and the message form next to it
export default function SendMessage() {
  return (
    <section className="flex flex-col md:flex-row gap-2 pt-4 pb-12">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
