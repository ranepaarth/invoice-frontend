import { useState } from "react";

const useMultiStepForm = (steps) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const next = () => {
    setActiveStepIndex((prev) =>
      prev >= steps.length - 1 ? steps.length - 1 : activeStepIndex + 1
    );
  };
  const back = () => {
    setActiveStepIndex((prev) => (prev <= 0 ? 0 : activeStepIndex - 1));
  };

  return {
    activeStep: steps[activeStepIndex],
    next,
    back,
    isFirstStep: activeStepIndex === 0,
    isLastStep: activeStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
