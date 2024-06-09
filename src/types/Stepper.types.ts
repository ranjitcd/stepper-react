export declare type StepperProps = {
  steps: string[]; // array of step titles or identifiers
  initialStep?: number; // optional initial step index
  onNext?: (currentStep: number) => void; // optional callback when going to the next step
  onBack?: (currentStep: number) => void; // optional callback when going to the previous step
  nextLabel?: string; // optional label for the next button
  backLabel?: string; // optional label for the back button
  stepContent?: (step: number) => React.ReactNode; // optional function to render content for each step
  className?: string; // optional class name for custom styling
  disabled?: boolean; // optional flag to disable the stepper
};
