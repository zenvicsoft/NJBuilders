import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";

const LabourForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
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
        <h2 className="text-[22px] font-bold">Add Labour</h2>
        <p className="text-sm text-gray-500">
          Enter labour details below
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
            placeholder="Enter site name"
          />

          {/* Phone Number */}
          <TextInput
            name="phone"
            label="Phone Number"
            type="number"
            register={register}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit phone number",
              },
            }}
            error={errors.phone}
            placeholder="Enter phone number"
            max={10}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
            }}
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

export default LabourForm;
