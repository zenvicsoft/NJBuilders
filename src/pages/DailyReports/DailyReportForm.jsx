import React from "react";
import { useForm } from "react-hook-form";

import DateSelector from "@/components/InputBoxes/DateSelector";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import MultiSelect from "@/components/InputBoxes/MultiSelect";
import TextFieldBox from "@/components/InputBoxes/TextFieldBox";

const DailyReportForm = () => {
  const {
    control,
    register,
    handleSubmit,
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

  const onSubmit = (data) => {
    console.log("Daily Report Data:", data);
  };

  return (
    <div className="p-6 bg-white rounded-md border">
      <h2 className="text-lg font-semibold mb-4">Daily Report</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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
          name="stock"
          label="Stock"
          register={register}
          rules={{ required: "Stock is required" }}
          error={errors.stock}
          placeholder="Enter stock details"
        />

        {/* Supplier */}
        <MultiSelect
          name="suppliers"
          label="Suppliers"
          control={control}
          options={[
            { label: "Supplier A", value: "supplier_a" },
            { label: "Supplier B", value: "supplier_b" },
          ]}
        />

        {/* Shop */}
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
        <MultiSelect
          name="shiftedItems"
          label="Shifted Items"
          control={control}
          options={[
            { label: "Cement", value: "cement" },
            { label: "Steel", value: "steel" },
          ]}
        />

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

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default DailyReportForm;
