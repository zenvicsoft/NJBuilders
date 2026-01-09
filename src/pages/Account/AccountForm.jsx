import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";

const AccountForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      date: "",
      staff: "",
      site: "",
      name: "",
      amount: 0,
      received: 0,
      balance: 0,
      payment: 0,
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="bg-white rounded-xl p-6">
      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Add Account</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter account details below
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Date (Calendar Picker) */}
          <TextInput
            name="date"
            label="Date"
            type="date"
            register={register}
            rules={{ required: "Date is required" }}
            error={errors.date}
          />

          {/* Staff */}
          <SingleSelect
            name="staff"
            label="Staff"
            control={control}
            rules={{ required: "Staff is required" }}
            options={[
              { label: "Staff 1", value: "staff1" },
              { label: "Staff 2", value: "staff2" },
              { label: "Staff 3", value: "staff3" },
            ]}
          />

          {/* Site */}
          <SingleSelect
            name="site"
            label="Site"
            control={control}
            rules={{ required: "Site is required" }}
            options={[
              { label: "Site A", value: "siteA" },
              { label: "Site B", value: "siteB" },
              { label: "Site C", value: "siteC" },
            ]}
          />

          {/* Name */}
          <TextInput
            name="name"
            label="Name"
            register={register}
            rules={{ required: "Name is required" }}
            error={errors.name}
            placeholder="Enter name"
          />

          {/* Amount (Read-only, No typing, No negative) */}
          <TextInput
            name="amount"
            label="Amount"
            type="number"
            register={register}
            rules={{ min: 0 }}
            error={errors.amount}
            readOnly
          />

          {/* Received (Read-only) */}
          <TextInput
            name="received"
            label="Received"
            type="number"
            register={register}
            rules={{ min: 0 }}
            error={errors.received}
            readOnly
          />

          {/* Balance (Read-only) */}
          <TextInput
            name="balance"
            label="Balance"
            type="number"
            register={register}
            rules={{ min: 0 }}
            error={errors.balance}
            readOnly
          />

          {/* Payment (Read-only) */}
          <TextInput
            name="payment"
            label="Payment"
            type="number"
            register={register}
            rules={{ min: 0 }}
            error={errors.payment}
            readOnly
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows={4}
            placeholder="Enter description"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       focus:border-blue-500 resize-none"
          />
          {errors.description && (
            <p className="text-xs text-red-500 mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-lg border border-gray-300 text-sm
                       bg-white hover:bg-gray-50 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-7 py-2.5 rounded-lg text-sm font-medium text-white
                       bg-blue-600 hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
