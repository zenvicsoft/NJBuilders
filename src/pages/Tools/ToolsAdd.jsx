import React, { useState } from "react";
import { useForm } from "react-hook-form";

import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import WorkshopModal from "./WorkshopModal";

const ToolsAdd = () => {
  const [openWorkshopAddModal, setOpenWorkshopAddModal] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      site: "",
      size: "",
      amount: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Tool Data:", data);
  };

  return (
    <div className="p-6 bg-white rounded-md border">
      <h2 className="text-lg font-semibold mb-4">Add Tool</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Site */}
          <div className="relative flex gap-2">
            <SingleSelect
              name="site"
              label="Workshops"
              control={control}
              options={[
                { label: "NJ", value: "site_a" },
                { label: "other B", value: "site_b" },
                { label: "Nill", value: "Nill" },
              ]}
              rules={{ required: "Site is required" }}
            />
            <div className="absolute top-7 right-1">
              <button
                type="button"
                className="flex items-center gap-2 rounded-md border px-3 py-2 bg-bg-secondary text-text-primary 
                       text-sm hover:bg-bg-primary hover:text-white transition"
                onClick={() => setOpenWorkshopAddModal(true)}
              >
                <i className="fa-solid fa-plus text-xs" />
              </button>
            </div>
          </div>
          {/* Name */}
          <TextInput
            name="name"
            type="text"
            label="Tool Name"
            register={register}
            rules={{ required: "Tool name is required" }}
            error={errors.name}
            placeholder="Enter tool name"
          />

          {/* Size */}
          <TextInput
            type="text"
            name="size"
            label="Size"
            register={register}
            rules={{ required: "Size is required" }}
            error={errors.size}
            placeholder="Enter size"
          />

          {/* Amount */}
          <TextInput
            type="number"
            name="amount"
            label="Amount"
            register={register}
            rules={{
              required: "Amount is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Amount must be a number",
              },
            }}
            min={0}
            error={errors.amount}
            placeholder="Enter amount"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save Tool
        </button>
      </form>

      <WorkshopModal
        isOpen={openWorkshopAddModal}
        onClose={() => setOpenWorkshopAddModal(false)}
        title="Add Workshop"
        onSubmit={(data) => {
          console.log("Submitted:", data);
        }}
      />
    </div>
  );
};

export default ToolsAdd;
