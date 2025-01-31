import logo from '../../assets/logo-2020.png';
import { homeContentPaths } from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function WelcomeMessage() {
  return (
    <section className="flex items-center flex-col lg:flex-row px-2 pb-8 md:pb-12 pt-8 md:pt-20 gap-8 md:gap-20">
      {/* Image next to the text content */}
      <div>
        <img
          className="max-w-[320px]"
          src={logo}
          alt="Logo Copy& Printshop 't Hartje"
        />
      </div>

      {/* Introduction content */}
      <div className="flex flex-col items-center text-center gap-6">
        <TextBlock value={homeContentPaths.title} variant="xl5Title" />
        <TextBlock value={homeContentPaths.subTitle} variant="xl2Title" />
        <TextBlock value={homeContentPaths.introduction} variant="body" />
      </div>
    </section>
  );
}
