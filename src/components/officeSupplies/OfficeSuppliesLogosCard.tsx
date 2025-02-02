import logo1 from '../../assets/officeSupplies/logoipsum-214.png';
import logo2 from '../../assets/officeSupplies/logoipsum-245.png';
import logo3 from '../../assets/officeSupplies/logoipsum-264.png';
import logo6 from '../../assets/officeSupplies/logoipsum-317.png';
import logo8 from '../../assets/officeSupplies/logoipsum-332.png';
import logo9 from '../../assets/officeSupplies/logoipsum-333.png';

const logoList = [logo1, logo2, logo6, logo3, logo8, logo9];

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function OfficeSuppliesLogosCard() {
  return (
    <section className="flex flex-col flex-wrap items-center gap-16 my-8 md:flex-row p-4 sm:p-8 w-full rounded-xl">
      {logoList.map((logo) => (
        <div className="">
          <img src={logo} alt="Company logo" />
        </div>
      ))}
    </section>
  );
}
