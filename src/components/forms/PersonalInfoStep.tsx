import type { UseFormReturn } from 'react-hook-form';
import type { FormData } from '../../lib/schemas';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Title } from '../elements/Title';
import { StepDescription } from '../elements/StepDescription';

export const PersonalInfoStep = ({
  form,
}: {
  form: UseFormReturn<FormData>;
}) => {
  const {
    register,
    formState: { errors },
  } = form;

  const personalInfoStyle = 'flex flex-col gap-2';

  return (
    <div className="flex flex-col">
      <Title title="Personal info" />
      <StepDescription content="Please provide your name, email address, and phone number." />
      <div className="flex flex-col gap-4">
        <div className={personalInfoStyle}>
          <div className="flex items-center justify-between">
            <Label htmlFor="name">Name</Label>
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="text"
            {...register('name')}
            placeholder="e.g. Stephen King"
            aria-invalid={!!errors.name}
          />
        </div>
        <div className={personalInfoStyle}>
          <div className="flex items-center justify-between">
            <Label htmlFor="email">Email Address</Label>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            {...register('email')}
            placeholder="e.g. stephenking@lorem.com"
            aria-invalid={!!errors.email}
          />
        </div>
        <div className={personalInfoStyle}>
          <div className="flex items-center justify-between">
            <Label htmlFor="phone">Phone Number</Label>
            {errors.phone && (
              <span className="text-sm text-red-500">
                {errors.phone.message}
              </span>
            )}
          </div>
          <Input
            type="tel"
            {...register('phone')}
            placeholder="e.g. +1 234 567 890"
            aria-invalid={!!errors.phone}
          />
        </div>
      </div>
    </div>
  );
};
