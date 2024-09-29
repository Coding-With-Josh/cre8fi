"use client";

import { SuccessDialog } from "@/components/reusable/dialog";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubLabel } from "@/components/ui/sublabel";
import { Textarea } from "@/components/ui/textarea";
import { Check, CheckIcon } from "lucide-react";
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
    <div className="flex flex-col lg:flex-row px-6 h-screen w-screen items-center justify-center gap-[10rem] py-6">
      {/* Timeline sidebar */}
      <div className=" shadow-md p-6">
        {/* <h2 className="text-xl font-semibold mb-6">Onboarding Steps</h2> */}
        <div className="flex lg:flex-col flex-row space-y-8 relative">
          {/* Vertical line */}
          {/* <div className="absolute z-0 left-4 top-4 bottom-4 w-0.5 bg-slate-700"></div> */}
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="lg:flex md:flex items-center hidden relative"
              onClick={() => handleStepClick(step.id)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 cursor-pointer
                ${
                  currentStep === step.id
                    ? "bg-primary text-white"
                    : currentStep > step.id
                    ? "bg-blue-900/40 z-20 opacity-40 text-white"
                    : "bg-blue-800 text-gray-200"
                }
                ${step.id <= currentStep + 1 ? "hover:bg-primary" : ""}
              `}
              >
                {currentStep > step.id ? (
                  <CheckIcon className="h-3 w-3 font-bold" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`ml-4 text-sm font-medium cursor-pointer
                ${
                  currentStep === step.id
                    ? "text-blue-500"
                    : currentStep > step.id
                    ? "text-gray-600"
                    : "text-gray-400"
                }
                ${
                  step.id <= currentStep + 1
                    ? "hover:text-blue-600"
                    : "text-gray-400"
                }
              `}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Main content area */}
      <div className="mt-[20rem] lg:mt-[4rem]">
        <h1 className="text-2xl font-bold mb-1">Setup your profile</h1>
        <h1 className="text-sm text-muted-foreground mb-4">
          Let's finish up your profile to get you started.
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

// Placeholder components for each step
const PersonalInfoForm = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-start">
    <h1>Fill in the required fields</h1>
    <div className="flex flex-col lg:flex-row items-center">
      <div className="flex flex-col items-start justify-center my-6 ">
        <div className="space-y-5 flex flex-col">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-start justify-center space-y-4">
              <Label>First Name</Label>
              <Input placeholder="John" />
            </div>
            <div className="flex flex-col items-start justify-center space-y-4">
              <Label>Last Name</Label>
              <Input placeholder="Doey" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center space-y-4">
            <div className="flex flex-col space-y-1">
              <Label>Username</Label>
              <SubLabel>
                Your username can only be changed within 14 days.
              </SubLabel>
            </div>
            <Input placeholder="John" />
          </div>
          <div className="flex flex-col items-start justify-center space-y-4">
            <Label>Bio</Label>
            <Textarea placeholder="I am a software developer..." />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <Label>Upload a profile photo</Label>
        <FileUpload />
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <Label>Upload a cover photo</Label>
        <FileUpload />
      </div>
    </div>
    <Button onClick={onNext} className="w-100">Save & continue</Button>
  </div>
);
const SkillsAndInterests = ({ onNext }: { onNext: () => void }) => (
  <div className="">
    <h1>Tell us about your skills and interest</h1>
    <div className="flex flex-col items-start justify-center my-6 space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-start justify-center space-y-4">
          <Label>First Name</Label>
          <Input placeholder="John" />
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <Label>Last Name</Label>
          <Input placeholder="Doey" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <div className="flex flex-col space-y-1">
          <Label>Username</Label>
          <SubLabel>Your username can only be changed within 14 days.</SubLabel>
        </div>
        <Input placeholder="John" />
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <Label>Bio</Label>
        <Textarea placeholder="I am a software developer..." />
      </div>
    </div>
    <Button onClick={onNext}>Save & continue</Button>
  </div>
);

const PreferencesForm = ({ onNext }: { onNext: () => void }) => (
  <div className="">
    <h1>Tell us what you like</h1>
    <div className="flex flex-col items-start justify-center my-6 space-y-4">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex flex-col items-start justify-center space-y-4">
          <Label>First Name</Label>
          <Input placeholder="John" />
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <Label>Last Name</Label>
          <Input placeholder="Doey" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <div className="flex flex-col space-y-1">
          <Label>Username</Label>
          <SubLabel>Your username can only be changed within 14 days.</SubLabel>
        </div>
        <Input placeholder="John" />
      </div>
      <div className="flex flex-col items-start justify-center space-y-4">
        <Label>Bio</Label>
        <Textarea placeholder="I am a software developer..." />
      </div>
    </div>
    <Button onClick={onNext}>Save & continue</Button>
  </div>
);

const ReviewStep = ({ onFinish }: { onFinish: () => void }) => (
  <div>
    Review Step
    <SuccessDialog
      title={
        <div className="flex items-center justify-center gap-4">
          Success
          <span className="bg-green-500 text-gray-200 p-2 w-fit h-fit rounded-[10rem]">
            <CheckIcon />
          </span>
        </div>
      }
      trigger={<Button>Submit & continue</Button>}
      afterUrl="/dashboard"
    />
  </div>
);

export default OnboardingPage;
