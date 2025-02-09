import { TextBlock } from '../elementTemplates/TextBlock';

/*
    Page title and introduction, at the top of the page
*/

export default function PageTitleAndIntroduction({
  image,
  title,
  introduction,
}: {
  image?: string;
  title: string;
  introduction: string;
}) {
  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-8">
      {/* Image next to the text content, if present */}
      {image && (
        <div>
          <img
            src={image}
            alt="Category image"
            className="max-w-[300px] sm:max-w-[360px]"
          />
        </div>
      )}

      {/* Introduction content */}
      <div className="flex-1">
        <TextBlock value={title} variant="pageTitle" />
        <TextBlock value={introduction} variant="body" />
      </div>
    </section>
  );
}
