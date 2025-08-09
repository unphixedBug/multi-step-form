import type { UseFormReturn } from "react-hook-form";
import type { FormData } from "../../lib/schemas";
import { StepDescription } from "../elements/StepDescription";
import { Title } from "../elements/Title";
import { Card, CardContent } from "../ui/card";

export const SummaryStep = ({ form }: { form: UseFormReturn<FormData> }) => {
  return (
    <div>
      <Title title="Finishing up" />
      <StepDescription content="Double-check everything looks OK before confirming." />
      <Card>
        <CardContent>
          <div>
            <p>Total (per month/year)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
