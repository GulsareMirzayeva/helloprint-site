import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { useEffect, useRef, useState } from 'react';
import { contactFormTextContentPaths } from '../../../lib/translationPaths';

export default function ContactForm() {
  // Subscribes the component to i18n language so when the language changes, the content will be translated inmediatly
  const { t } = useTranslation();

  // Controlled components - Control the values of the input fields
  const [subjectValue, setSubjectValue] = useState<string>();
  const [messageValue, setMessageValue] = useState<string>();

  // Set focus on the 'Subject' input field when the component is loaded
  const subjectInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    subjectInputRef.current?.focus();
  }, []);

  // Update the input values while text is being typed
  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.target.id === 'subject'
      ? setSubjectValue(e.target.value)
      : setMessageValue(e.target.value);
  };

  return (
    <div className="flex flex-col pr-12 mr-12 border-r-2 border-[#FB0036]">
      <TextBlock
        value={contactFormTextContentPaths.sendMessage}
        variant="title"
      />
      <i>
        <TextBlock
          value={contactFormTextContentPaths.messageAlert}
          variant="body"
        />
      </i>
      <form className="flex flex-col pt-12">
        {/* Subject input field */}
        <div className="mb-4">
          <label htmlFor="subject">
            <TextBlock
              value={contactFormTextContentPaths.messageSubject}
              variant="body"
            />
          </label>

          <input
            ref={subjectInputRef}
            type="text"
            id="subject"
            name="subject"
            className="w-[400px] rounded-md mt-1 p-1 pl-2 border"
            value={subjectValue}
            onChange={handleOnChange}
          />
        </div>

        {/* message input field */}
        <div className="mb-2">
          <label htmlFor="message">
            <TextBlock
              value={contactFormTextContentPaths.messageContent}
              variant="body"
            />
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-md w-[400px] h-[140px] mt-1 p-1 pl-2 border"
            value={messageValue}
            onChange={handleOnChange}
          />
        </div>

        {/* Send button */}
        <button
          type="submit"
          className="relative w-full mt-1 h-10 rounded-md bg-[#FB0036] text-white font-bold transition-transform subpixel-antialiased duration-100 ease-in hover:scale-105"
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
