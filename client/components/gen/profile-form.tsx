"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormFieldWithChild,
} from "@/components/reusable/custom-form-field";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/ui/button";

import { ProfileUpdateDTO, profileUpdateSchema } from "@/schema";

export const ProfileForm = () => {
  const [editMode, setEditMode] = useState(false); // Control whether fields are editable
  const [newSkill, setNewSkill] = useState(""); // For adding new skills
  const [skillsList, setSkillsList] = useState([
    "Teamwork",
    "Adaptability",
    "Writing",
    "Attention to Details",
    "Collaboration",
  ]); // Default skills

  const form = useForm<ProfileUpdateDTO>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "",
      skills: skillsList.join(", "), // Set skills in a string format
      email: "johndoe@example.com",
      bio: "I'm John Doe, I love meeting people.",
    },
  });

  const handleCancel = () => {
    form.reset();
    setEditMode(false);
  };

  const onSubmit = (data: ProfileUpdateDTO) => {
    console.log("Saved data: ", data);
    setEditMode(false);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkillsList([...skillsList, newSkill.trim()]); // Add new skill to the list
      setNewSkill(""); // Reset input field
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-8">
          <CustomFormField
            form={form}
            name="firstName"
            label="First Name"
            readonly={!editMode}
            className="rounded-[50px] border-customGray"
          />

          <CustomFormField
            form={form}
            name="lastName"
            label="Last Name"
            readonly={!editMode}
            className="rounded-[50px] border-customGray"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <CustomFormFieldWithChild
            form={form}
            name="phoneNumber"
            label="Phone Number"
          >
            <PhoneInput
              readOnly={!editMode}
              placeholder="+1 (xxx) xxxxxxxx"
              className="rounded-[50px] border-customGray mt-2"
            />
          </CustomFormFieldWithChild>

          <CustomFormField
            form={form}
            name="email"
            label="Email"
            readonly={!editMode}
            type="email"
            className="rounded-[50px] border-customGray"
          />
        </div>

        <CustomFormField
          form={form}
          name="bio"
          label="Bio"
          readonly={!editMode}
          className="border-customGray rounded-[50px]"
        />

        {/* Skills Section */}
        
        <CustomFormField
          form={form}
          name="skills"
          label="Skills"
          readonly={!editMode}
          value={skillsList.join(", ")} // Display skills as comma-separated string
          className="border-customGray rounded-[50px]"
        />
             <button
              type="button"
              onClick={handleAddSkill}
              className="  px-4 bg-customBlue text-lightGray rounded-r-lg"
            >
              <img
                src="/assets/plus-circle.png"
                alt="Add Skill"
                className="h-5 w-5" 
              />
            </button>
          


        <div className="w-full flex justify-end">
          {editMode ? (
            <div className="space-x-4">
              <Button
                variant={"ghost"}
                type="button"
                onClick={handleCancel}
                className="w-[170px] hover:bg-customBlue text-lightGray duration-300 rounded-[40px]"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="w-[170px] hover:bg-customBlue text-lightGray duration-300 rounded-[40px]"
              >
                Save
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              onClick={() => setEditMode(true)}
              className="w-[170px] hover:bg-customBlue text-lightGray duration-300 rounded-[40px]"
            >
              Edit Profile
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
