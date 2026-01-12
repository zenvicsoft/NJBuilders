import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
const StaffForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      staffName: "",
      userName: "",
      password: "",
      phoneNumber: "",
      balance: "",
      status: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <div className=" p-4 overflow-hidden">
      <div className="mx-auto w-full max-w-6xl rounded-xl bg-white p-6 shadow-md">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">Add Staff</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 max-h-64 md:grid-cols-2 lg:grid-cols-3">
            <TextInput
              name="staffName"
              label="Staffname"
              register={register}
              rules={{ required: "Staffname is required" }}
              error={errors.staffName}
              placeholder="Enter Staff Name"
            />

            {/* User Name */}
            <TextInput
              name="userName"
              label="Username"
              register={register}
              rules={{ required: "Username is required" }}
              error={errors.userName}
              placeholder="Enter username"
            />

            {/* Password */}
            <TextInput
              name="password"
              label="Password"
              type="password"
              register={register}
              rules={{ required: "Password is required" }}
              error={errors.password}
              placeholder="Enter password"
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
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "")
                  .slice(0, 10);
              }}
            />

            {/* Balance */}
            <TextInput
              name="balance"
              label="Balance"
              register={register}
              rules={{
                required: "Balance is required",
                min: { value: 0, message: "Balance must be a positive number" },
              }}
              error={errors.balance}
              placeholder="Enter balance"
              type="number"
              min={0}
              step="1"
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
              rules={{
                required: "Status is required",
              }}
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

export default StaffForm;
