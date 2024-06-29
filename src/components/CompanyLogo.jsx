import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import CardWrapper from "./CardWrapper";

const CompanyLogo = () => {
  const { register, setValue, control, watch } = useFormContext();

  const image = watch("companyLogo");
  console.log(image);
  return (
    <CardWrapper
      cardHeader={"Company logo"}
      cardDescription={"Provide a company logo image to display on the invoice"}
    >
      <input
        type="file"
        accept="image/*"
        {...register("companyLogo")}
        name="companyLogo"
      />
    </CardWrapper>
  );
};

export default CompanyLogo;
