"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormFieldWithChild,
} from "@/components/reusable/custom-form-field";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/ui/button";

import { ProfileUpdateDTO, profileUpdateSchema } from "@/schema";

export const ProfileForm = () => {
  const form = useForm<ProfileUpdateDTO>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      bio: "",
    },
  });

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
            className="rounded-[50px] border-slate-300 hover:border-primary"
          />

          <CustomFormField
            form={form}
            name="lastName"
            label="Last Name"
            className="rounded-[50px] border-slate-300 hover:border-primary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <CustomFormFieldWithChild
            form={form}
            name="phoneNumber"
            label="Phone Number"
          >
            <PhoneInput className="rounded-[50px] border-slate-300 hover:border-primary mt-2" />
          </CustomFormFieldWithChild>

          <CustomFormField
            form={form}
            name="email"
            label="Email"
            type="email"
            className="rounded-[50px] border-slate-300 hover:border-primary"
          />
        </div>

        <CustomFormField
          form={form}
          name="bio"
          label="Bio"
          type="textarea"
          className="border-slate-300 hover:border-primary w-full"
        />

        <div className="w-full flex">
          <Button className="w-[170px] bg-indigo-600 mx-auto hover:bg-indigo-400 text-indigo-50 duration-300 rounded-[40px]">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
