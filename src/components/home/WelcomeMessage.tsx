import logo from '../../assets/logo-2020.png';
import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function WelcomeMessage() {
  return (
    <section className="flex my-20 gap-24">
      {/* Image next to the text content */}
      <div>
        <img
          className="max-h-[200px] max-w-[280px]"
          src={logo}
          alt="Logo Copy& Printshop 't Hartje"
        />
      </div>

      {/* Introduction content */}
      <div className="flex flex-col gap-6">
        <TextBlock value="home.title" variant="xl5Title" />
        <TextBlock value="home.subtitle" variant="xl2Title" />
        <TextBlock value="home.introduction" variant="body" />
      </div>
    </section>
  );
}
