import { useTranslation } from 'react-i18next';
import { TextBlock } from '../elementTemplates/TextBlock';
import { useData } from '../../context/DataContext';

export default function TermsOfSaleContent() {
  useTranslation();
  const { activeTerm } = useData();

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center my-20">
        <div className="flex p-4">
          <TextBlock value="termsOfSale.title" variant="title" />
        </div>

        {/* Term one */}

        <div className={activeTerm == 'term-1' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-1.title" variant="bold" />
          <TextBlock value="termsOfSale.term-1.termContent" variant="body" />
        </div>

        {/* Term Two */}

        <div className={activeTerm == 'term-2' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-2.title" variant="bold" />
          <TextBlock value="termsOfSale.term-2.termContent" variant="body" />
        </div>

        {/* Term Three */}

        <div className={activeTerm == 'term-3' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-3.title" variant="bold" />
          <TextBlock value="termsOfSale.term-3.termContent" variant="body" />
        </div>

        {/* Term Four */}

        <div className={activeTerm == 'term-4' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-4.title" variant="bold" />
          <TextBlock value="termsOfSale.term-4.termContent" variant="body" />
        </div>

        {/* Term Five */}

        <div className={activeTerm == 'term-5' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-5.title" variant="bold" />
          <TextBlock value="termsOfSale.term-5.termContent" variant="body" />
        </div>

        {/* Term Six */}

        <div className={activeTerm == 'term-6' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-6.title" variant="bold" />
          <TextBlock value="termsOfSale.term-6.termContent" variant="body" />
        </div>

        {/* Term Seven */}

        <div className={activeTerm == 'term-7' ? 'p-4 bg-gray-100' : 'p-4'}>
          <TextBlock value="termsOfSale.term-7.title" variant="bold" />
          <TextBlock value="termsOfSale.term-7.termContent" variant="body" />
        </div>
      </div>
    </div>
  );
}
