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
    <div className="flex items-center gap-4">
      <p
        className={`${
          isCurrentStep && 'border-none bg-blue-200 text-blue-950'
        } flex h-8 w-8 items-center justify-center rounded-full border-1 border-white font-bold`}
      >
        {step}
      </p>
      <div className="hidden md:block">
        <p className="text-purple-200">Step {step}</p>
        <p className="font-bold">{stepName.toUpperCase()}</p>
      </div>
    </div>
  );
};
