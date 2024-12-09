import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';

export default function MessageForm() {
  // Subscribes the component to i18n language so when the language changes, the content will be translated inmediatly
  const { t } = useTranslation();
  return (
    <form className="flex flex-col pt-10">
      <div className="mb-2">
        <b>
          <TextBlock value="contactPage.messageSubject" variant="body" />
        </b>
        <input type="text" className="w-[400px] rounded-md mt-1" />
      </div>
      <div className="mb-2">
        <b>
          <TextBlock value="contactPage.messageContent" variant="body" />
        </b>
        <textarea className="rounded-md w-[400px] h-[140px] mt-1" />
      </div>
      <button
        type="submit"
        className="w-24 h-8 rounded-md bg-[#FB0036] text-white"
      >
        <b>{t('contactPage.messageSubmit')}</b>
      </button>
    </form>
  );
}
