import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { InputFormik } from "@/components/ui/inputFormik";
import { Label } from "@/components/ui/label";

interface InputUIProps {
  label: string;
  placeholder: string;
  fieldName: string;
  error: string | undefined;
  focus?: boolean;
  type?: string;
}

const InputUI = ({
  label,
  placeholder,
  fieldName,
  error,
  focus,
  type = "text",
}: InputUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <div className='flex items-start justify-between pb-2'>
        <Label>{label}</Label>
        <Label className='mr-1'>
          {error ? (
            <span className='text-[12px] text-red-500'>{error}</span>
          ) : (
            <span className='text-slate-400'>*</span>
          )}
        </Label>
      </div>
      <div className='flex items-center space-x-2'>
        <InputFormik
          id={label}
          fieldName={fieldName}
          ref={focus ? ref : null}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
        />

        {type === "password" && (
          <div>
            {showPassword ? (
              <Eye
                className='hover:cursor-pointer'
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOff
                className='hover:cursor-pointer'
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputUI;
