'use client';

import { Activity, useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/utils/cn';
import { FormRow } from '@/shared/ui/components/form-row';
import { FireIcon } from '@/shared/ui/icons/fire';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { getContactFormSchema } from '../model/schema';
import st from './contact-form.module.css';

export const ContactForm = ({
  vertical = false,
  showPrivacyNote = false,
  onSuccess,
}: {
  vertical?: boolean;
  showPrivacyNote?: boolean;
  onSuccess?: () => void;
}) => {
  const t = useTranslations('contactForm');
  const schema = useMemo(() => getContactFormSchema(t), [t]);

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    validators: {
      onChange: schema,
    },
    onSubmit: async data => {
      console.log(data);
      reset();
      onSuccess?.();
    },
  });

  return (
    <form
      className={cn(
        st.bg,
        'relative z-20 flex flex-col gap-10 rounded-[48px] p-10 max-md:px-5',
      )}
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <Title as="h6" size="3xl" color="black">
        {t('title', { fallback: 'Contact Form' })}
      </Title>
      <div className="flex w-full flex-col gap-2.5">
        <section
          className={cn(
            'flex w-full gap-5',
            !vertical ? 'flex-col' : 'max-md:flex-col',
          )}
        >
          <div className="flex w-full flex-col gap-2.5">
            <FormRow>
              <Field name="firstName">
                {field => (
                  <TextField
                    name={field.name}
                    variant="secondary"
                    label={t('firstName.label', { fallback: 'First Name' })}
                    placeholder={t('firstName.placeholder', {
                      fallback: 'Enter your first name',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    intent={
                      field.state.meta.errors.length ? 'danger' : 'primary'
                    }
                    hint={field.state.meta.errors
                      .map(error => error?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="email">
                {field => (
                  <TextField
                    name={field.name}
                    variant="secondary"
                    label={t('email.label', { fallback: 'Email Address' })}
                    placeholder="example@gmail.com"
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    intent={
                      field.state.meta.errors.length ? 'danger' : 'primary'
                    }
                    hint={field.state.meta.errors
                      .map(error => error?.message)
                      .join(', ')}
                  />
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field name="lastName">
                {field => (
                  <TextField
                    name={field.name}
                    variant="secondary"
                    label={t('lastName.label', { fallback: 'Last Name' })}
                    placeholder={t('lastName.placeholder', {
                      fallback: 'Enter your last name',
                    })}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    intent={
                      field.state.meta.errors.length ? 'danger' : 'primary'
                    }
                    hint={field.state.meta.errors
                      .map(error => error?.message)
                      .join(', ')}
                  />
                )}
              </Field>
              <Field name="phone">
                {field => (
                  <TextField
                    name={field.name}
                    variant="secondary"
                    label={t('phone.label', { fallback: 'Phone Number' })}
                    placeholder="+34"
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    intent={
                      field.state.meta.errors.length ? 'danger' : 'primary'
                    }
                    hint={field.state.meta.errors
                      .map(error => error?.message)
                      .join(', ')}
                  />
                )}
              </Field>
            </FormRow>
          </div>
          <Field name="message">
            {field => (
              <TextArea
                name={field.name}
                variant="secondary"
                label={t('message.label', { fallback: 'Message' })}
                placeholder={t('message.placeholder', {
                  fallback: 'Enter your message',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
                layoutClassName={cn(
                  vertical && 'max-w-[260px] w-full max-md:max-w-full',
                )}
              />
            )}
          </Field>
        </section>
        <Activity mode={showPrivacyNote ? 'visible' : 'hidden'}>
          <Text size="xs" weight={600} color="black50">
            Renvex never shares personal information or uses it beyond the scope
            of your request.
          </Text>
        </Activity>
      </div>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            disabled={!canSubmit}
            type="submit"
            className="ml-auto max-md:w-full max-md:justify-center"
          >
            <FireIcon />
            {isSubmitting
              ? t('submit.loading', { fallback: 'Sending...' })
              : t('submit.label', { fallback: 'Send Request' })}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
