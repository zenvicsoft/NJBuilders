import React from "react";

const TextInput = ({
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

      <input
        type="text"
        {...register(name, rules)}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:outline-none hover:ring-2 focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "focus:ring-blue-500 hover:ring-blue-500"
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TextInput;
