import React, { useEffect } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { errorMessages } from "../errorMessages";
import CardWrapper from "./CardWrapper";

const Item = ({ item, index }) => {
  const {
    watch,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const qty = watch(`lineItems.${index}.quantity`);
  const unitPrice = watch(`lineItems.${index}.unitPrice`);
  const discount = watch(`lineItems.${index}.discount`);
  const taxRate = watch(`lineItems.${index}.taxRate`);

  let itemTotalAmount;


  useEffect(() => {
    setValue(`lineItems.${index}.taxRate`, "18%");
    itemTotalAmount = unitPrice * qty;
    const itemDiscount = itemTotalAmount - (itemTotalAmount * discount) / 100;
    setValue(`lineItems.${index}.netAmount`, itemDiscount);
  }, [qty, unitPrice, discount, index]);

  return (
    <CardWrapper
      cardHeader={"Item details"}
      cardDescription={
        "Provide all the item details ordered by your customer as mentioned below"
      }
    >
      <h3 className="text-lg font-bold text-neutral-400 mb-1">
        Item {index + 1}
      </h3>
      <div className="w-full border p-4 rounded-md grid grid-cols-2 sm:grid-cols-3 gap-4 shadow">
        <div className="col-span-full">
          <Controller
            control={control}
            name={`lineItems.${index}.description`}
            rules={{
              required: errorMessages.itemDesc,
            }}
            defaultValue={""}
            render={({ field }) => (
              <div className="flex flex-col gap-1">
                <label className="label">Item Description</label>
                <input {...field} className="input" />
              </div>
            )}
          />
        </div>
        <Controller
          control={control}
          name={`lineItems.${index}.quantity`}
          rules={{
            required: errorMessages.itemQty,
          }}
          defaultValue={1}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="label">Quantity</label>
              <input {...field} type="number" className="input" />
            </div>
          )}
        />
        <Controller
          control={control}
          name={`lineItems.${index}.unitPrice`}
          rules={{
            required: errorMessages.itemUnitPrice,
          }}
          defaultValue={0}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="label">Unit Price in ₹</label>
              <input {...field} type="number" className="input" />
            </div>
          )}
        />
        <Controller
          control={control}
          name={`lineItems.${index}.discount`}
          defaultValue={0}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="label">Discount %</label>
              <input {...field} type="number" className="input" />
            </div>
          )}
        />
        <Controller
          control={control}
          name={`lineItems.${index}.netAmount`}
          rules={{
            required: errorMessages.itemDesc,
          }}
          defaultValue={0}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="label">Net Amount in ₹</label>
              <input {...field} type="number" className="input" disabled />
            </div>
          )}
        />
        <Controller
          control={control}
          name={`lineItems.${index}.taxRate`}
          rules={{
            required: errorMessages.itemDesc,
          }}
          defaultValue={"18%"}
          render={({ field }) => (
            <div className="flex flex-col gap-1">
              <label className="label">Tax rate</label>
              <input {...field} type="text" className="input" disabled />
            </div>
          )}
        />
      </div>
      <p className="text-red-500 text-sm">
        {errors && "All fields are required"}
      </p>
    </CardWrapper>
  );
};

const ItemDetails = () => {
  const item = {
    description: "",
    quantity: 1,
    unitPrice: 0,
    netAmount: 0,
    discount: 0,
    taxRate: "18%",
  };
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "lineItems",
    control: control,
  });

  return (
    <div className="w-full p-4 flex flex-col gap-6">
      {fields.map((item, index) => (
        <div className="relative" key={item.id}>
          <Item item={item} index={index} />
          {index > 0 && (
            <button
              className="absolute -top-1 right-2 p-2 hover:bg-neutral-100 rounded-full text-xs"
              onClick={() => remove(item.id)}
            >
              ❌
            </button>
          )}
        </div>
      ))}
      <button
        className="border border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-neutral-50"
        onClick={() => append(item)}
        type="button"
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemDetails;
