import { cloneElement, ReactElement } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface CustomFormFieldWithChildProps {
  children: ReactElement;
  className?: string;
  form: UseFormReturn<any>;
  name: string;
  placeholder?: string; // Added placeholder prop
  label: string;
  type?: string;
}

export const CustomFormFieldWithChild = ({
  children,
  className,
  form,
  name,
  placeholder, // Include placeholder in destructured props
  label,
  type,
}: CustomFormFieldWithChildProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className={cn(className)}>
            <FormLabel className="w-full">{label}</FormLabel>
            <FormControl>
              {type === "checkbox"
                ? cloneElement(children, {
                    checked: field.value,
                    onCheckedChange: field.onChange,
                  })
                : cloneElement(children, { ...field, placeholder })}{" "}
              {/* Pass placeholder */}
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
