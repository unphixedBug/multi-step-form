import { useState } from "react";
import { useFormStep } from "./hooks/useFormStep";
import { PersonalInfoStep } from "./components/forms/PersonalInfoStep";
import { PlanSelectionStep } from "./components/forms/PlanSelectionStep";
import { AddOnsStep } from "./components/forms/AddOnsStep";
import { SummaryStep } from "./components/forms/SummaryStep";
import "./App.css";

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
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Formulaire multi étapes</h1>
      <p>
        Etape actuelle: {currentStep} / {totalSteps}
      </p>
      <div>
        {currentStep === 1 && <PersonalInfoStep form={form} />}
        {currentStep === 2 && <PlanSelectionStep />}
        {currentStep === 3 && <AddOnsStep />}
        {currentStep === 4 && <SummaryStep />}
      </div>
      <div>
        {currentStep > 1 && <button onClick={prevStep}>Précédent</button>}
        <button onClick={nextStep} disabled={currentStep === totalSteps}>
          {currentStep === totalSteps ? "Valider" : "Suivant"}
        </button>
      </div>
    </div>
  );
}

export default App;
