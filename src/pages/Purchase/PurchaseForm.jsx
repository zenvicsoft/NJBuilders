import React from "react";
import { useForm, Controller } from "react-hook-form";
import DateSelector from "@/components/InputBoxes/DateSelector";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
const PurchaseForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      date: "",
      name: "",
      material: "",
      amount: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  const materialOptions = ["Cement", "Steel", "Sand", "Bricks"];

  return (
    <div className="p-4 overflow-hidden">
      <div className="mx-auto w-full max-w-4xl rounded-xl bg-white p-6 shadow-md">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">
            Material Entry Form
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Date */}
            <DateSelector
              name="reportDate"
              label="Report Date"
              control={control}
            />

            {/* Name */}
            <TextInput
              name="username"
              label="Username"
              register={register}
              rules={{ required: "Username is required" }}
              error={errors.username}
              placeholder="Enter username"
            />

            {/* Material */}
            <SingleSelect
              name="material"
              label="Material"
              control={control}
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
              ]}
              rules={{
                required: "Material is required",
              }}
            />

            {/* Amount */}
            <TextInput
              name="amount"
              label="Amount"
              register={register}
              rules={{
                required: "Amount is required",
                min: { value: 0, message: "Amount must be a positive number" },
              }}
              error={errors.amount}
              placeholder="Enter amount"
              type="number"
              min={0}
              step="1"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white
                         hover:bg-blue-700 focus:outline-none
                         focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseForm;
