import { useTranslation } from 'react-i18next';

export default function CustomPrint() {
  useTranslation();
  return (
    <div className="flex flex-col w-full justify-start items-center overflow-scroll">
      Custom print page
    </div>
  );
}
