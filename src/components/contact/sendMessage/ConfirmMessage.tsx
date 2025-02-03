import { colorPresets } from '../../../lib/stylePresets';
import { contactFormTextContentPaths } from '../../../lib/translationPaths';
import { Trans } from 'react-i18next';

export function ConfirmMessage() {
  return (
    <div className="border-green-300 flex justify-start items-center text-center min-w-[300px] md:min-w-[500px] w-full pt-12">
      <div
        style={{
          backgroundColor: colorPresets.confirmMessage.backgroundColor,
          color: colorPresets.confirmMessage.textColor,
          borderColor: colorPresets.confirmMessage.borderColor,
        }}
        className="border rounded-lg p-4 py-4 shadow-md"
      >
        <Trans
          i18nKey={contactFormTextContentPaths.confirmMessage}
          components={{ br: <br />, b: <b /> }}
        />
      </div>
    </div>
  );
}
