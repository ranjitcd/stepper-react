import React, { useState, useEffect } from 'react';
import '../styles/stepper.css';
import { StepperProps } from '../types/Stepper.types';


const Stepper: React.FC<StepperProps> = ({ 
    steps,
    initialStep = 0,
    onNext,
    onBack,
    nextLabel = 'Next',
    backLabel = 'Back',
    disabled = false,
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  
  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const goNext = () => {
    if (!disabled && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      if (onNext) onNext(currentStep + 1);
    }
  };

  const goBack = () => {
    if (!disabled && currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (onBack) onBack(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="stepper-container">
      <div className="stepper-header">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
          <div className="step-dots">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`step-dot ${index <= currentStep ? 'active' : ''}`}
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="step-buttons">
        <button onClick={goBack} disabled={currentStep === 0 || disabled}>
          {backLabel}
        </button>
        <button onClick={goNext} disabled={currentStep === steps.length - 1 || disabled}>
          {nextLabel}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
