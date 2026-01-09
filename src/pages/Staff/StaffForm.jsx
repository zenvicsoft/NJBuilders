import React from "react";
import { useForm, Controller } from "react-hook-form";

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
          <h2 className="text-lg font-bold text-gray-800">
            Add Staff
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 max-h-64 md:grid-cols-2 lg:grid-cols-3">
            {/* Staff Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Staff Name
              </label>
              <input
                {...register("staffName", {
                  required: "Staff Name is required",
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter staff name"
              />
              {errors.staffName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.staffName.message}
                </p>
              )}
            </div>

            {/* User Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Name
              </label>
              <input
                {...register("userName", {
                  required: "User Name is required",
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter user name"
              />
              {errors.userName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.userName.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter valid 10 digit number",
                  },
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Balance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Balance
              </label>
              <input
                {...register("balance", {
                  required: "Balance is required",
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter balance"
              />
              {errors.balance && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.balance.message}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <Controller
                name="status"
                control={control}
                rules={{ required: "Status is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                )}
              />
              {errors.status && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.status.message}
                </p>
              )}
            </div>
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
