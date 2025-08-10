import type { UseFormReturn } from 'react-hook-form';
import type { FormData } from '../../lib/schemas';
import { StepDescription } from '../elements/StepDescription';
import { Title } from '../elements/Title';
import { Card, CardContent } from '../ui/card';
import { ADDONS_DATA, PLANS_DATA } from '../../lib/constants';

export const SummaryStep = ({
  form,
  goToStep,
}: {
  form: UseFormReturn<FormData>;
  goToStep: (step: number) => void;
}) => {
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
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  {plan.charAt(0).toUpperCase() + plan.slice(1)} (
                  {isYearlyPlanSelected ? 'Yearly' : 'Monthly'})
                </p>
                <button
                  className="cursor-pointer text-gray-500 underline"
                  onClick={() => goToStep(2)}
                >
                  Change
                </button>
              </div>
              <p className="font-semibold">
                ${planPrice}
                {isYearlyPlanSelected ? '/yr' : '/mo'}
              </p>
            </div>
            <hr />
            {selectedAddons.map((addon) => {
              return (
                <div className="flex justify-between">
                  <p className="text-gray-500">{addon.name}</p>
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
      <div className="mt-6 flex items-center justify-between px-6">
        <p className="text-gray-500">
          Total (per {isYearlyPlanSelected ? 'year' : 'month'})
        </p>
        <div className="font-semibold text-purple-600">
          +${totalPrice}
          {isYearlyPlanSelected ? '/yr' : '/mo'}
        </div>
      </div>
    </div>
  );
};
