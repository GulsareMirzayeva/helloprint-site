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
import { useData } from '../../../context/DataContext';

export default function MessageForm() {
  const { t } = useTranslation();
  const { stylePreset } = useData();
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`
              flex flex-col
              ${stylePreset.overall.formTextColor}
            `}
          >
            {/* Name input field */}
            <div>
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
                className="w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.formUserName)}
              />
            </div>

            {/* Telephone number input field */}
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
              className="w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border"
              placeholder={t(contactFormTextContentPaths.telephoneNo)}
            />
            {errors.telNo?.message && (
              <p
                className={`
                    pl-1
                    ${stylePreset.notification.textColor}
                    `}
              >
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
              className="w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border"
              placeholder={t(contactFormTextContentPaths.email)}
            />
            {errors.email?.message && (
              <p
                className={`
                    pl-1
                    ${stylePreset.notification.textColor}
                    `}
              >
                {String(errors.email.message)}
              </p>
            )}

            {/* Subject input field */}
            <div>
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
                className="w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border"
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
                className="w-full max-w-[500px] md:min-w-[500px] h-[140px] rounded-sm mt-1 p-1 pl-2 border"
                placeholder={t(contactFormTextContentPaths.messageContent)}
              />
              {errors.message && (
                <p
                  className={`
                  pl-1
                  ${stylePreset.notification.textColor}
                  `}
                >
                  {(errors.message as FieldError).message}
                </p>
              )}
            </div>

            {/* Display error message when no e-mail address OR telephone number is given */}
            {showError && !errors.email && !errors.telNo && (
              <p
                className={`
                pl-1
                ${stylePreset.notification.textColor}
                `}
              >
                {t(contactFormErrorPaths.requiredEmailOrTelNo)}
              </p>
            )}

            {/* Send button */}
            <button
              type="submit"
              className={`
                relative w-32 mt-1 h-10 rounded-sm transition-bg duration-100 ease-in
                ${stylePreset.button.textColor}
                ${stylePreset.button.backgroundColor}
                ${stylePreset.button.backgroundHover}`}
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
