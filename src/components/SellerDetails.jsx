import React from "react";
import { useFormContext } from "react-hook-form";
import { errorMessages } from "../errorMessages";
import CardWrapper from "./CardWrapper";
import FormRow from "./FormRow";

const SellerDetails = () => {
  return (
    <CardWrapper
      cardHeader={"Sold By"}
      cardDescription={"Provide the details of the seller."}
    >
      <FormRow
        label={"name"}
        name={"sellerDetails.sellerName"}
        placeholder={"Varsiddhi Silk Express"}
        type={"text"}
        errorMessage={errorMessages.name}
        autoFocus={true}
      />
      <FormRow
        label={"Address"}
        name={"sellerDetails.sellerAddress"}
        placeholder={"Enter seller address"}
        type={"text"}
        errorMessage={errorMessages.address}
        autoFocus={false}
      />
      <div className="grid grid-cols-3 gap-4">
        <FormRow
          label={"City"}
          name={"sellerDetails.sellerCity"}
          placeholder={"Mumbai"}
          type={"text"}
          errorMessage={errorMessages.city}
          autoFocus={false}
        />
        <FormRow
          label={"State"}
          name={"sellerDetails.sellerState"}
          placeholder={"Maharashtra"}
          type={"text"}
          errorMessage={errorMessages.state}
          autoFocus={false}
        />
        <FormRow
          label={"Pin code"}
          name={"sellerDetails.sellerPinCode"}
          placeholder={"******"}
          type={"number"}
          errorMessage={errorMessages.pinCode}
          autoFocus={false}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <FormRow
          label={"PAN No."}
          name={"sellerDetails.sellerPanNumber"}
          placeholder={"ABC*****3K"}
          type={"text"}
          errorMessage={errorMessages.panNumber}
          autoFocus={false}
        />
        <div className="col-span-2">
          <FormRow
            label={"GST Registration No."}
            name={"sellerDetails.sellerGSTNumber"}
            placeholder={"15 digit GST no."}
            type={"text"}
            errorMessage={errorMessages.gstRegNo}
            autoFocus={false}
          />
        </div>
        <div className="col-span-2">
          <FormRow
            label={"Place of supply"}
            name={"placeOfSupply"}
            placeholder={"Maharashtra"}
            type={"text"}
            errorMessage={errorMessages.placeOfSupply}
            autoFocus={false}
          />
        </div>
      </div>
    </CardWrapper>
  );
};

export default SellerDetails;
