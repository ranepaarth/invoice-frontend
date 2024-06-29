import axios from "axios";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BillingDetails from "../components/BillingDetails";
import InvoiceDetails from "../components/InvoiceDetails";
import ItemDetails from "../components/ItemDetails";
import OrderDetails from "../components/OrderDetails";
import SellerDetails from "../components/SellerDetails";
import ShippingDetails from "../components/ShippingDetails";
import {
  billingDetails,
  invoiceDetails,
  item,
  orderDetails,
  sellerDetails,
  shippingDetails,
} from "../formFields.js";
import useMultiStepForm from "../hook/useMultistepForm.js";
import CompanyLogo from "./CompanyLogo.jsx";

const InvoiceForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      companyLogo: "",
      sellerDetails,
      placeOfSupply: "",
      billingDetails,
      placeOfDelivery: "",
      shippingDetails,
      sameAsBilling: false,
      orderDetails,
      lineItems: [item],
      invoiceDetails,
      reverseCharge: false,
    },
  });

  const { activeStep, next, back, isFirstStep, isLastStep } = useMultiStepForm([
    <CompanyLogo />,
    <SellerDetails />,
    <BillingDetails />,
    <ShippingDetails />,
    <OrderDetails />,
    <ItemDetails />,
    <InvoiceDetails />,
  ]);

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("signature", data.signature[0]);
    data = { ...data, signature: data.signature[0].name };
    formData.append("invoice", JSON.stringify(data));
    console.log(formData);

    const response = await axios.post(
      "http://localhost:5000/api/v1/generate-invoice",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      setLoading(false);
    }

    window.open(response.data.pdf);

    console.log(response);
  };

  const onError = (data) => {
    console.log(data);
  };

  const nextStep = async (e) => {
    const isValid = await form.trigger();
    console.log(isValid);
    if (isValid) {
      next();
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <section className="w-full p-4 bg-white border rounded-lg flex flex-col items-center max-w-[750px] mx-auto">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className="bg-blue-500 px-2 py-1 text-white font- rounded-md capitalize hover:bg-blue-600 w-32 self-start"
              >
                back
              </button>
            )}
            {activeStep}
            <div className="flex gap-2 my-5 w-full px-4">
              {isLastStep ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 px-4 py-2 text-white font- rounded-md capitalize hover:bg-blue-600 w-full"
                >
                  continue
                </button>
              )}
              {isLastStep && (
                <button className="bg-blue-500 w-full text-white py-2 rounded-md">
                  {loading ? "Loading..." : "Submit"}
                </button>
              )}
            </div>
          </section>
        </form>
      </FormProvider>
    </div>
  );
};

export default InvoiceForm;
