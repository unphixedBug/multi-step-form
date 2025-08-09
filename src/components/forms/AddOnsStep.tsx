import { StepDescription } from "../elements/StepDescription";
import { Title } from "../elements/Title";
import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { AddonCard } from "../elements/AddonCard";

export const AddOnsStep = ({ form }: { form: UseFormReturn<FormData> }) => {
  const { watch, setValue } = form;
  const addons = watch("addons");
  const isYearlyPlanSelected = watch("isYearlyPlanSelected");

  const handleAddonChange = (
    addonKey: keyof typeof addons,
    checked: boolean
  ) => {
    setValue(`addons.${addonKey}`, checked);
  };

  return (
    <div>
      <Title title="Pick add-ons" />
      <StepDescription content="Add-ons help enhance your gaming experience." />
      <div className="flex flex-col gap-3">
        <AddonCard
          id="onlineService"
          title="Online service"
          description="Access to multiplayer games"
          prices={{ monthly: 1, yearly: 10 }}
          isYearlyPlanSelected={isYearlyPlanSelected}
          checked={addons.onlineService}
          onCheckedChange={(checked) =>
            handleAddonChange("onlineService", checked)
          }
        />
        <AddonCard
          id="largerStorage"
          title="Larger storage"
          description="Extra 1TB of cloud save"
          prices={{ monthly: 2, yearly: 20 }}
          isYearlyPlanSelected={isYearlyPlanSelected}
          checked={addons.largerStorage}
          onCheckedChange={(checked) =>
            handleAddonChange("largerStorage", checked)
          }
        />
        <AddonCard
          id="customizableProfile"
          title="Customizable profile"
          description="Custom theme on your profile"
          prices={{ monthly: 2, yearly: 20 }}
          isYearlyPlanSelected={isYearlyPlanSelected}
          checked={addons.customizableProfile}
          onCheckedChange={(checked) =>
            handleAddonChange("customizableProfile", checked)
          }
        />
      </div>
    </div>
  );
};
