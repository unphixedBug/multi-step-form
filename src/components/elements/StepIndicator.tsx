export const StepIndicator = ({
  step,
  isCurrentStep,
  stepName,
}: {
  step: number;
  isCurrentStep: boolean;
  stepName: string;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <p
        className={`${
          isCurrentStep && "bg-blue-200 text-black"
        } rounded-full border-white border-1 w-8 h-8 flex items-center justify-center`}
      >
        {step}
      </p>
      <div>
        <p>Step {step}</p>
        <p>{stepName.toUpperCase()}</p>
      </div>
    </div>
  );
};
