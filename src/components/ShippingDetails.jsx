import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { errorMessages } from "../errorMessages";
import CardWrapper from "./CardWrapper";
import FormRow from "./FormRow";

const ShippingDetails = () => {
  const { register, setValue, getValues } = useFormContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setValue(
        "shippingDetails.shippingName",
        getValues("billingDetails.billingName")
      );
      setValue(
        "shippingDetails.shippingAddress",
        getValues("billingDetails.billingAddress")
      );
      setValue(
        "shippingDetails.shippingCity",
        getValues("billingDetails.billingCity")
      );
      setValue(
        "shippingDetails.shippingState",
        getValues("billingDetails.billingState")
      );
      setValue(
        "shippingDetails.shippingPinCode",
        getValues("billingDetails.billingPinCode")
      );
      setValue(
        "shippingDetails.shippingStateUtCode",
        getValues("billingDetails.billingStateUtCode")
      );
    }
  }, [checked]);

  return (
    <CardWrapper
      cardHeader={"Shipping Details"}
      cardDescription={"Provide shipping details as mentioned below."}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="sameAsBilling"
          {...register("sameAsBilling")}
          checked={checked}
          onChange={(e) => {
            setChecked(!checked);
            setValue("sameAsBilling", e.target.checked);
          }}
        />
        <label htmlFor="sameAsBilling">Same as Billing Details</label>
      </div>
      <FormRow
        name={"shippingDetails.shippingName"}
        placeholder={"John doe"}
        label={"name"}
        type={"text"}
        autoFocus={true}
        disabled={checked}
        errorMessage={errorMessages.name}
      />
      <FormRow
        name={"shippingDetails.shippingAddress"}
        placeholder={"Enter shipping address"}
        label={"Address"}
        type={"text"}
        autoFocus={false}
        disabled={checked}
        errorMessage={errorMessages.address}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <FormRow
          name={"shippingDetails.shippingCity"}
          placeholder={"Mumbai"}
          label={"City"}
          type={"text"}
          autoFocus={false}
          disabled={checked}
          errorMessage={errorMessages.city}
        />
        <FormRow
          name={"shippingDetails.shippingState"}
          placeholder={"Maharashtra"}
          label={"State"}
          type={"text"}
          autoFocus={false}
          disabled={checked}
          errorMessage={errorMessages.state}
        />
        <FormRow
          name={"shippingDetails.shippingPinCode"}
          placeholder={"XXXXXX"}
          label={"Pin code"}
          type={"number"}
          autoFocus={false}
          disabled={checked}
          errorMessage={errorMessages.pinCode}
        />
        <FormRow
          name={"shippingDetails.shippingStateUtCode"}
          placeholder={"XX"}
          label={"State/UT Code"}
          type={"number"}
          autoFocus={false}
          disabled={checked}
          errorMessage={errorMessages.stateUtCode}
        />
        <FormRow
          name={"placeOfDelivery"}
          placeholder={"Maharashtra"}
          label={"Place of delivery"}
          type={"text"}
          autoFocus={false}
          errorMessage={errorMessages.placeOfDelivery}
        />
      </div>
    </CardWrapper>
  );
};

export default ShippingDetails;
