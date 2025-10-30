'use client';

import { useMemo } from 'react';

import { useForm } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/utils/cn';
import { FormRow } from '@/shared/ui/components/form-row';
import { FireIcon } from '@/shared/ui/icons/fire';
import { Button } from '@/shared/ui/kit/button';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { getContactFormSchema } from '../model/schema';
import st from './contact-form.module.css';

export const ContactForm = () => {
  const schema = useMemo(() => getContactFormSchema(), []);

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
    },
  });

  return (
    <form
      className={cn(
        st.bg,
        'flex flex-col gap-10 rounded-[48px] p-10 max-md:px-5',
      )}
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <Title as="h6" size="3xl">
        Contact Form
      </Title>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5">
          <FormRow>
            <Field name="firstName">
              {field => (
                <TextField
                  name={field.name}
                  label="First Name"
                  placeholder="Enter your first name"
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
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
                  label="Email Address"
                  placeholder="example@gmail.com"
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
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
                  label="Last Name"
                  placeholder="Enter your last name"
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
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
                  label="Phone Number"
                  placeholder="+34"
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                  intent={field.state.meta.errors.length ? 'danger' : 'primary'}
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
              label="Message"
              placeholder="Enter your message"
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              intent={field.state.meta.errors.length ? 'danger' : 'primary'}
              hint={field.state.meta.errors
                .map(error => error?.message)
                .join(', ')}
            />
          )}
        </Field>
      </section>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            disabled={!canSubmit}
            type="submit"
            className="ml-auto max-md:w-full max-md:justify-center"
          >
            <FireIcon />
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
