import { useState, useEffect } from "react";
import { FiClock, FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import DynamicForm from "./DynamicForm";

const DynamicStepper = ({
  steps,
  title,
  onComplete,
  onChange,
  onStepChange,
  initialData = {},
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [allFormData, setAllFormData] = useState(initialData);
  const [stepStatuses, setStepStatuses] = useState(steps.map(() => "pending"));

  // Update internal state when initialData changes
  useEffect(() => {
    setAllFormData(initialData);
  }, [initialData]);

  const currentStepConfig = steps[currentStep];

  const handleStepChange = (stepFormData) => {
    const updatedData = { ...allFormData, ...stepFormData };
    setAllFormData(updatedData);

    // Call parent onChange for real-time updates
    if (onChange) {
      onChange(updatedData);
    }
  };

  const handleStepSubmit = (stepFormData) => {
    const mergedData = { ...allFormData, ...stepFormData };
    setAllFormData(mergedData);

    // Validate current step
    const isCurrentStepValid = currentStepConfig.formConfig.every((field) => {
      if (!field.required) return true;
      const value = mergedData[field.name];
      return (
        value !== undefined && value !== null && value.toString().trim() !== ""
      );
    });

    if (!isCurrentStepValid) {
      toast.error("Please complete all required fields before continuing.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Mark current step as completed
    setStepStatuses((prev) =>
      prev.map((status, index) =>
        index === currentStep ? "completed" : status
      )
    );

    // Call parent onChange with final step data
    if (onChange) {
      onChange(mergedData);
    }

    // Move to next step or complete
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      if (onStepChange) {
        onStepChange(nextStep);
      }
    } else {
      // Form completion
      onComplete(mergedData);
      toast.success("Form completed successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      if (onStepChange) {
        onStepChange(prevStep);
      }
    }
  };

  const handleStepClick = (stepIndex) => {
    // Allow clicking on any step (you can add validation here if needed)
    setCurrentStep(stepIndex);
    if (onStepChange) {
      onStepChange(stepIndex);
    }
  };

  const completedSteps = stepStatuses.filter((s) => s === "completed").length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  return (
    <div className="p-4 min-h-full max-w-5xl mx-auto rounded-lg shadow-lg">
      <div className="mb-6 flex mb-4 justify-between items-center">
        <div className="font-bold text-gray-800 ">{title && <>{title}</>}</div>
        <div className="text-xs text-gray-100 bg-blue-500 rounded-full p-1">
          Steps: {completedSteps} of {steps.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-between mt-4">
          {steps.map((step, index) => {
            const isCompleted = stepStatuses[index] === "completed";
            const isCurrent = index === currentStep;
            const isPast = index < currentStep;

            return (
              <div
                key={step.title}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold mb-2 transition-all duration-200 ${
                    isCompleted
                      ? "bg-green-500 text-white shadow-lg"
                      : isCurrent
                      ? "bg-blue-600 text-white shadow-lg scale-110"
                      : isPast
                      ? "bg-gray-400 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step?.icon ? (
                    step?.icon
                  ) : (
                    <>
                      {isCompleted ? (
                        <FiCheckCircle size={18} />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </>
                  )}
                </div>
                <span
                  className={`text-xs text-center max-w-20 leading-tight ${
                    isCompleted
                      ? "font-semibold text-green-500"
                      : isCurrent
                      ? "font-semibold text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {step.title}
                </span>
                <span
                  className={`text-[8px] text-center min-w-20 leading-tight ${
                    isCompleted
                      ? "font-semibold text-gray-600"
                      : isCurrent
                      ? "font-semibold text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {currentStepConfig.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Form */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <DynamicForm
          key={`step-${currentStep}`}
          config={currentStepConfig.formConfig}
          initialData={allFormData}
          onChange={handleStepChange}
          onSubmit={handleStepSubmit}
          submitLabel={
            currentStep === steps.length - 1 ? "Complete Form" : "Next Step"
          }
          formId={`form-step-${currentStep}`}
          hideSubmit={true}
        />

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handlePrevious}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              currentStep === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
            }`}
            disabled={currentStep === 0}
          >
            Previous
          </button>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => {
                console.log("Current form data:", allFormData);
                toast.info("Current data logged to console", {
                  position: "top-right",
                  autoClose: 2000,
                });
              }}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              View Data
            </button>

            <button
              type="submit"
              form={`form-step-${currentStep}`}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
            >
              {currentStep === steps.length - 1 ? "Complete Form" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicStepper;
