import React from "react";
import { useForm, Controller } from "react-hook-form";
import DateSelector from "@/components/InputBoxes/DateSelector";

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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bill
              </label>
              <input
                {...register("bill", { required: "Bill is required" })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter bill number"
              />
              {errors.bill && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.bill.message}
                </p>
              )}
            </div>

            {/* Site */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site
              </label>
              <Controller
                name="site"
                control={control}
                rules={{ required: "Site is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select site</option>
                    {siteOptions.map((site) => (
                      <option key={site} value={site}>
                        {site}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.site && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.site.message}
                </p>
              )}
            </div>

            {/* Material */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Material
              </label>
              <Controller
                name="material"
                control={control}
                rules={{ required: "Material is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select material</option>
                    {materialOptions.map((mat) => (
                      <option key={mat} value={mat}>
                        {mat}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.material && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.material.message}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="0"
                step="1"
                {...register("quantity", {
                  required: "Quantity is required",
                  min: { value: 0, message: "Quantity cannot be less than 0" },
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Enter quantity"
              />
              {errors.quantity && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div>
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
