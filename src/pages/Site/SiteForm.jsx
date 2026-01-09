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
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef1fb",
        padding: "32px 0",
      }}
    >
      <div
        style={{
          width: "95%",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700 }}>Add Site</h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            Enter site details below
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              marginTop: "36px",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: "10px 22px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              Reset
            </button>

            <button
              type="submit"
              style={{
                padding: "10px 26px",
                borderRadius: "8px",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiteForm;
