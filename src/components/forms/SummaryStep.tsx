import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { StepDescription } from "../elements/StepDescription";
import { Title } from "../elements/Title";
import { Card, CardContent } from "../ui/card";

export const SummaryStep = ({ form }: { form: UseFormReturn<FormData> }) => {
  const { watch } = form;
  const { plan, isYearlyPlanSelected, addons } = watch();
  console.log(plan, isYearlyPlanSelected, addons);

  return (
    <div>
      <Title title="Finishing up" />
      <StepDescription content="Double-check everything looks OK before confirming." />
      <Card>
        <CardContent>
          <div>
            <div>
              <div>
                <p>
                  {plan} ({isYearlyPlanSelected ? "Yearly" : "Monthly"})
                </p>
                <button>Change</button>
              </div>
              <p></p>
            </div>
            <hr />
            <div></div>
            <div></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
