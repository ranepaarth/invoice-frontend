import React from "react";
import { errorMessages } from "../errorMessages";
import CardWrapper from "./CardWrapper";
import FormRow from "./FormRow";
import { useFormContext } from "react-hook-form";

const OrderDetails = () => {
  const { register } = useFormContext();

  return (
    <CardWrapper
      cardHeader={"Order details"}
      cardDescription={"Provide order details as mentioned below"}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormRow
          name={"orderDetails.orderNumber"}
          placeholder={"Enter seller address"}
          label={"Order no."}
          type={"text"}
          autoFocus={true}
          register={register("orderDetails.orderNumber")}
          errorMessage={errorMessages.orderNumber}
        />
        <FormRow
          name={"orderDetails.orderDate"}
          label={"Order Date"}
          type={"date"}
          autoFocus={false}
          register={register("orderDetails.orderDate")}
          errorMessage={errorMessages.orderDate}
        />
      </div>
    </CardWrapper>
  );
};

export default OrderDetails;
