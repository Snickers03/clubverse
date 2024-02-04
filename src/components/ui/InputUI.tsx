import { useEffect, useRef, useState } from "react";
import { Field } from "formik";
import { Eye, EyeOff } from "lucide-react";

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
      <div className='my-2 flex justify-between'>
        <p className='ml-1 font-bold'>{label}</p>
        <p className='mr-1'>
          {error ? (
            <span className='text-[14px] text-red-500'>{error}</span>
          ) : (
            <span className='text-slate-400'>*</span>
          )}
        </p>
      </div>
      <div className='flex items-center space-x-2'>
        <Field
          innerRef={focus && ref}
          className='input-primary'
          name={fieldName}
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
