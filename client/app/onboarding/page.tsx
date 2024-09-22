'use client'

import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Work Details' },
  { id: 3, title: 'Preferences' },
  { id: 4, title: 'Review' },
];

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <WorkDetailsForm />;
      case 3:
        return <PreferencesForm />;
      case 4:
        return <ReviewStep />;
      default:
        return null;
    }
  };

  
  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep + 1) {
      setCurrentStep(stepId);
    }
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row px-6 h-screen w-screen items-center justify-center gap-[10rem]">
      {/* Timeline sidebar */}
      <div className="w-64 border-b-2 lg:border-r-2 md:border-r-2 border-white/10 shadow-md p-6">
        {/* <h2 className="text-xl font-semibold mb-6">Onboarding Steps</h2> */}
        <div className="flex lg:flex-col md:flex-col flex-row space-y-8 relative">
          {/* Vertical line */}
          {/* <div className="absolute z-0 left-4 top-4 bottom-4 w-0.5 bg-slate-700"></div> */}
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="flex items-center relative"
              onClick={() => handleStepClick(step.id)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 cursor-pointer
                ${currentStep === step.id ? 'bg-primary text-white' : 
                  currentStep > step.id ? 'bg-blue-900/40 z-20 opacity-40 text-white' : 'bg-gray-200 text-gray-600'}
                ${step.id <= currentStep + 1 ? 'hover:bg-primary' : ''}
              `}>
                {currentStep > step.id ? (
                  <CheckIcon className="h-3 w-3 font-bold" />
                ) : (
                  step.id
                )}
              </div>
              <span className={`ml-4 text-sm font-medium cursor-pointer
                ${currentStep === step.id ? 'text-blue-500' : 
                  currentStep > step.id ? 'opacity-50' : 'text-gray-600'}
                ${step.id <= currentStep + 1 ? 'hover:text-blue-600' : 'text-reed-600'}
              `}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Main content area */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-1">Setup your profile</h1>
        <h1 className="text-sm text-muted-foreground mb-4">Let's finish up your profile to get you started.</h1>
        {renderContent()}
      </div>
    </div>
  );
};

// Placeholder components for each step
const PersonalInfoForm = () => <div className="">Personal Info Form</div>;
const WorkDetailsForm = () => <div >Work Details Form</div>;
const PreferencesForm = () => <div>Preferences Form</div>;
const ReviewStep = () => <div>Review Step<Button>Finish</Button></div>;

export default OnboardingPage;
