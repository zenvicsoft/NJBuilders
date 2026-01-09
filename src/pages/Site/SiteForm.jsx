import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";

const SiteForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      amount: "",
      status: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="p-4 bg-white">
      {/* HEADER */}
      <div className="mb-7">
        <h2 className="text-[22px] font-bold">Add Site</h2>
        <p className="text-sm text-gray-500">
          Enter site details below
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Name */}
          <TextInput
            name="name"
            label="Name"
            register={register}
            rules={{ required: "Name is required" }}
            error={errors.name}
            placeholder="Enter labour name"
          />

          {/* Amount */}
          <TextInput
            name="amount"
            label="Amount"
            type="number"
            register={register}
            rules={{
              required: "Amount is required",
              min: {
                value: 1,
                message: "Amount must be greater than 0",
              },
            }}
            error={errors.amount}
            placeholder="Enter amount"
          />

          {/* Status */}
          <SingleSelect
            name="status"
            label="Status"
            control={control}
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
            rules={{ required: "Status is required" }}
          />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-4 mt-9">
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-7 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default SiteForm;
