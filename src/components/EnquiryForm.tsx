import { useState } from 'react';
import type { FormEvent } from 'react';
import type { SiteContent } from '../content/types';
import { submitEnquiry } from '../forms/formspree';
import { confirmationPaths, legalPaths, pageUrl } from '../locales';

interface EnquiryFormProps {
  content: SiteContent;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export function EnquiryForm({ content }: EnquiryFormProps) {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [careDaysError, setCareDaysError] = useState('');
  const [timeError, setTimeError] = useState('');
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim();
  const form = content.contact;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    const hasCareDay = data.getAll('care_days').length > 0;
    const dropOff = String(data.get('drop_off_time') ?? '');
    const collection = String(data.get('collection_time') ?? '');
    const hasValidTimes = !dropOff || !collection || collection > dropOff;

    setCareDaysError(hasCareDay ? '' : form.validation.careDayRequired);
    setTimeError(hasValidTimes ? '' : form.validation.timeOrder);

    if (!hasCareDay || !hasValidTimes || !endpoint) {
      return;
    }

    setSubmissionState('submitting');

    try {
      await submitEnquiry(endpoint, data);
      formElement.reset();
      setSubmissionState('success');
    } catch {
      setSubmissionState('error');
    }
  }

  if (submissionState === 'success') {
    return (
      <div className="form-status form-status--success" role="status">
        <h3>{form.successTitle}</h3>
        <p>{form.successMessage}</p>
        <div className="button-group">
          <a className="button button--primary" href={pageUrl(confirmationPaths[content.language])}>
            {form.confirmationLink}
          </a>
          <button
            className="button button--quiet"
            type="button"
            onClick={() => setSubmissionState('idle')}
          >
            {form.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  const privacyUrl = `${pageUrl(legalPaths[content.language])}#privacy`;
  const hintId = (field: string) => `enquiry-${field}-hint`;

  return (
    <form
      className="enquiry-form"
      method="post"
      action={endpoint || undefined}
      onSubmit={handleSubmit}
    >
      <p className="enquiry-form__required">{form.requiredNote}</p>
      <input type="hidden" name="language" value={content.language} />

      <div className="enquiry-form__grid">
        <div className="form-field">
          <label htmlFor="guardian-name">{form.fields.guardianName}</label>
          <input id="guardian-name" name="guardian_name" type="text" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">{form.fields.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="telephone">
            {form.fields.telephone} <span>({form.fields.optional})</span>
          </label>
          <input id="telephone" name="telephone" type="tel" autoComplete="tel" />
        </div>
        <div className="form-field">
          <label htmlFor="child-birth-month">{form.fields.childBirthMonth}</label>
          <input
            id="child-birth-month"
            name="child_birth_month"
            type="month"
            required
            aria-describedby={hintId('birth')}
          />
          <span className="form-hint" id={hintId('birth')}>
            {form.fields.childBirthMonthHint}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="desired-start-month">{form.fields.desiredStartMonth}</label>
          <input id="desired-start-month" name="desired_start_month" type="month" required />
        </div>
      </div>

      <fieldset
        className="form-field form-field--group"
        aria-describedby={`${hintId('days')} enquiry-days-error`}
      >
        <legend>{form.fields.careDays}</legend>
        <span className="form-hint" id={hintId('days')}>
          {form.fields.careDaysHint}
        </span>
        <div className="check-grid">
          {form.fields.weekdays.map((day) => (
            <label key={day.value}>
              <input
                type="checkbox"
                name="care_days"
                value={day.value}
                onChange={() => setCareDaysError('')}
              />
              <span>{day.label}</span>
            </label>
          ))}
        </div>
        {careDaysError && (
          <span className="form-error" id="enquiry-days-error" role="alert">
            {careDaysError}
          </span>
        )}
      </fieldset>

      <div className="enquiry-form__grid">
        <div className="form-field">
          <label htmlFor="drop-off-time">{form.fields.dropOffTime}</label>
          <input
            id="drop-off-time"
            name="drop_off_time"
            type="time"
            required
            aria-describedby={hintId('times')}
            onChange={() => setTimeError('')}
          />
          <span className="form-hint" id={hintId('times')}>
            {form.fields.timeHint}
          </span>
        </div>
        <div className="form-field">
          <label htmlFor="collection-time">{form.fields.collectionTime}</label>
          <input
            id="collection-time"
            name="collection_time"
            type="time"
            required
            aria-describedby={timeError ? 'enquiry-time-error' : hintId('times')}
            onChange={() => setTimeError('')}
          />
          {timeError && (
            <span className="form-error" id="enquiry-time-error" role="alert">
              {timeError}
            </span>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">
          {form.fields.message} <span>({form.fields.optional})</span>
        </label>
        <textarea id="message" name="message" aria-describedby={hintId('message')} />
        <span className="form-hint" id={hintId('message')}>
          {form.fields.messageHint}
        </span>
      </div>

      <div className="form-field form-field--honeypot" aria-hidden="true">
        <label htmlFor="company-website">{form.fields.honeypot}</label>
        <input id="company-website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="privacy-check">
        <input name="privacy_acknowledged" type="checkbox" value="yes" required />
        <span>
          {form.fields.privacyPrefix}
          <a href={privacyUrl}>{form.fields.privacyLink}</a>
          {form.fields.privacySuffix}
        </span>
      </label>

      {!endpoint && <p className="form-status form-status--notice">{form.unconfigured}</p>}
      {submissionState === 'error' && (
        <p className="form-status form-status--error" role="alert">
          {form.error}
        </p>
      )}
      <p className="form-status__live" aria-live="polite">
        {submissionState === 'submitting' ? form.submitting : ''}
      </p>
      <button
        className="button button--primary enquiry-form__submit"
        type="submit"
        disabled={!endpoint || submissionState === 'submitting'}
      >
        {submissionState === 'submitting' ? form.submitting : form.submit}
      </button>
    </form>
  );
}
