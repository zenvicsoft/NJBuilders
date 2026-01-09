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
    /* PAGE WRAPPER */
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef1fb",
        padding: "32px 0",
      }}
    >
      {/* CARD (MATCHES USERDETAILS SIZE) */}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 700 }}>
              Add Labour
            </h2>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Enter labour details below
            </p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* GRID LAYOUT (LIKE MUI GRID) */}
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
              placeholder="Enter staff name"
            />

            {/* Phone */}
            <TextInput
              name="phone"
              label="Phone Number"
              register={register}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10 digit number",
                },
              }}
              error={errors.phone}
              placeholder="Enter phone number"
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
                fontSize: "14px",
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
                fontSize: "14px",
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

export default LabourForm;
