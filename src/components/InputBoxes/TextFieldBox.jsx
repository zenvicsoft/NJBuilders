import React from "react";

const TextFieldBox = ({
  name,
  label,
  register,
  rules = {},
  error,
  placeholder = "",
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">
        {label} <span className="text-red-500">*</span>
      </label>

      <textarea
        {...register(name, rules)}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg resize-none
                    focus:outline-none focus:ring-2 hover:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "focus:ring-blue-500 hover:ring-blue-500"
        }`}
        rows={4}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TextFieldBox;
