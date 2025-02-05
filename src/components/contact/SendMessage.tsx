import MessageForm from './sendMessage/MessageForm';
import MessageIntroduction from './sendMessage/MessageIntroduction';

// Section with the introduction text and the message form next to it
export default function SendMessage() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 sm:-gap-2 pt-4 pb-12">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
