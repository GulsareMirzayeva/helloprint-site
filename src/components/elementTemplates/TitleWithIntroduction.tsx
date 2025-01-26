import { PageTitleType } from '../../lib/types/customPrintType';
import { TextBlock } from './TextBlock';

export function TitleWithIntroduction({ props }: { props: PageTitleType }) {
  return (
    <div>
      <div className="flex">
        <TextBlock value={props.mainTitle} variant="largeTitle" />
        &nbsp;
        <span className="text-3xl"> - </span>
        &nbsp;
        <TextBlock value={props.subTitle} variant="largeTitle" />
      </div>
      <TextBlock value={props.introduction} variant="xlTitleRegular" />
    </div>
  );
}
