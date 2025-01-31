import { useTranslation } from 'react-i18next';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { FooterTermsOfSaleLinks } from '../../lib/types/footerTermsofSaleLinkTypes';
import { terms } from '../../lib/termsOfSaleItems';
import { shopInfoPaths } from '../../lib/translationPaths';

export default function TermsOfSaleSection() {
  const { setActiveTerm } = useData();
  const { t } = useTranslation();

  const handleClick = (term: FooterTermsOfSaleLinks) => {
    setActiveTerm(term);
  };

  return (
    <div className="flex flex-col min-w-[140px]">
      <p className="text-sm font-bold pb-2">
        {t(shopInfoPaths.termsOfSaleTitle)}
      </p>

      {/* Create a link for each term in the termsOfSale list */}
      {terms.map(({ term, label }) => (
        <Link
          key={term}
          className="text-xs"
          to="/terms-of-sale"
          onClick={() => handleClick(term as FooterTermsOfSaleLinks)}
        >
          {t(label)}
        </Link>
      ))}
    </div>
  );
}
