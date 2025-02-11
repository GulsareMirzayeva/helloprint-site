import PricingTable from './PricingTable';
import { useData } from '../../../context/DataContext';
import { TextBlock } from '../TextBlock';
import {
  HeaderType,
  TableContentType,
} from '../../../lib/types/contentCardTypes';

/*
    The content card contains a title, subtile and an introcduction text followed by one ore more
    pricing tables. These cards are shown on product pages where the prices are displayed.

    It receives an array of objects that contains text content and a data array with objects 
    for the pricing table(s).

    The value of the content are paths (strings) that refer to the corresponding translations 

    *****************************

    Structure of incoming data:

    <ContentCard
      bgColor={''}
      headerContent={{
        cardTitle: '',
        cardSubTitle: 'undefined', // Not mandatory
        cardIntroduction: '',
        notification: undefined // Not mandatory
      }}
      tableContent={[]}
    />

    *****************************

    The tableContent array accepts data objects that are structured as followed:

    const table = {
        hasAsterisk: false, // Tells if the table title should have a reference (*) to a notification
        tableTitle: '',
        tableSubTitle: '',
        data: {
          headerTitles: [],
          image: '',  // Not mandatory
          units: [],
          options: [],
          prices: '',
        },
      };
*/

export default function ContentCard({
  bgColor,
  headerContent,
  tableContent,
}: {
  bgColor: string;
  headerContent: HeaderType;
  tableContent: TableContentType[];
}) {
  // Get acces to styling presets used for styling the card
  const { stylePreset } = useData();

  return (
    <section
      className={`
        flex flex-col p-4 sm:p-8 w-full rounded-lg shadow-sm
        ${bgColor}
        ${stylePreset.categoryCard.borderColor}
      `}
    >
      {/* Card title */}
      <div className="flex flex-wrap">
        <TextBlock value={headerContent.cardTitle} variant="cardTitle" />

        {/* If there is a subtitle, display a dash symbol between maintitle and subtitle as a divider */}
        {headerContent.cardSubTitle && (
          <div className={`flex ${stylePreset.overall.textColorSecondary}`}>
            &nbsp;
            <span className="text-2xl"> - </span>
            &nbsp;
            <div>
              <TextBlock
                value={headerContent.cardSubTitle}
                variant="cardTitle"
              />
            </div>
          </div>
        )}
      </div>

      {/* If there is a notification message (like delivery time), display it beneath the introduction */}
      {headerContent.notification && (
        <div
          className={`
            pb-2 font-medium
            ${stylePreset.notification.textColor}
          `}
        >
          <div className="flex">
            <TextBlock value={headerContent.notification} variant="body" />
            <div
              className={`
                font-semibold
                ${stylePreset.notification.asteriskColor}
              `}
            >
              <span>*</span>
            </div>
          </div>
        </div>
      )}

      {/* Introduction text content */}
      <div className="pt-1">
        <TextBlock value={headerContent.cardIntroduction} variant="body" />
      </div>

      {/* Tables - Display a heading with title and subtile (if present), followed by the pricing table itself */}
      <div className="flex flex-col flex-wrap sm:flex-row gap-8 sm:gap-x-24 pt-8">
        {tableContent.map((table, index) => (
          <div className="flex" key={index}>
            <div className="flex flex-col">
              <div className="flex">
                <TextBlock value={table.tableTitle} variant="tableTitle" />
                {/* Check wheter an asrterisk symbol needs to be displayed or not */}
                {table.hasAsterisk && (
                  <div
                    className={`
                    ${stylePreset.notification.asteriskColor}
                    `}
                  >
                    <span>*</span>
                  </div>
                )}
              </div>
              <TextBlock value={table.tableSubTitle} variant="tableSubTitle" />

              {/* The pricing table itself */}
              <div className="flex flex-col lg:flex-row items-start">
                <div>
                  <PricingTable
                    headerTitles={table.data.headerTitles}
                    units={table.data.units}
                    options={table.data.options}
                    prices={table.data.prices}
                  />
                </div>
                <div>
                  {table.data.image && (
                    <div className="pt-8 lg:pt-0 lg:pl-20 max-w-[400px] md:max-w-full">
                      <img src={table.data.image} alt="Table image" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
