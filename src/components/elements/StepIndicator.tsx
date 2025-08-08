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
          isCurrentStep && "bg-blue-200 text-blue-950 border-none"
        } font-bold rounded-full border-white border-1 w-8 h-8 flex items-center justify-center`}
      >
        {step}
      </p>
      <div>
        <p className="text-purple-200">Step {step}</p>
        <p className="font-bold">{stepName.toUpperCase()}</p>
      </div>
    </div>
  );
};
