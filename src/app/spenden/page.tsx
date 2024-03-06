"use client";

import { Formik, Form, Field } from 'formik';
import { object, string, number} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import InputUI from '@/components/ui/InputUI';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  name: string().min(1, { message: 'Name is required' }),
  email: string().email('Invalid email address').min(1, { message: 'Email is required' }),
  donationAmount: number().positive('Donation amount must be positive'),
  donationPurpose: string().optional(),
  agreeToTerms: z.boolean().optional().refine(value => value === true, 'You must agree to the terms'),
});

type FormData = z.infer<typeof formSchema>;

const Spendenformular = () => {
  const { formState: { errors} } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      donationAmount: 0,
      donationPurpose: '',
      agreeToTerms: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        donationAmount: 0,
        donationPurpose: '',
        agreeToTerms: false,
      }}
      resolver={zodResolver(formSchema)}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <Form>
        <div className='py-12'>
            <div className='container mx-auto px-6'>
            <div className='py-4'>
                <InputUI
                  label='Name'
                  placeholder='Name des Spenders'
                  fieldName='name'
                  type='text'
                  error={errors.name}
                />
              </div>
              <div className='py-4'>
                <InputUI
                  label='E-Mail'
                  placeholder='E-Mail des Spenders'
                  fieldName='email'
                  type='text'
                  error={errors.email}
                />
              </div>
              <div className='py-4'>
                <InputUI
                  label='Spendenbetrag'
                  placeholder='Spendenbetrag'
                  fieldName='donationAmount'
                  type='text'
                  error={errors.donationAmount}
                />
              </div>
              <div className='py-4'>
                <InputUI
                  label='Spendengrund'
                  placeholder='Spendengrund'
                  fieldName='donationPurpose'
                  type='text'
                  error={errors.donationPurpose}
                />
              </div>
              <div className='py-4'>
                <InputUI
                  label='Bitte stimme den AGBs zu'
                  placeholder=''
                  fieldName='AGB'
                  type='checkbox'
                  error={errors.donationPurpose}
                />
              </div>
              <Button type='submit'>Spenden</Button>
            </div>
        </div>
        </Form>
      )}
    </Formik>
  );
};

export default Spendenformular;