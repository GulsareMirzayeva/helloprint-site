import MessageForm from './sendMessage/MessageForm';
import MessageIntroduction from './sendMessage/MessageIntroduction';

// Section with the introduction text and the message form next to it
export default function SendMessage() {
  return (
    <section className="flex pt-4 pb-12">
      <MessageIntroduction />
      <MessageForm />
    </section>
  );
}
