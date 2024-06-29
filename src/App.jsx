import React from "react";
import { useForm } from "react-hook-form";
import InvoiceForm from "./components/InvoiceForm";
import {
  billingDetails,
  invoiceDetails,
  item,
  orderDetails,
  sellerDetails,
  shippingDetails,
} from "./formFields";

const App = () => {


  return (
    <main className="min-h-screen p-8 text-neutral-700 bg-neutral-50">
      <div className="text-center w-full flex justify-center">
        <h1 className="text-center text-2xl sm:text-3xl font-bold border-b-4 border-blue-500 w-fit">
          Invoice Generator
        </h1>
      </div>
      <p className="text-sm sm:text-lg font-medium text-neutral-500 my-4">
        A programmatic solution to generate your{" "}
        <span className="text-blue-500 font-bold">invoice</span> in no time.
      </p>
      <InvoiceForm />
    </main>
  );
};

export default App;
