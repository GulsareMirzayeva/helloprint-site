import { PageTitleType } from '../../lib/types/customPrintType';
import { TextBlock } from './TextBlock';

export function TitleWithIntroduction({ props }: { props: PageTitleType }) {
  return (
    <div>
      <div className="flex">
        <TextBlock value={props.mainTitle} variant="subTitleMedium" />
        &nbsp;
        <span className="text-2xl"> - </span>
        &nbsp;
        <TextBlock value={props.subTitle} variant="tableSubTitle" />
      </div>
      <TextBlock value={props.introduction} variant="body" />
    </div>
  );
}
