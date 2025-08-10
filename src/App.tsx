import { useState, useEffect } from 'react';
import { useFormStep } from './hooks/useFormStep';
import { PersonalInfoStep } from './components/forms/PersonalInfoStep';
import { PlanSelectionStep } from './components/forms/PlanSelectionStep';
import { AddOnsStep } from './components/forms/AddOnsStep';
import { SummaryStep } from './components/forms/SummaryStep';
import { Button } from './components/ui/button';
import { StepIndicator } from './components/elements/StepIndicator';
import { FormLayout } from './components/layouts/FormLayout';
import { ThankYouStep } from './components/forms/ThankYouStep';

function App() {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem('currentStep');
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
    localStorage.setItem('currentStep', currentStep.toString());
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

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-50 text-base text-blue-950">
      <div className="relative flex h-full w-full flex-col items-center justify-between rounded-2xl lg:h-9/12 lg:w-9/12 lg:flex-row lg:gap-9 lg:bg-white lg:p-3">
        <div className="absolute inset-0 z-0 flex h-1/4 w-full items-start justify-center gap-7 bg-[url('/images/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat p-10 text-white lg:relative lg:inset-auto lg:h-full lg:w-1/3 lg:flex-col lg:justify-start lg:rounded-lg lg:bg-[url('/images/bg-sidebar-desktop.svg')]">
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
        <div className="flex h-full w-full flex-col justify-between lg:w-2/3 lg:px-18">
          {!isSubmitted && (
            <FormLayout>
              <div>
                {currentStep === 1 && <PersonalInfoStep form={form} />}
                {currentStep === 2 && <PlanSelectionStep form={form} />}
                {currentStep === 3 && <AddOnsStep form={form} />}
                {currentStep === 4 && !isSubmitted && (
                  <SummaryStep form={form} goToStep={goToStep} />
                )}
              </div>
            </FormLayout>
          )}
          {isSubmitted && <ThankYouStep />}
          {!isSubmitted && (
            <div className="flex h-1/10 w-full items-center justify-end bg-white px-6 lg:bg-auto">
              {currentStep > 1 && (
                <Button onClick={prevStep} variant="ghost">
                  Go back
                </Button>
              )}
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
        </div>
      </div>
    </div>
  );
}

export default App;
