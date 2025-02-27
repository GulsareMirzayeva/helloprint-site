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
import emailjs from '@emailjs/browser';
import { emailJSKeys } from '../../../lib/emailSettings/emailJsSettings';
// import { stackApiSettings } from '../../../lib/emailSettings/transIpStackSettings';

export default function MessageForm() {
  const { t } = useTranslation();
  const { stylePreset } = useData();
  const [showError, setShowError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoadingFile] = useState(false);

  // When using TransIP API replace with
  // const [isLoadingFile, setIsLoadingFile] = useState(false);

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

  // When using TransIP API - Upload the file to TransIP Stack with an API request and get the link to the file location on Stack
  // const uploadToStack = async (file: File) => {
  //   try {
  //     // Skip when there is no file selected
  //     if (!file) return null;

  //     // Double check if file has correct size
  //     if (file.size > 25 * 1024 * 1024) {
  //       console.error('Bestand is te groot (max. 25MB toegestaan)');
  //       return null;
  //     }

  //     setIsLoadingFile(true);

  //     // Collect the needed API settings
  //     const stackURL = stackApiSettings.stackURL;
  //     const apiToken = stackApiSettings.apiToken;
  //     const formData = new FormData();

  //     formData.append('file', file);
  //     formData.append('path', `/uploads/${file.name}`);

  //     // Send file to TransIP Stack
  //     const response = await fetch(stackURL, {
  //       method: 'POST',
  //       headers: { Authorization: `Bearer ${apiToken}` },
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(`Upload mislukt: ${errorText}`);
  //     }

  //     const data = await response.json();

  //     // URL of the uploaded file, or nothing due to error
  //     return data.download_url || null;
  //   } catch (error: any) {
  //     console.error('Error uploading file:', error);
  //     return null;
  //   } finally {
  //     // Reset loading state
  //     setIsLoadingFile(false);
  //   }
  // };

  // Show error message if both 'Telephone number' and 'E-mail address' input fields are empty
  // hide error message if one of the two is filled in
  const onSubmit = async (data: FormProps) => {
    if (!data.email && !data.telNo) {
      setShowError(true);
      return;
    }

    // Send the form data to the company email adress with a link to an image on stack (if present)
    try {
      // If there is no file selected, the URL will be empty
      let fileURL = null;

      // When using TransIP API - If there is a file selected, send a mail with a link to the file

      // const selectedFile = data.file[0];

      // if (selectedFile instanceof File) {
      //   fileURL = await uploadToStack(selectedFile);
      // }

      const emailData = {
        from_name: data.name,
        from_telNo: data.telNo,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        file_link: fileURL || 'Geen bestand bijgevoegd',
      };

      await emailjs.send(
        emailJSKeys.serviceId, // EmailJS Service ID
        emailJSKeys.templateId, // EmailJS Template ID
        emailData, // Form data
        emailJSKeys.publicKey // EmailJS Public Key
      );

      // No errors present
      setShowError(false);

      // Data is validated succesfully, show confirm message
      setIsSubmitted(true);
    } catch (error: any) {
      // Data failed validation, show alert with error message
      alert(`${contactFormErrorPaths.errorSendingMail}${error}`);
    }
  };

  return (
    <div className="flex flex-col">
      {isSubmitted ? (
        <ConfirmMessage />
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`
              flex flex-col
              ${stylePreset.contactForm.textColor}
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
                inputMode="text"
                autoComplete="name"
                {...register('name')}
                className={`
                  w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border
                  ${stylePreset.contactForm.backgroundColor}
                  ${stylePreset.contactForm.borderColor}
                `}
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
              type="tel"
              id="telNo"
              inputMode="numeric"
              autoComplete="tel"
              aria-describedby={errors.telNo ? 'tel-error' : undefined}
              aria-invalid={errors.telNo ? 'true' : 'false'}
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
              className={`
                  w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border
                  ${stylePreset.contactForm.backgroundColor}
                  ${stylePreset.contactForm.borderColor}
                `}
              placeholder={t(contactFormTextContentPaths.telephoneNo)}
            />
            {errors.telNo?.message && (
              <p
                id="tel-error"
                className={`
                    pl-1
                    ${stylePreset.notification.textColor}
                    `}
              >
                {String(errors.telNo.message)}
              </p>
            )}

            {/* Email input field */}
            <label className="sr-only" htmlFor="email">
              <TextBlock
                value={contactFormTextContentPaths.formUserEmailAdress}
                variant="body"
              />
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: t(contactFormErrorPaths.emailValidAddress),
                },
              })}
              className={`
                  w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border
                  ${stylePreset.contactForm.backgroundColor}
                  ${stylePreset.contactForm.borderColor}
                `}
              placeholder={t(contactFormTextContentPaths.email)}
            />
            {errors.email?.message && (
              <p
                id="email-error"
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
                className={`
                  w-full max-w-[500px] rounded-sm mt-1 p-1 pl-2 border
                  ${stylePreset.contactForm.backgroundColor}
                  ${stylePreset.contactForm.borderColor}
                `}
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
                aria-describedby={errors.message ? 'message-error' : undefined}
                aria-invalid={errors.message ? 'true' : 'false'}
                {...register('message', {
                  minLength: {
                    value: 10,
                    message: t(contactFormErrorPaths.messageMinChars),
                  },
                  required: t(contactFormErrorPaths.messageRequired),
                })}
                className={`
                  w-full max-w-[500px] md:min-w-[500px] h-[140px] rounded-sm mt-1 p-1 pl-2 border
                  ${stylePreset.contactForm.backgroundColor}
                  ${stylePreset.contactForm.borderColor}
                  `}
                placeholder={t(contactFormTextContentPaths.messageContent)}
              />
              {errors.message && (
                <p
                  id="message-error"
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

            {/* File upload option */}

            {/* <div className="flex flex-col">
              <label htmlFor="file">Upload een bestand</label>
              <input
                type="file"
                id="file"
                accept=".pdf,.jpg,.jpeg,.eps"
                {...register('file', {
                  // Validate selected file
                  validate: (fileList) => {
                    // Do nothing when no file is selected
                    if (!fileList || fileList.length === 0) return true;

                    // Validate file when there is one selected
                    const file = fileList[0];

                    // Check file size (max 25MB)
                    if (file.size > 25 * 1024 * 1024) {
                      return 'Bestand mag maximaal 25MB zijn.';
                    }

                    // Check extension
                    const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'eps'];
                    const fileExtension = file.name
                      .split('.')
                      .pop()
                      ?.toLowerCase();
                    if (
                      !fileExtension ||
                      !allowedExtensions.includes(fileExtension)
                    ) {
                      return 'Alleen PDF, JPG, JPEG of EPS bestanden zijn toegestaan.';
                    }

                    return true;
                  },
                })}
              />
              {isLoadingFile && <p>Uploading file...</p>}
              {errors.file && (
                <p
                  className={`
                  pl-1
                  ${stylePreset.notification.textColor}
                  `}
                >
                  {errors.file.message}
                </p>
              )}
            </div> */}

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
              {isLoadingFile
                ? t(contactFormTextContentPaths.messageSubmitLoading)
                : t(contactFormTextContentPaths.messageSubmit)}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
