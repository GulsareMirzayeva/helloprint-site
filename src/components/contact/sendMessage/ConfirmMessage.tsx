import { contactFormTextContentPaths } from '../../../lib/translationPaths';
import { Trans } from 'react-i18next';

export function ConfirmMessage() {
  return (
    <div className="flex justify-start items-center text-center min-w-[400px] md:min-w-[500px] w-full pt-12">
      <div className="bg-green-100 text-green-800 border border-green-300 rounded-lg p-2 py-4 shadow-md">
        <Trans
          i18nKey={contactFormTextContentPaths.confirmMessage}
          components={{ br: <br />, b: <b /> }}
        />
      </div>
    </div>
  );
}
