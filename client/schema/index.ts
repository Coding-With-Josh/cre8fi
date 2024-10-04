import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

const requiredString = z.string().trim().min(1, { message: "Required" });

export const profileUpdateSchema = z.object({
  firstName: requiredString,
  lastName: requiredString,
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),

  email: z.string().email({ message: "Invalid email" }),
  bio: requiredString.max(1000),
});

export type ProfileUpdateDTO = z.infer<typeof profileUpdateSchema>;

export const changePasswordSchema = z.object({
  oldPassword: requiredString,
  newPassword: requiredString.min(8, { message: "Required" }),
  confirmPassword: requiredString.min(8, { message: "Required" }),
});

export type ChangePasswordDTO = z.infer<typeof changePasswordSchema>;
