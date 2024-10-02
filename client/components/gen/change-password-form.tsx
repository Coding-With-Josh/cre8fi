"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/reusable/custom-form-field";

import { ChangePasswordDTO, changePasswordSchema } from "@/schema";

export const ChangePasswordForm = () => {
  const [changePassword, setChangePassword] = useState(false);

  const form = useForm<ChangePasswordDTO>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleCancel = () => {
    form.reset();
    setChangePassword(false);
  };

  const onSubmit = (data: ChangePasswordDTO) => {
    console.log(data);
  };

  return (
    <>
      {changePassword ? (
        <Form {...form}>
          <form
            id="change-password-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 lg:flex justify-between"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <CustomFormField
                type="password"
                form={form}
                name="currentPassword"
                label="Current Password"
                className="rounded-[50px] border-lightGray hover:border-primary"
              />

              <CustomFormField
                type="password"
                form={form}
                name="newPassword"
                label="New Password"
                className="rounded-[50px] border-lightGray hover:border-primary"
              />

              <CustomFormField
                type="password"
                form={form}
                name="confirmPassword"
                label="Confirm Password"
                className="rounded-[50px] border-lightGray hover:border-primary"
              />
            </div>

            <div className="flex items-center justify-between gap-4 ">
              <Button variant={"ghost"} type="button" onClick={handleCancel}>
                Cancel
              </Button>
              <Button className="w-fit hover:bg-customBlue text-lightGray duration-300 rounded-[40px]">
                Change Password
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="w-full flex justify-end gap-4 mt-4">
          <Button
            type="button"
            onClick={() => setChangePassword(!changePassword)}
            className="max-w-[200px] rounded-[40px] hover:bg-customBlue text-lightGray"
          >
            Change Password
          </Button>
        </div>
      )}
    </>
  );
};
