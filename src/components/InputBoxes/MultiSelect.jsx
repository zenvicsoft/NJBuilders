import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

export default function MultiSelect({
  name,
  control,
  label,
  options = [],
  placeholder = "Select options",
  rules = {},
}) {
  const [open, setOpen] = useState(false);
  const multiselectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        multiselectRef.current &&
        !multiselectRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]} // ✅ IMPORTANT
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        const values = field.value ?? []; // ✅ SAFE FALLBACK

        const toggleValue = (val) => {
          if (values.includes(val)) {
            field.onChange(values.filter((v) => v !== val));
          } else {
            field.onChange([...values, val]);
          }
        };

        const removeValue = (val) => {
          field.onChange(values.filter((v) => v !== val));
        };

        return (
          <div ref={multiselectRef} className="w-full relative">
            {label && (
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {label}
              </label>
            )}

            <div
              onClick={() => setOpen((o) => !o)}
              className={`min-h-[42px] border rounded-lg px-2 py-1 flex flex-wrap justify-between gap-2 items-center cursor-pointer bg-white focus:ring-2 hover:ring-2
                ${error ? "border-red-500" : "focus:ring-bg-primary hover:ring-blue-500"}`}
            >
              {values.length === 0 && (
                <span className="text-gray-400 text-sm">{placeholder}</span>
              )}

              <div className="flex gap-2 flex-wrap">
                {values.map((val) => {
                  const opt = options.find((o) => o.value === val);
                  return (
                    <span
                      key={val}
                      className="flex items-center gap-1 bg-bg-secondary text-text-primary text-sm px-2 py-1 rounded-md"
                    >
                      {opt?.label}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeValue(val);
                        }}
                        className="text-blue-500 hover:text-red-500"
                      >
                        ✕
                      </button>
                    </span>
                  );
                })}
              </div>

              <span className="text-gray-400">
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </div>

            {open && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-md max-h-56 overflow-auto">
                {options.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => toggleValue(option.value)}
                    className={`px-3 py-2 cursor-pointer flex justify-between items-center hover:bg-blue-50 ${
                      values.includes(option.value)
                        ? "bg-blue-100 font-medium"
                        : ""
                    }`}
                  >
                    {option.label}
                    {values.includes(option.value) && <span>✓</span>}
                  </li>
                ))}
              </ul>
            )}

            {error && (
              <p className="mt-1 text-xs text-red-500">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
}
