import logo_light from '../../assets/logo-2020-lightmodus.png';
import logo_dark from '../../assets/logo-2020-darkmodus.png';
import { homeContentPaths } from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';
import { useData } from '../../context/DataContext';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function WelcomeMessage() {
  const { darkMode } = useData();

  return (
    <section className="flex items-center flex-col lg:flex-row px-2 gap-8 md:gap-20">
      {/* Image next to the text content */}
      <div>
        <img
          className="max-w-[320px]"
          src={darkMode ? logo_dark : logo_light}
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
