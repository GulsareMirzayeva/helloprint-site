import { useData } from '../../context/DataContext';
import { shopInfoPaths } from '../../lib/translationPaths';
import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Text content at the top of the page, the value in the TextBlock components refers to the content location
    in the translation files (i18next folder at the root).
*/

export default function AdjustedHoursSection() {
  // Get acces to styling preset colors
  const { stylePreset } = useData();

  return (
    <section className="flex flex-col place-content-start lg:flex-row px-2 gap-10 lg:gap-28">
      {/* Attention section */}
      <div>
        <div
          className={`
        ${stylePreset.overall.textColorCompanyColor}
        `}
        >
          <TextBlock
            value={shopInfoPaths.adjustedHoursAttention}
            variant="xl4Title"
          />
        </div>
        <div>
          <TextBlock
            value={shopInfoPaths.adjustedHoursIntroduction}
            variant="xlTitleRegular"
          />
        </div>
      </div>

      {/* Adjusten openingshours section */}
      <div>
        <div
          className={`
          ${stylePreset.overall.textColorCompanyColor}`}
        >
          <TextBlock
            value={shopInfoPaths.adjustedHoursTitle}
            variant="xl4Title"
          />
        </div>
        <div className="space-y-1">
          {/* <TextBlock
            value={shopInfoPaths.holidayOne}
            variant="xlTitleRegular"
            /> */}
          {/* <TextBlock
            value={shopInfoPaths.holidayTwo}
            variant="xlTitleRegular"
          /> */}
          {/* <TextBlock
            value={shopInfoPaths.holidayThree}
            variant="xlTitleRegular"
          /> */}
          {/* <TextBlock
            value={shopInfoPaths.holidayFour}
            variant="xlTitleRegular"
          /> */}
          <br />
          <TextBlock
            value={shopInfoPaths.holidayFive}
            variant="xlTitleRegular"
          />
        </div>
      </div>
    </section>
  );
}
