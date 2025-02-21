import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Page title and introduction, at the top of the page
*/

export default function PageTitleAndIntroduction({
  image,
  title,
  introduction,
  subTitle,
  subText,
}: {
  image?: string;
  title: string;
  introduction: string;
  subTitle?: string;
  subText?: string;
}) {
  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8">
      {/* Image next to the text content, if present */}
      {image && (
        <div>
          <img
            src={image}
            alt="Category image"
            className="max-w-[300px] sm:max-w-[360px] rounded-sm"
          />
        </div>
      )}

      {/* Introduction content */}
      <div>
        <div className="flex-1">
          <TextBlock value={title} variant="pageTitle" />
          <TextBlock value={introduction} variant="body" />
        </div>
        {/* If a subtitle with sub-text is given as argument, display here */}
        {subTitle && subText && (
          <div className="flex flex-col pt-6">
            <TextBlock value={subTitle} variant="subTitle" />
            <TextBlock value={subText} variant="body" />
          </div>
        )}
      </div>
    </section>
  );
}
