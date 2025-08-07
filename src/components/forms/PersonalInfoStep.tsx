import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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
        <Label htmlFor="name">Name</Label>
        <Input
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
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="email"
          {...register("email")}
          placeholder="e.g. stephenking@lorem.com"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
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
