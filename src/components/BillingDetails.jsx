import React from "react";
import { useFormContext } from "react-hook-form";
import { errorMessages } from "../errorMessages";
import CardWrapper from "./CardWrapper";
import FormRow from "./FormRow";

const BillingDetails = () => {
  return (
    <CardWrapper
      cardHeader={"Billing Details"}
      cardDescription={"Provide billing details as mentioned below."}
    >
      <FormRow
        name={"billingDetails.billingName"}
        placeholder={"John doe"}
        label={"name"}
        type={"text"}
        autoFocus={true}
        errorMessage={errorMessages.name}
      />
      <FormRow
        name={"billingDetails.billingAddress"}
        placeholder={"Enter billing address"}
        label={"Address"}
        type={"text"}
        autoFocus={false}
        errorMessage={errorMessages.address}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <FormRow
          name={"billingDetails.billingCity"}
          placeholder={"Mumbai"}
          label={"City"}
          type={"text"}
          autoFocus={false}
          errorMessage={errorMessages.city}
        />
        <FormRow
          name={"billingDetails.billingState"}
          placeholder={"Maharashtra"}
          label={"State"}
          type={"text"}
          autoFocus={false}
          errorMessage={errorMessages.state}
        />
        <FormRow
          name={"billingDetails.billingPinCode"}
          placeholder={"XXXXXX"}
          label={"Pin code"}
          type={"number"}
          autoFocus={false}
          errorMessage={errorMessages.pinCode}
        />
        <FormRow
          name={"billingDetails.billingStateUtCode"}
          placeholder={"XX"}
          label={"State/UT Code"}
          type={"number"}
          autoFocus={false}
          errorMessage={errorMessages.stateUtCode}
        />
      </div>
    </CardWrapper>
  );
};

export default BillingDetails;
