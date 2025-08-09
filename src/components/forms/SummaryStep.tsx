import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { StepDescription } from "../elements/StepDescription";
import { Title } from "../elements/Title";
import { Card, CardContent } from "../ui/card";
import { ADDONS_DATA, PLANS_DATA } from "../../lib/constants";

export const SummaryStep = ({ form }: { form: UseFormReturn<FormData> }) => {
  const { watch } = form;
  const { plan, isYearlyPlanSelected, addons } = watch();

  const planPrice = isYearlyPlanSelected
    ? PLANS_DATA[plan].yearlyPrice
    : PLANS_DATA[plan].monthlyPrice;

  const selectedAddons = Object.entries(addons)
    .filter(([, value]) => value === true)
    .map(([key]) => ADDONS_DATA[key as keyof typeof ADDONS_DATA]);

  const totalPrice =
    planPrice +
    selectedAddons.reduce((acc, addon) => {
      return (
        acc + (isYearlyPlanSelected ? addon.yearlyPrice : addon.monthlyPrice)
      );
    }, 0);

  return (
    <div>
      <Title title="Finishing up" />
      <StepDescription content="Double-check everything looks OK before confirming." />
      <Card>
        <CardContent>
          <div>
            <div className="flex justify-between items-center">
              <div>
                <p>
                  {plan} ({isYearlyPlanSelected ? "Yearly" : "Monthly"})
                </p>
                <button>Change</button>
              </div>
              <p>${planPrice}</p>
            </div>
            <hr />
            {selectedAddons.map((addon) => {
              return (
                <div className="flex justify-between">
                  <p>{addon.name}</p>
                  <p>
                    +$
                    {isYearlyPlanSelected
                      ? `${addon.yearlyPrice}/yr`
                      : `${addon.monthlyPrice}/mo`}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between items-center">
        <p>Total (per {isYearlyPlanSelected ? "year" : "month"})</p>
        <div>
          ${totalPrice}
          {isYearlyPlanSelected ? "/yr" : "/mo"}
        </div>
      </div>
    </div>
  );
};
