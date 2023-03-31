import classNames from "classnames";
import React from "react";

interface InputTextProps {
  label: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  className?: string;
  errors?: any;
  required?: boolean;
  register: any;
  registerOptions?: any;
}

export default function InputText(props: InputTextProps) {
  const {
    label,
    name,
    placeholder,
    defaultValue,
    className,
    errors,
    required,
    register,
    registerOptions,
  } = props;

  const inputTextClass = classNames(
    "outline-none border border-spacing-2 border-primary block w-full px-3 py-2 mt-2 active:border-blue-700 focus:border-blue-700 active:bg-blue-200 focus:bg-blue-200",
    {
      "active:border-red-700 focus:border-red-700 active:bg-red-200 focus:bg-red-200":
        errors[name],
    },
    className
  );

  return (
    <div className="form-group">
      <label htmlFor={label} className="block">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={inputTextClass}
        {...register(name, registerOptions[name])}
        required
      />
      <small className="text-red-600">
        {errors[name] && errors[name]?.message}
      </small>
    </div>
  );
}