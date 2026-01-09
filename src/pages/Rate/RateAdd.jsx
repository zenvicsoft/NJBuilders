import React from "react";
import { useForm } from "react-hook-form";

import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import DateSelector from "@/components/InputBoxes/DateSelector";

const RateAdd = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      material: "",
      purchaseType: "",
      rate: "",
      rateDate: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Tools Add Data:", data);
  };

  return (
    <div className="p-6 bg-white rounded-md border">
      <h2 className="text-lg font-semibold mb-4">Add Tool</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Material */}
        <SingleSelect
          name="material"
          label="Material"
          control={control}
          options={[
            { label: "Hammer", value: "hammer" },
            { label: "Drill", value: "drill" },
            { label: "Cutter", value: "cutter" },
          ]}
          rules={{ required: "Material is required" }}
        />

        {/* Purchase */}
        <SingleSelect
          name="purchaseType"
          label="Purchase Type"
          control={control}
          options={[
            { label: "Cash", value: "cash" },
            { label: "Credit", value: "credit" },
          ]}
          rules={{ required: "Purchase type is required" }}
        />

        {/* Rate */}
        <TextInput
          name="rate"
          label="Rate"
          register={register}
          rules={{ required: "Rate is required" }}
          error={errors.rate}
          placeholder="Enter rate"
        />

        {/* Date */}
        <DateSelector
          name="rateDate"
          label="Rate Date"
          control={control}
        />

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save Tool
        </button>
      </form>
    </div>
  );
};

export default RateAdd;
