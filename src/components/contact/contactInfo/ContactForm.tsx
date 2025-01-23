import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { useState } from 'react';
import { contactFormTextContentPaths } from '../../../lib/translationPaths';

export default function ContactForm() {
  // Subscribes the component to i18n language so when the language changes, the content will be translated inmediatly
  const { t } = useTranslation();

  // Controlled components - Control the values of the input fields
  const [formSubject, setFormSubject] = useState<string>();
  const [formMessage, setFormMessage] = useState<string>();
  const [formUserName, setFormUserName] = useState<string>();
  const [formTelNumber, setFormTelNumber] = useState<string>();
  const [formEmailAdress, setFormEmailAdress] = useState<string>();

  // Update the input values while text is being typed
  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    switch (e.target.id) {
      case 'name':
        setFormUserName(e.target.value);
        break;
      case 'telNo':
        setFormTelNumber(e.target.value);
        break;
      case 'email':
        setFormEmailAdress(e.target.value);
        break;
      case 'subject':
        setFormSubject(e.target.value);
        break;
      case 'message':
        setFormMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col pl-20">
      <TextBlock
        value={contactFormTextContentPaths.sendMessage}
        variant="title"
      />

      <form className="flex flex-col pt-4">
        {/* Name input field */}
        <div className="mb-2">
          <label className="sr-only" htmlFor="name">
            <TextBlock
              value={contactFormTextContentPaths.formUserName}
              variant="body"
            />
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="w-[400px] rounded-sm mt-1 p-1 pl-2 border"
            value={formUserName}
            onChange={handleOnChange}
            placeholder={t(contactFormTextContentPaths.formUserName)}
          />
        </div>

        {/* Telephone number input field */}
        <div className="mb-2">
          <label className="sr-only" htmlFor="telNo">
            <TextBlock
              value={contactFormTextContentPaths.formUserTelNumber}
              variant="body"
            />
          </label>

          <input
            type="text"
            id="telNo"
            name="telNo"
            className="w-[400px] rounded-sm mt-1 p-1 pl-2 border"
            value={formTelNumber}
            onChange={handleOnChange}
            placeholder={t(contactFormTextContentPaths.formUserTelNumber)}
          />
        </div>

        {/* E-nail adress input field */}
        <div className="mb-2">
          <label className="sr-only" htmlFor="email">
            <TextBlock
              value={contactFormTextContentPaths.formUserEmailAdress}
              variant="body"
            />
          </label>

          <input
            type="text"
            id="email"
            name="email"
            className="w-[400px] rounded-sm mt-1 p-1 pl-2 border"
            value={formEmailAdress}
            onChange={handleOnChange}
            placeholder={t(contactFormTextContentPaths.formUserEmailAdress)}
          />
        </div>

        {/* Subject input field */}
        <div className="mb-2">
          <label className="sr-only" htmlFor="subject">
            <TextBlock
              value={contactFormTextContentPaths.messageSubject}
              variant="body"
            />
          </label>

          <input
            type="text"
            id="subject"
            name="subject"
            className="w-[400px] rounded-sm mt-1 p-1 pl-2 border"
            value={formSubject}
            onChange={handleOnChange}
            placeholder={t(contactFormTextContentPaths.messageSubject)}
          />
        </div>

        {/* message input field */}
        <div className="mb-2">
          <label className="sr-only" htmlFor="message">
            <TextBlock
              value={contactFormTextContentPaths.messageContent}
              variant="body"
            />
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-sm w-[400px] h-[140px] mt-1 p-1 pl-2 border"
            value={formMessage}
            onChange={handleOnChange}
            placeholder={t(contactFormTextContentPaths.messageContent)}
          />
        </div>

        {/* Send button */}
        <button
          type="submit"
          className="relative w-32 mt-1 h-10 rounded-sm bg-[#FB0036] text-white transition-bg duration-100 ease-in hover:bg-[#FF3366]"
          style={{
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
        >
          {t(contactFormTextContentPaths.messageSubmit)}
        </button>
      </form>
    </div>
  );
}
