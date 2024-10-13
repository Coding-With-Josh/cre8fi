"use client";

import { SuccessDialog } from "@/components/reusable/dialog";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubLabel } from "@/components/ui/sublabel";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Work Details" },
  { id: 3, title: "Preferences" },
  { id: 4, title: "Review" },
];

const showDialog = () => {
  return <SuccessDialog title="Success" trigger={<h1>Hello</h1>} />;
};

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm onNext={() => setCurrentStep(currentStep + 1)} />
        );
      case 2:
        return (
          <SkillsAndInterests onNext={() => setCurrentStep(currentStep + 1)} />
        );
      case 3:
        return (
          <PreferencesForm onNext={() => setCurrentStep(currentStep + 1)} />
        );
      case 4:
        return <ReviewStep onFinish={showDialog} />;
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
    <div className="flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 h-full lg:h-screen w-full items-start lg:items-center justify-center gap-10 lg:gap-[10rem] py-6">
      {/* Timeline sidebar */}
      <div className="shadow-md p-4 lg:p-6 w-full lg:w-auto">
        <div className="flex lg:flex-col flex-row lg:space-y-8 space-x-4 lg:space-x-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center relative"
              onClick={() => handleStepClick(step.id)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 cursor-pointer
                ${
                  currentStep === step.id
                    ? "bg-primary text-white"
                    : currentStep > step.id
                    ? "bg-blue-900/40 text-white"
                    : "bg-blue-800 text-gray-200"
                }
                ${step.id <= currentStep + 1 ? "hover:bg-primary" : ""}`}
              >
                {currentStep > step.id ? (
                  <CheckIcon className="h-3 w-3 font-bold" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`ml-4 text-sm font-medium cursor-pointer hidden sm:block
                ${
                  currentStep === step.id
                    ? "text-blue-500"
                    : currentStep > step.id
                    ? "text-gray-600"
                    : "text-gray-400"
                }
                ${step.id <= currentStep + 1 ? "hover:text-blue-600" : ""}`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Main content area */}
      <div className="w-full lg:w-auto lg:mt-[4rem]">
        <h1 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-4">
          Setup your profile
        </h1>
        <h2 className="text-sm lg:text-base text-muted-foreground mb-6">
          Let's finish up your profile to get you started.
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

// Personal Info Form Component
const PersonalInfoForm = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col space-y-6 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Label>First Name</Label>
        <Input placeholder="John" />
      </div>
      <div>
        <Label>Last Name</Label>
        <Input placeholder="Doe" />
      </div>
    </div>
    <div>
      <Label>Username</Label>
      <SubLabel>Your username can only be changed within 14 days.</SubLabel>
      <Input placeholder="John" />
    </div>
    <div>
      <Label>Bio</Label>
      <Textarea placeholder="I am a software developer..." />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Label>Upload a profile photo</Label>
        <FileUpload />
      </div>
      <div>
        <Label>Upload a cover photo</Label>
        <FileUpload />
      </div>
    </div>
    <Button onClick={onNext} className="w-full lg:w-auto">
      Save & Continue
    </Button>
  </div>
);

// Placeholder for other forms like SkillsAndInterests, PreferencesForm, ReviewStep...

export default OnboardingPage;
