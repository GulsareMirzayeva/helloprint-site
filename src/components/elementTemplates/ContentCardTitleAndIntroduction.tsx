import { useData } from '../../context/DataContext';
import { PageTitleType } from '../../lib/types/customPrintType';
import { TextBlock } from './TextBlock';

/* 

The title and introduction text on a categorycard

*/

export function ContentCardTitleAndIntroduction({
  props,
}: {
  props: PageTitleType;
}) {
  const { stylePreset } = useData();

  return (
    <div>
      <div className="flex flex-col sm:flex-row py-4 sm:py-0">
        <div className="flex flex-wrap">
          {/* Title */}
          <TextBlock value={props.mainTitle} variant="subTitleMedium" />

          {/* If there is a subtitle, display a dash symbol between maintitle and subtitle as a divider */}
          {props.subTitle && (
            <div className={`flex ${stylePreset.overall.textColorSecondary}`}>
              &nbsp;
              <span className="text-2xl"> - </span>
              &nbsp;
              <div>
                <TextBlock value={props.subTitle} variant="tableSubTitle" />
              </div>
            </div>
          )}
        </div>
      </div>
      {props.notification && (
        <div
          className={`
            pb-6 font-medium
            ${stylePreset.notification.textColor}
          `}
        >
          <div className="flex">
            <TextBlock value={props.notification} variant="body" />
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
      <TextBlock value={props.introduction} variant="body" />
    </div>
  );
}
