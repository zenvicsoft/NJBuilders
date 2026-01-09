import React from "react";
import { useForm } from "react-hook-form";

const TextFieldBox = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("SubmittedData", data);
  };
  return (
    <div className="bg-white p-3">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="textField">Text Field Input</label>{" "}
          <span className="text-red-500 font-md">*</span>
        </div>
        <textarea
          className={`w-full mb-4 p-3 border rounded-lg ring-0 focus:ring-2 focus:outline-none ${
            errors.text
              ? "border-red-500 focus:ring-red-400"
              : "focus:ring-bg-primary"
          }`}
          {...register("text", {
            required: "Text is required",
          })}
          placeholder="Text Field Input....."
        />
        {errors.text && (
          <p className="text-red-500 text-sm mb-4">{errors.text.message}</p>
        )}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full bg-bg-secondary text-text-primary py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full bg-bg-primary text-white py-3 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextFieldBox;
