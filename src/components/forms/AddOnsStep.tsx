import { StepDescription } from "../elements/StepDescription";
import { Title } from "../elements/Title";
import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { AddonCard } from "../elements/AddonCard";
import { ADDONS_DATA } from "../../lib/constants";

export const AddOnsStep = ({ form }: { form: UseFormReturn<FormData> }) => {
  const { watch, setValue } = form;
  const addons = watch("addons");
  const isYearlyPlanSelected = watch("isYearlyPlanSelected");

  const handleAddonChange = (
    addonKey: keyof FormData["addons"],
    checked: boolean
  ) => {
    setValue(`addons.${addonKey}`, checked);
  };

  return (
    <div>
      <Title title="Pick add-ons" />
      <StepDescription content="Add-ons help enhance your gaming experience." />
      <div className="flex flex-col gap-3">
        {Object.values(ADDONS_DATA).map((addon) => {
          return (
            <AddonCard
              id={addon.id}
              title={addon.name}
              description={addon.description}
              prices={{
                monthly: addon.monthlyPrice,
                yearly: addon.yearlyPrice,
              }}
              isYearlyPlanSelected={isYearlyPlanSelected}
              checked={addons[addon.id as keyof FormData["addons"]]}
              onCheckedChange={(checked) =>
                handleAddonChange(addon.id as keyof FormData["addons"], checked)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
