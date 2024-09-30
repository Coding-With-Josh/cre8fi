"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/reusable/custom-form-field";

import { ChangePasswordDTO, changePasswordSchema } from "@/schema";

export const ChangePasswordForm = () => {
  const form = useForm<ChangePasswordDTO>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ChangePasswordDTO) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField
          type="password"
          form={form}
          name="oldPassword"
          label="Old Password"
          className="rounded-[50px] border-slate-300 hover:border-primary"
        />
        <CustomFormField
          type="password"
          form={form}
          name="newPassword"
          label="New Password"
          className="rounded-[50px] border-slate-300 hover:border-primary"
        />
        <CustomFormField
          type="password"
          form={form}
          name="confirmPassword"
          label="Confirm Password"
          className="rounded-[50px] border-slate-300 hover:border-primary"
        />
        <div className="w-full flex items-center justify-between gap-4 ">
          <Button variant={"ghost"}>Cancel</Button>
          <Button className="bg-indigo-600 w-fit hover:bg-indigo-400 text-indigo-50 duration-300 rounded-[40px]">
            Change Password
          </Button>
        </div>
      </form>
    </Form>
  );
};
