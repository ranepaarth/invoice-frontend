import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormRow = ({
  label,
  placeholder,
  type,
  autoFocus,
  disabled,
  form,
  errorMessage,
  name,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMsgToDisplay = name
    .split(".")
    .reduce((acc, part) => acc && acc[part], errors)?.message;

  return (
    <div className="flex flex-col gap-2">
      <Controller
        name={name}
        rules={{
          required: errorMessage,
        }}
        defaultValue={""}
        control={control}
        render={({ field }) => (
          <>
            <label className="label">{label}</label>
            <input
              {...field}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
              className="input"
              autoFocus={autoFocus}
            />
            <p className="text-red-500 text-sm">{errorMsgToDisplay}</p>
          </>
        )}
      />
    </div>
  );
};

export default FormRow;
