import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import { useData } from '../../context/DataContext';
import { terms } from '../../lib/termsOfSaleItems';

export default function TermsOfSaleContent() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors and selected term
  const { activeTerm, stylePreset } = useData();

  return (
    <section className="flex justify-center p-2 w-full">
      <div className="flex flex-col justify-center py-8">
        <div className="flex p-2">
          <TextBlock value="termsOfSale.title" variant="xl2Title" />
        </div>

        {/* Display all terms from the termsOfSaleItems list, highlight the background if the term is active */}
        {terms.map(({ term }) => (
          <div
            key={term}
            className={
              activeTerm == term
                ? `p-2 ${stylePreset.categoryCard.backgroundColorActive}`
                : 'p-2'
            }
          >
            <TextBlock value={`termsOfSale.${term}.title`} variant="bold" />
            <TextBlock
              value={`termsOfSale.${term}.termContent`}
              variant="body"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
