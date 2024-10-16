import { cloneElement, ReactElement } from "react";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface CustomFormFieldProps {
  name: string;
  label: string;
  type?: string;
  // value: string;
  form: UseFormReturn<any>;

  selectItems?: readonly string[];
  readonly?: boolean;
  className?: string;
}

export const CustomFormField = ({
  name,
  label,
  type = "text",
  form,
  

  selectItems,
  readonly,
  className,
}: CustomFormFieldProps) => {
  const { control } = form;

  
  if (type === "select" && selectItems) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {selectItems.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  // Helper to determine field type
  const renderField = (fieldProps: any) => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            {...fieldProps}
            readOnly={readonly}
            className={cn("dark:bg-slate-700", className)}
          />
        );
      case "checkbox":
        return (
          <Switch
            className={cn("", className)}
            checked={fieldProps.value}
            onCheckedChange={fieldProps.onChange}
          />
        );
      default:
        return (
          <Input
            {...form.register(name)}
            placeholder=""
            readOnly={readonly}
            type={type}
            min={0}
            {...fieldProps}
            className={cn("dark:bg-slate-700", className)}
          />
        );
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderField(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface CustomFormFieldWithChildProps {
  children: ReactElement;
  className?: string;
  form: UseFormReturn<any>;
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
}

export const CustomFormFieldWithChild = ({
  children,
  className,
  form,
  name,
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
                : cloneElement(children, { ...field })}
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
