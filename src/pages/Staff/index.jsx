import React, { useEffect, useState } from "react";
import DeleteConfirmation from "@/components/Modals/DeleteConfirmation";
import Confirmation from "@/components/Modals/Confirmation";
import FormModal from "@/components/Modals/FormModal";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleUpload from "@/components/InputBoxes/SingleUpload";
import MultiFileUpload from "@/components/InputBoxes/MultiUpload";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import MultiSelect from "@/components/InputBoxes/MultiSelect";
import { Controller, useForm } from "react-hook-form";
import DateRangeSelector from "@/components/InputBoxes/DateRangeSelector";
import TextFieldBox from "@/components/InputBoxes/TextFieldBox";
import DateSelector from "@/components/InputBoxes/DateSelector";

const Staff = ({ data = "admin" }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    defaultValues: {
      role: "",
      skills: [],
      bookingDate: {
        startDate: "",
        endDate: "",
      },
      joinedDate: {
        startDate: "",
        endDate: "",
      },
      reportDate: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const options = [
    { label: "Admin", value: "admin" },
    { label: "Editor", value: "editor" },
    { label: "Viewer", value: "viewer" },
  ];

  const skillOptions = [
    { label: "React", value: "react" },
    { label: "Node", value: "node" },
    { label: "Django", value: "django" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold mb-4">Staff</h1>

      <button
        onClick={() => {
          setOpenFormModal(true);
          console.log("form Open");
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>

      <FormModal
        isOpen={openFormModal}
        onClose={() => setOpenFormModal(false)}
        title="Add User"
        onSubmit={(data) => {
          console.log("Submitted:", data);
        }}
      />

      <button
        onClick={() => setOpenSaveModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Save
      </button>

      <Confirmation
        isOpen={openSaveModal}
        onClose={() => setOpenSaveModal(false)}
        title="Save Changes"
        description="Are you sure you want to save these changes?"
        onConfirm={() => {
          console.log("Saved successfully");
        }}
      />

      {/* Open Delete Modal Button */}
      <button
        className="rounded-md bg-red-600 px-4 py-2 text-white
                   hover:bg-red-700 transition"
        onClick={() => setOpenDeleteModal(true)}
      >
        Delete
      </button>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmation
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        title="Delete Staff"
        description="Are you sure you want to delete this staff member? This action cannot be undone."
        onConfirm={() => {
          console.log("Staff deleted");
          setOpenDeleteModal(false);
        }}
      />

      <div className="my-5 p-4 border bg-white rounded-md">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="username"
            label="Username"
            register={register}
            rules={{ required: "Username is required" }}
            error={errors.username}
            placeholder="Enter username"
          />
          
          <TextInput
            name="amount"
            label="Amount"
            register={register}
            rules={{
              required: "Amount is required",
              min: { value: 0, message: "Amount must be a positive number" },
            }}
            error={errors.amount}
            placeholder="Enter amount"
            type="number"
            min={0}
            step="1"
          />

          <TextFieldBox
            name="description"
            label="Description"
            register={register}
            rules={{ required: "Description is required" }}
            error={errors.description}
            placeholder="Enter description..."
          />
          <div className="max-w-sm">
            <SingleUpload
              label="Profile Image"
              maxSizeMB={3}
              onChange={(files) => console.log(files)}
            />
          </div>

          <MultiFileUpload
            label="Product Images"
            onChange={(files) => console.log(files)}
          />

          <div className="flex gap-3">
            <SingleSelect
              name="role"
              label="Role"
              control={control}
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
              rules={{
                required: "Role is required",
              }}
            />

            <MultiSelect
              name="skills"
              label="Skills"
              control={control}
              options={skillOptions}
              rules={{
                validate: (v) => v.length > 0 || "Select at least one skill",
              }}
            />
          </div>

          {/* Date Rage Selector with past date and with rules */}
          <DateRangeSelector
            name="joinedDate"
            label="Joined Date"
            control={control}
            disabledPast={false}
            rules={{
              validate: (value) => {
                if (!value?.startDate || !value?.endDate) {
                  return "Date range is required";
                }
                const today = new Date();

                const start = new Date(value.startDate);
                const end = new Date(value.endDate);

                start.setHours(0, 0, 0, 0);
                end.setHours(0, 0, 0, 0);

                if (start < today) {
                  return "Start date cannot be in the past";
                }

                if (end < start) {
                  return "End date must be after start date";
                }

                return true;
              },
            }}
          />

          {/* Date Rage Selector without past date */}
          <DateRangeSelector
            name="bookingDate"
            label="Booking Date"
            control={control}
          />

          <DateSelector
            name="reportDate"
            label="Report Date"
            control={control}
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Staff;
