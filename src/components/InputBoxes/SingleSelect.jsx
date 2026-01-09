import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

export default function SingleSelect({
  name,
  control,
  label,
  options = [],
  placeholder = "Select an option",
  rules = {},
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
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
      defaultValue="" // ✅ IMPORTANT
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        const selected = options.find((o) => o.value === field.value);

        return (
          <div ref={wrapperRef} className="w-full relative">
            {label && (
              <label className="block mb-1 text-sm font-medium text-gray-700">
                {label}
              </label>
            )}

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className={`min-h-[42px] w-full flex justify-between items-center border rounded-lg px-3 py-2 bg-white
                ${
                  error
                    ? "border-red-500 focus:ring-red-300"
                    : "focus:ring-bg-primary"
                }
                focus:outline-none focus:ring-2`}
            >
              <span className={selected ? "text-gray-900" : "text-gray-400"}>
                {selected?.label || placeholder}
              </span>
              <i className="fa-solid fa-caret-down text-gray-400" />
            </button>

            {open && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-md max-h-56 overflow-auto">
                {options.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => {
                      field.onChange(option.value);
                      setOpen(false);
                    }}
                    className={`px-3 py-2 cursor-pointer hover:bg-bg-secondary ${
                      option.value === field.value
                        ? "bg-blue-100 font-medium"
                        : ""
                    }`}
                  >
                    {option.label}
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
