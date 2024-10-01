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
  const [editBio, setEditBio] = useState(false);

  const form = useForm<ProfileUpdateDTO>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      firstName: "Maryam",
      lastName: "Olaitan",
      phoneNumber: "+2349139330472",
      email: "joyful@example.com",
      bio: "",
    },
  });

  const handleCancel = () => {
    form.reset();
    setEditBio(false);
  };

  const onSubmit = (data: ProfileUpdateDTO) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-8">
          <CustomFormField
            form={form}
            name="firstName"
            label="First Name"
            readonly={!editBio}
            className="rounded-[50px] border-slate-300 hover:border-primary"
          />

          <CustomFormField
            form={form}
            name="lastName"
            label="Last Name"
            readonly={!editBio}
            className="rounded-[50px] border-slate-300 hover:border-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <CustomFormFieldWithChild
            form={form}
            name="phoneNumber"
            label="Phone Number"
          >
            <PhoneInput
              readOnly={!editBio}
              className="rounded-[50px] border-slate-300 hover:border-primary mt-2"
            />
          </CustomFormFieldWithChild>

          <CustomFormField
            form={form}
            name="email"
            label="Email"
            readonly={!editBio}
            type="email"
            className="rounded-[50px] border-slate-300 hover:border-primary"
          />
        </div>

        <CustomFormField
          form={form}
          name="bio"
          label="Bio"
          readonly={!editBio}
          type="textarea"
          className="border-slate-300 hover:border-primary w-full"
        />

        <div className="w-full flex justify-end">
          {editBio ? (
            <div className="space-x-4">
              <Button
                variant={"ghost"}
                onClick={handleCancel}
                className="w-[170px] hover:bg-indigo-600 text-indigo-50 duration-300 rounded-[40px]"
              >
                Cancel
              </Button>

              <Button className="w-[170px] hover:bg-indigo-700 text-indigo-50 duration-300 rounded-[40px]">
                Save
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              onClick={() => setEditBio(true)}
              className="w-[170px] hover:bg-indigo-600 text-indigo-50 duration-300 rounded-[40px]"
            >
              Edit Bio
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
