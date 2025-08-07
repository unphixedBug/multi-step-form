import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "./lib/schemas";
import { PersonalInfoStep } from "./components/forms/PersonalInfoStep";
import { PlanSelectionStep } from "./components/forms/PlanSelectionStep";
import { AddOnsStep } from "./components/forms/AddonsStep";
import { SummaryStep } from "./components/forms/SummaryStep";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      plan: "arcade",
      billing: "monthly",
      addOns: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
      },
    },
  });

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
        {currentStep === 1 && <PersonalInfoStep />}
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
