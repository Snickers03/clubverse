import * as React from "react";
import { cn } from "@/lib/utils";
import { Field } from "formik";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, fieldName, ...props }, ref) => {
    return (
      <Field
        name={fieldName}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        innerRef={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
