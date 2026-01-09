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

const Staff = ({data="admin"}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);


  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      role: data,
      skills: [],
      dateRange: {
        startDate: "",
        endDate: "",
      },
    },
  });

  const onSubmit = (data) => {
    console.log(data);
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
      <TextInput />

      <TextFieldBox />

      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
          <Controller
            name="role"
            control={control}
            rules={{ required: "Role is required" }}
            render={({ field }) => (
              <SingleSelect
                label="Role"
                options={options}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.role?.message}
              />
            )}
          />

          <Controller
            name="skills"
            control={control}
            rules={{
              validate: (v) => v.length > 0 || "Select at least one skill",
            }}
            render={({ field }) => (
              <MultiSelect
                label="Skills"
                options={skillOptions}
                values={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={errors.skills?.message}
              />
            )}
          />
        </div>
        {/* Date Rage Selector with past date */}
        <Controller
          name="dateRange"
          control={control}
          rules={{
            validate: (v) => {
              if (!v.startDate || !v.endDate) {
                return "Date range is required";
              }

              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const start = new Date(v.startDate);
              const end = new Date(v.endDate);

              start.setHours(0, 0, 0, 0);
              end.setHours(0, 0, 0, 0);

              if (start < today) {
                return "Start date cannot be in the past";
              }

              return true;
            },
          }}
          render={({ field }) => (
            <DateRangeSelector
              label="Date Range With Past dates"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.dateRange?.message}
              disabledPast={false}
            />
          )}
        />
        {/* Date Rage Selector without past date */}
        <Controller
          name="dateRange"
          control={control}
          rules={{
            validate: (v) => {
              if (!v.startDate || !v.endDate) {
                return "Date range is required";
              }

              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const start = new Date(v.startDate);
              const end = new Date(v.endDate);

              start.setHours(0, 0, 0, 0);
              end.setHours(0, 0, 0, 0);

              if (start < today) {
                return "Start date cannot be in the past";
              }

              return true;
            },
          }}
          render={({ field }) => (
            <DateRangeSelector
              label="Date Range without past Date"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.dateRange?.message}
            />
          )}
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Staff;
