import React from "react";
import { useForm } from "react-hook-form";

import DateSelector from "@/components/InputBoxes/DateSelector";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import MultiSelect from "@/components/InputBoxes/MultiSelect";
import TextFieldBox from "@/components/InputBoxes/TextFieldBox";
import RadioButton from "@/components/InputBoxes/RadioButton";
const DailyReportForm = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reportDate: "",
      site: "",
      labour: [],
      stock: "",
      suppliers: [],
      shops: [],
      shiftedItems: [],
      fromSite: "",
      toSite: "",
      vehicle: "",
      otherExpense: "",
      tools: [],
      remark: "",
    },
  });

  const shiftedItemsValue = watch("shiftedItems");

  const onSubmit = (data) => {
    console.log("Daily Report Data:", data);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Daily Report</h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the daily report details below
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Date */}
          <DateSelector
            name="reportDate"
            label="Report Date"
            control={control}
          />

          {/* Site */}
          <SingleSelect
            name="site"
            label="Site"
            control={control}
            options={[
              { label: "Site A", value: "site_a" },
              { label: "Site B", value: "site_b" },
            ]}
            rules={{ required: "Site is required" }}
          />

          {/* Labour */}
          <MultiSelect
            name="labour"
            label="Labour"
            control={control}
            options={[
              { label: "Worker 1", value: "worker1" },
              { label: "Worker 2", value: "worker2" },
            ]}
            rules={{
              validate: (v) => v.length > 0 || "Select at least one labour",
            }}
          />

          {/* Stock */}
          <TextFieldBox
            name="cementStock"
            label="CementStock"
            register={register}
            rules={{ required: "Stock is required" }}
            error={errors.cementStock}
            placeholder="Enter stock details"
          />

          {/* Suppliers */}
          <MultiSelect
            name="suppliers"
            label="Suppliers"
            control={control}
            options={[
              { label: "Supplier A", value: "supplier_a" },
              { label: "Supplier B", value: "supplier_b" },
            ]}
          />

          {/* Shops */}
          <MultiSelect
            name="shops"
            label="Shops"
            control={control}
            options={[
              { label: "Shop 1", value: "shop1" },
              { label: "Shop 2", value: "shop2" },
            ]}
          />

          {/* Shifted Items */}
          <RadioButton
            label="Shiftitems"
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            registerProps={register("shiftedItems", {
              required: "Please select a Shiftitems",
            })}
            error={errors.gender}
          />
          {shiftedItemsValue === "yes" && (
            <>
              {/* From Site */}
              <SingleSelect
                name="fromSite"
                label="From Site"
                control={control}
                options={[
                  { label: "Site A", value: "site_a" },
                  { label: "Site B", value: "site_b" },
                ]}
              />

              {/* To Site */}
              <SingleSelect
                name="toSite"
                label="To Site"
                control={control}
                options={[
                  { label: "Site A", value: "site_a" },
                  { label: "Site B", value: "site_b" },
                ]}
              />
            </>
          )}

          {/* Vehicle */}
          <SingleSelect
            name="vehicle"
            label="Vehicle"
            control={control}
            options={[
              { label: "Truck", value: "truck" },
              { label: "Van", value: "van" },
            ]}
          />

          {/* Other Expense */}
          <TextFieldBox
            name="otherExpense"
            label="Other Expense"
            register={register}
            rules={{}}
            error={errors.otherExpense}
            placeholder="Enter other expenses"
          />

          {/* Tools */}
          <MultiSelect
            name="tools"
            label="Tools"
            control={control}
            options={[
              { label: "Hammer", value: "hammer" },
              { label: "Drill", value: "drill" },
            ]}
          />

          {/* Remark */}
          <TextFieldBox
            name="remark"
            label="Remark"
            register={register}
            rules={{}}
            error={errors.remark}
            placeholder="Any remarks..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-7 py-2.5 rounded-lg text-sm font-medium text-white
                   bg-blue-600 hover:bg-blue-700 transition"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default DailyReportForm;
