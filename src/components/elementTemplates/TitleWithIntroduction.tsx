import { colorPresets } from '../../lib/stylePresets';
import { PageTitleType } from '../../lib/types/customPrintType';
import { TextBlock } from './TextBlock';

export function TitleWithIntroduction({ props }: { props: PageTitleType }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row py-4 sm:py-0">
        <div className="flex">
          <TextBlock value={props.mainTitle} variant="subTitleMedium" />
          &nbsp;
          <span className="text-2xl"> - </span>
          &nbsp;
        </div>
        <div>
          <TextBlock value={props.subTitle} variant="tableSubTitle" />
        </div>
      </div>
      {props.notification && (
        <div
          style={{ color: colorPresets.notification.textColor }}
          className="pb-6 font-medium"
        >
          <TextBlock value={props.notification} variant="body" />
        </div>
      )}
      <TextBlock value={props.introduction} variant="body" />
    </div>
  );
}
