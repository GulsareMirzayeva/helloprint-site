import { FieldError, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TextBlock } from '../../elementTemplates/TextBlock';
import {
  contactFormErrorPaths,
  contactFormTextContentPaths,
} from '../../../lib/translationPaths';
import { useEffect, useState } from 'react';
import i18n from '../../../utils/i18';
import { FormProps } from '../../../lib/types/contactFormTypes';
import { ConfirmMessage } from './ConfirmMessage';

export default function MessageForm() {
  const { t } = useTranslation();
  const [showError, setShowError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormProps>();

  // Validate when language is changed and translate the error messages
  // Only validate when if there are errors shown
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      trigger();
    }
  }, [i18n.language]);

  // Show error message if both 'Telephone number' and 'E-mail address' input fields are empty
  // hide error message if one of the two is filled in
  const onSubmit = (data: FormProps) => {
    if (!data.email && !data.telNo) {
      setShowError(true);
      return;
    }
    console.log(data);

    // No errors present
    setShowError(false);

    // Data is validated succesfully, show confirm message
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {isSubmitted ? (
        <ConfirmMessage />
      ) : (
        <>
          <TextBlock
            value={contactFormTextContentPaths.sendMessage}
            variant="subTitle"
          />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            {/* Name input field */}
            <div className="mb-2">
              <label className="sr-only" htmlFor="name">
                <TextBlock
                  value={contactFormTextContentPaths.formUserName}
                  variant="body"
                />
              </label>

              <input
                type="text"
                id="name"
                {...register('name')}
                className="w-full min-w-[300px] sm:min-w-[400px] md:min-w-[500px] max-w-full rounded-sm mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.formUserName)}
              />
            </div>

            {/* Telephone number input field */}
            <div className="mb-2">
              <label className="sr-only" htmlFor="telNo">
                <TextBlock
                  value={contactFormTextContentPaths.formUserTelNumber}
                  variant="body"
                />
              </label>

              <input
                type="text"
                id="telNo"
                {...register('telNo', {
                  pattern: {
                    value: /^[0-9]+$/, // Only numbers
                    message: t(contactFormErrorPaths.telNoOnlyNumbers),
                  },
                  minLength: {
                    value: 10,
                    message: t(contactFormErrorPaths.telNoMinNumbers),
                  },
                  maxLength: {
                    value: 15,
                    message: t(contactFormErrorPaths.telNoMaxNumbers),
                  },
                })}
                className="w-full min-w-[300px] sm:min-w-[400px] md:min-w-[500px] max-w-full rounded-sm mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.telephoneNo)}
              />
              {errors.telNo?.message && (
                <p className="pl-1 text-[#FB0036]">
                  {String(errors.telNo.message)}
                </p>
              )}

              {/* Email input field */}
              <input
                type="text"
                id="email"
                {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: t(contactFormErrorPaths.emailValidAddress),
                  },
                })}
                className="w-full min-w-[300px] sm:min-w-[400px] md:min-w-[500px] max-w-full rounded-sm mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.email)}
              />
              {errors.email?.message && (
                <p className="pl-1 text-[#FB0036]">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/* Subject input field */}
            <div className="mb-2">
              <label className="sr-only" htmlFor="subject">
                <TextBlock
                  value={contactFormTextContentPaths.messageSubject}
                  variant="body"
                />
              </label>

              <input
                type="text"
                id="subject"
                {...register('subject')}
                className="w-full min-w-[300px] sm:min-w-[400px] md:min-w-[500px] max-w-full rounded-sm mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.messageSubject)}
              />
            </div>

            {/* message input field */}
            <div className="mb-2">
              <label className="sr-only" htmlFor="message">
                <TextBlock
                  value={contactFormTextContentPaths.messageContent}
                  variant="body"
                />
              </label>
              <textarea
                id="message"
                {...register('message', {
                  minLength: {
                    value: 10,
                    message: t(contactFormErrorPaths.messageMinChars),
                  },
                  required: t(contactFormErrorPaths.messageRequired),
                })}
                className="rounded-sm w-full min-w-[300px] sm:min-w-[400px] md:min-w-[500px] max-w-full h-[140px] mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.messageContent)}
              />
              {errors.message && (
                <p className="pl-1 text-[#FB0036]">
                  {(errors.message as FieldError).message}
                </p>
              )}
            </div>

            {/* Display error message when no e-mail address OR telephone number is given */}
            {showError && !errors.email && !errors.telNo && (
              <p className="pl-1 text-[#FB0036]">
                {t(contactFormErrorPaths.requiredEmailOrTelNo)}
              </p>
            )}

            {/* Send button */}
            <button
              type="submit"
              className="relative w-32 mt-1 h-10 rounded-sm bg-[#FB0036] text-white transition-bg duration-100 ease-in hover:bg-[#FF3366]"
              style={{
                backfaceVisibility: 'hidden',
                willChange: 'transform',
              }}
            >
              {t(contactFormTextContentPaths.messageSubmit)}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
