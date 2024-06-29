import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import CardWrapper from "./CardWrapper";
import FormRow from "./FormRow";

const InvoiceDetails = () => {
  const [toggle, setToggle] = useState(false);

  const { register, setValue } = useFormContext();

  return (
    <CardWrapper
      cardHeader={"Invoice Details"}
      cardDescription={"Provide invoice details as mentioned below"}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <FormRow
          name={"invoiceDetails.invoiceNumber"}
          placeholder={"Enter the invoice number eg. 573"}
          label={"Invoice Number"}
          type={"number"}
          autoFocus={true}
        />

        <FormRow
          name={"invoiceDetails.invoiceDetails"}
          placeholder={""}
          label={"Invoice details"}
          type={"number"}
          autoFocus={false}
        />
      </div>
      <div className="">
        <label className="inline-flex items-center mb-5 cursor-pointer space-x-2 justify-self-center">
          <input
            type="checkbox"
            className="sr-only peer"
            {...register("reverseCharge")}
            checked={toggle}
            onChange={(e) => {
              setToggle(!toggle);
              setValue("reverseCharge", e.target.checked);
            }}
          />
          <span className="label">Reverse charge</span>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="space-x-2">
        <label className="label">Upload Signature</label>
        <input type="file" accept="image/*" {...register("signature")} name="signature"/>
      </div>
    </CardWrapper>
  );
};

export default InvoiceDetails;
