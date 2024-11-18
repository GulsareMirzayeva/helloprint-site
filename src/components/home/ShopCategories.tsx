import { useTranslation, Trans } from 'react-i18next';

import leaflet from '../../assets/icons8-half-fold-leaflet-100.png';
import paper from '../../assets/icons8-paper-96.png';
import tshirt from '../../assets/icons8-tshirt-100.png';
import supplies from '../../assets/office_supplies-100.png';

export default function ShopCategories() {
  const { t } = useTranslation();
  const icons = [paper, leaflet, tshirt, supplies];

  const categoryCardsContent = t('categoryCardsContent', {
    returnObjects: true,
  });

  return (
    <div className="flex justify-center my-24 gap-12">
      {Object.entries(categoryCardsContent).map(([key, value]) => (
        <div
          key={key}
          className="flex flex-col justify-between border shadow-md w-64"
        >
          <div className="flex justify-center p-2 bg-[#FB0036] shadow-[0_5px_5px_-5px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white ">{value.title}</h2>
          </div>
          <div className="flex justify-center p-2">
            <img
              className="p-2 h-[100px] w-[100px]"
              src={icons[value.icon]}
              alt="Category icon"
            />
          </div>
          <div>
            <p className="text-md px-4">{value.introduction}</p>
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
        </div>
      ))}
    </div>
  );
}
