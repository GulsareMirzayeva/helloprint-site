import { useTranslation } from 'react-i18next';

function ErrorPage({ error }: { error: string }) {
  useTranslation();

  return (
    <div className="flex justify-center pt-60 h-dvh p-6">
      <div className="flex justify-center items-center w-auto h-20">
        <p className="text-xl px-2">Error:&nbsp;{error}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
