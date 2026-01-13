import TextInput from "@/components/InputBoxes/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ToolAddModal = ({ isOpen, onClose, title, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onFormSubmit = (data) => {
    onSubmit?.(data); // pass data to parent
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center z-20"
      className="bg-white w-full max-w-xl rounded-lg p-6 outline-none shadow-lg"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          {/* <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border rounded-md px-3 py-2 text-sm"
            placeholder="Enter name"
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
          )} */}
          <TextInput
            type="text"
            name="toolName"
            label="Tool Name"
            register={register}
            rules={{ required: "Tools Name is required" }}
            error={errors.toolName}
            placeholder="Enter Tool Name"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border px-4 py-2 text-sm
                       hover:bg-gray-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm
                       text-white hover:bg-blue-700 transition
                       disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ToolAddModal;
