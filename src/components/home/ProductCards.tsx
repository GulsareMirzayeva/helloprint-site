import { useTranslation, Trans } from 'react-i18next';

import leaflet from '../../assets/icons/icons8-half-fold-leaflet-100.png';
import paper from '../../assets/icons/icons8-paper-96.png';
import tshirt from '../../assets/icons/icons8-tshirt-100.png';
import supplies from '../../assets/icons/office_supplies-100.png';
import { homeContentPaths } from '../../lib/translationPaths';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export default function ProductCards() {
  // Make text content translatable
  const { t } = useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Create a list of icons
  const icons = [paper, leaflet, tshirt, supplies];

  // Get text content for product cards on the homepage
  const categoryCardsContent = t('categoryCardsContent', {
    returnObjects: true,
  });

  return (
    <section className="flex flex-wrap justify-center items-start gap-12">
      {Object.entries(categoryCardsContent).map(([key, value]) => (
        <div
          key={key}
          className={`
            flex flex-col justify-between border shadow-md w-64
            ${stylePreset.productCard.borderColor}
            `}
        >
          <div
            className={`
              flex justify-center p-2 shadow-[0_5px_5px_-5px_rgba(0,0,0,0.5)]
              ${stylePreset.productCard.headBackgroundColor}
              `}
          >
            <h2
              className={`
                text-xl font-bold
                ${stylePreset.productCard.titleColor}
                `}
            >
              {value.title}
            </h2>
          </div>
          <div className="flex justify-center p-2 ">
            <img
              className="p-2 h-[100px] w-[100px] bg-gray-50 rounded-md"
              src={icons[value.icon]}
              alt="Category icon"
            />
          </div>
          <div>
            <p className="h-full text-md px-4">{value.introduction}</p>
          </div>
          <div className="mt-4 px-2">
            <ul className="grid grid-cols-2 mb-4">
              {value.content.map((item: string, index: number) => (
                <li key={index} className="list-disc ml-4 text-sm font-bold">
                  <Trans>{item}</Trans>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start p-3">
            <Link
              to={value.link}
              className={`
                relative flex items-center justify-center w-32 mt-1 h-10 rounded-sm transition-bg duration-100 ease-in
                ${stylePreset.button.textColor}
                ${stylePreset.button.backgroundColor}
                ${stylePreset.button.backgroundHover}`}
              style={{
                backfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
            >
              {t(homeContentPaths.readMore)}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
