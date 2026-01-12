import React from "react";

const RadioButton = ({
  label,
  options = [],
  registerProps,
  error,
  direction = "row",
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <div
        className={`flex ${
          direction === "column" ? "flex-col gap-3" : "gap-6"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              {...registerProps}
              className="peer absolute opacity-0 w-0 h-0"
            />

            <div
              className="w-4 h-4 rounded-full border-2 border-gray-400
              flex items-center justify-center
              transition-colors
              peer-checked:border-bg-primary
              peer-checked:[&>div]:scale-100
              peer-checked:[&>div]:bg-bg-primary"
            >
              <div
                className="w-2 h-2 rounded-full bg-bg-primary
                scale-0 transition-transform"
              />
            </div>

            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>

      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default RadioButton;
