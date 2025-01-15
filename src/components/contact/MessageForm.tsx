import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';

export default function MessageForm() {
  // Subscribes the component to i18n language so when the language changes, the content will be translated inmediatly
  const { t } = useTranslation();
  return (
    <form className="flex flex-col pt-8">
      <div className="mb-2">
        <TextBlock value="contactPage.messageSubject" variant="body" />
        <input
          type="text"
          className="w-[400px] rounded-md mt-1 p-1 pl-2 border"
        />
      </div>
      <div className="mb-2">
        <TextBlock value="contactPage.messageContent" variant="body" />
        <textarea className="rounded-md w-[400px] h-[140px] mt-1 p-1 pl-2 border" />
      </div>
      <button
        type="submit"
        className="w-full mt-1 h-10 rounded-md bg-[#FB0036] text-white"
      >
        <b>{t('contactPage.messageSubmit')}</b>
      </button>
    </form>
  );
}
