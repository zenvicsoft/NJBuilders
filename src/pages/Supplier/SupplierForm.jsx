import React from "react";
import { useForm, Controller } from "react-hook-form";
import DateSelector from "@/components/InputBoxes/DateSelector";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import TextInput from "@/components/InputBoxes/TextInput";
const SupplierForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      date: "",
      bill: "",
      site: "",
      material: "",
      quantity: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  // Example options for dropdowns
  const siteOptions = ["Site A", "Site B", "Site C"];
  const materialOptions = ["Cement", "Steel", "Sand", "Bricks"];

  return (
    <div className="p-4 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl rounded-xl bg-white p-6 shadow-md">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">Supplier Form</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Date */}
            <DateSelector
              name="reportDate"
              label="Report Date"
              control={control}
            />

            {/* Bill */}
            <TextInput
              name="bill"
              label="Bill"
              register={register}
              rules={{
                required: "Bill is required",
                min: { value: 0, message: "Bill must be a positive number" },
              }}
              error={errors.bill}
              placeholder="Enter bill number"
              type="number"
              min={0}
              step="1"
            />

            {/* Site */}
            <SingleSelect
              name="site"
              label="Site"
              control={control}
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
              ]}
              rules={{
                required: "Status is required",
              }}
            />

            {/* Material */}
            <SingleSelect
              name="material"
              label="Material"
              control={control}
              options={[
                { label: "Cement", value: "cement" },
                { label: "Sand", value: "sand" },
              ]}
              rules={{
                required: "Material is required",
              }}
            />

            {/* Quantity */}
            <TextInput
              name="quantity"
              label="Quantity"
              register={register}
              rules={{
                required: "Quantity is required",
                min: {
                  value: 0,
                  message: "Quantity must be a positive number",
                },
              }}
              error={errors.quantity}
              placeholder="Enter quantity"
              type="number"
              min={0}
              step="1"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplierForm;
