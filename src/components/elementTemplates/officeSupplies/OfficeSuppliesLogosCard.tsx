import { officeSuppliesPaths } from '../../../lib/translationPaths';

/*
    Office supplies page, displays a list of logos next to each other
*/

export default function OfficeSuppliesLogosCard() {
  return (
    <section className="flex flex-col flex-wrap items-center gap-16 my-8 md:flex-row p-4 sm:p-8 w-full rounded-xl">
      {officeSuppliesPaths.data.logoList.map((logo, index) => (
        <img key={index} src={logo} alt="Company logo" />
      ))}
    </section>
  );
}
