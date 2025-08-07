import { useState } from "react";
import { useFormStep } from "./hooks/useFormStep";
import { PersonalInfoStep } from "./components/forms/PersonalInfoStep";
import { PlanSelectionStep } from "./components/forms/PlanSelectionStep";
import { AddOnsStep } from "./components/forms/AddOnsStep";
import { SummaryStep } from "./components/forms/SummaryStep";
import { Button } from "./components/ui/button";
import { StepIndicator } from "./components/elements/StepIndicator";
import { FormLayout } from "./components/layouts/FormLayout";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const form = useFormStep();

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-blue-50 h-screen w-screen flex flex-col items-center justify-center">
      <div className="bg-white h-9/12 w-9/12 rounded-2xl p-10 flex items-center justify-between">
        <div className="flex flex-col gap-7 rounded-lg p-10 text-white bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-center bg-no-repeat w-1/3 h-full">
          <StepIndicator
            step={1}
            isCurrentStep={currentStep === 1}
            stepName="Your info"
          />
          <StepIndicator
            step={2}
            isCurrentStep={currentStep === 2}
            stepName="Select plan"
          />
          <StepIndicator
            step={3}
            isCurrentStep={currentStep === 3}
            stepName="Add-ons"
          />
          <StepIndicator
            step={4}
            isCurrentStep={currentStep === 4}
            stepName="Summary"
          />
        </div>
        {
          <FormLayout>
            <div>
              {currentStep === 1 && <PersonalInfoStep form={form} />}
              {currentStep === 2 && <PlanSelectionStep form={form} />}
              {currentStep === 3 && <AddOnsStep form={form} />}
              {currentStep === 4 && <SummaryStep form={form} />}
            </div>
            <div>
              {currentStep > 1 && <Button onClick={prevStep}>Précédent</Button>}
              <Button onClick={nextStep} disabled={currentStep === totalSteps}>
                {currentStep === totalSteps ? "Valider" : "Suivant"}
              </Button>
            </div>
          </FormLayout>
        }
      </div>
    </div>
  );
}

export default App;
