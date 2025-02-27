import { useData } from '../../../context/DataContext';
import { contactFormTextContentPaths } from '../../../lib/translationPaths';
import { Trans } from 'react-i18next';

export function ConfirmMessage() {
  const { stylePreset } = useData();
  return (
    <div className="flex justify-start items-center text-center min-w-[300px] md:min-w-[500px] w-full pt-2">
      <div
        className={`
          border rounded-lg p-4 py-4 shadow-md
          ${stylePreset.confirmMessage.textColor}
          ${stylePreset.confirmMessage.backgroundColor}
          ${stylePreset.confirmMessage.borderColor}
          `}
      >
        <Trans
          i18nKey={contactFormTextContentPaths.confirmMessage}
          components={{ br: <br />, b: <b /> }}
        />
      </div>
    </div>
  );
}
