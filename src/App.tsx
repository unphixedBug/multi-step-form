import { useState, useEffect } from "react";
import { useFormStep } from "./hooks/useFormStep";
import { PersonalInfoStep } from "./components/forms/PersonalInfoStep";
import { PlanSelectionStep } from "./components/forms/PlanSelectionStep";
import { AddOnsStep } from "./components/forms/AddOnsStep";
import { SummaryStep } from "./components/forms/SummaryStep";
import { Button } from "./components/ui/button";
import { StepIndicator } from "./components/elements/StepIndicator";
import { FormLayout } from "./components/layouts/FormLayout";
import { ThankYouStep } from "./components/forms/ThankYouStep";

function App() {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem("currentStep");
    return saved ? parseInt(saved) : 1;
  });
  const totalSteps = 4;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirm = () => {
    if (form.formState.isValid) {
      setIsSubmitted(true);
    }
  };

  const form = useFormStep();

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep.toString());
  }, [currentStep]);

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
    <div className="bg-blue-50 h-screen w-screen flex flex-col items-center justify-center text-base text-blue-950">
      <div className="bg-white h-9/12 w-9/12 rounded-2xl p-3 flex items-center justify-between">
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
        {!isSubmitted && (
          <FormLayout>
            <div>
              {currentStep === 1 && <PersonalInfoStep form={form} />}
              {currentStep === 2 && <PlanSelectionStep form={form} />}
              {currentStep === 3 && <AddOnsStep form={form} />}
              {currentStep === 4 && !isSubmitted && <SummaryStep form={form} />}
            </div>
            {!isSubmitted && (
              <div className="flex justify-end">
                {currentStep > 1 && <Button onClick={prevStep}>Go back</Button>}
                {currentStep < totalSteps && (
                  <Button onClick={nextStep} className="ml-auto">
                    Next Step
                  </Button>
                )}
                {currentStep === totalSteps && !isSubmitted && (
                  <Button
                    onClick={handleConfirm}
                    disabled={!form.formState.isValid}
                    className="ml-auto"
                  >
                    Confirm
                  </Button>
                )}
              </div>
            )}
          </FormLayout>
        )}
        {isSubmitted && <ThankYouStep />}
      </div>
    </div>
  );
}

export default App;
