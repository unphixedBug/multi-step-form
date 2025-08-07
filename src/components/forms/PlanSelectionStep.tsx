import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const PlanSelectionStep = ({
  form,
}: {
  form: UseFormReturn<FormData>;
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = form;

  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        {["arcade", "advanced", "pro"].map((plan) => (
          <Label key={plan}>
            <Input {...register("plan")} type="radio" value={plan} />
            <div>
              <div>
                {plan === "arcade"
                  ? "icone gaming"
                  : plan === "advanded"
                  ? "icone gamine"
                  : "icone gaming"}
              </div>
              <div>{plan.charAt(0).toUpperCase() + plan.slice(1)}</div>
            </div>
          </Label>
        ))}
      </div>
    </div>
  );
};
