import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";

export const PersonalInfoStep = ({
  form,
}: {
  form: UseFormReturn<FormData>;
}) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name")}
          placeholder="e.g. Stephen King"
        />
        {errors.name && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.name.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          {...register("email")}
          placeholder="e.g. stephenking@lorem.com"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          {...register("phone")}
          placeholder="e.g. +1 234 567 890"
        />
        {errors.phone && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.phone.message}
          </span>
        )}
      </div>
    </div>
  );
};
