import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { Title } from "../elements/Title";
import { Switch } from "../ui/switch";
import { StepDescription } from "../elements/StepDescription";
import { PLANS_DATA } from "../../lib/constants";

export const PlanSelectionStep = ({
  form,
}: {
  form: UseFormReturn<FormData>;
}) => {
  const { register, watch, setValue } = form;

  const selectedPlan = watch("plan");
  const isYearlyPlanSelected = watch("isYearlyPlanSelected");

  return (
    <div>
      <Title title="Select your plan" />
      <StepDescription content="You have the option of monthly or yearly billing." />
      <div className="flex justify-between w-full gap-4">
        {Object.values(PLANS_DATA).map((plan) => (
          <label
            key={plan.id}
            className={`${
              plan.id === selectedPlan
                ? "border-purple-600 bg-white"
                : "border-gray-200"
            } flex flex-col gap-4 border-1 rounded-lg p-4 cursor-pointer flex-1`}
          >
            <input
              {...register("plan")}
              type="radio"
              value={plan.id}
              className="sr-only"
            />
            <div className="flex flex-col gap-4">
              <img className="w-10 h-10 mb-6" src={plan.icon} alt={plan.name} />
              <div>
                <h3 className="font-bold">{plan.name}</h3>
                <p className="text-gray-500">
                  $
                  {isYearlyPlanSelected
                    ? `${plan.yearlyPrice}/yr`
                    : `${plan.monthlyPrice}/mo`}
                </p>
                {isYearlyPlanSelected && (
                  <div className="flex gap-2">
                    <p>2 months free</p>
                  </div>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>
      <label className="flex gap-2 cursor-pointer bg-blue-50 rounded-lg p-2 mt-6">
        <input
          {...register("isYearlyPlanSelected")}
          type="checkbox"
          className="sr-only"
        />
        <span
          className={`font-bold ${
            isYearlyPlanSelected ? "text-gray-500" : "text-blue-950"
          }`}
        >
          Monthly
        </span>
        <Switch
          checked={isYearlyPlanSelected}
          onCheckedChange={(checked) =>
            setValue("isYearlyPlanSelected", checked)
          }
        />
        <span
          className={`font-bold ${
            isYearlyPlanSelected ? "text-blue-950" : "text-gray-500"
          }`}
        >
          Yearly
        </span>
      </label>
    </div>
  );
};
