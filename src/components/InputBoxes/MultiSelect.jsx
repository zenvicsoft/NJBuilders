import { useEffect, useRef, useState } from "react";

export default function MultiSelect({
  label,
  options = [],
  values = [],
  onChange,
  onBlur,
  placeholder = "Select options",
  error,
}) {
  const [open, setOpen] = useState(false);
  const multiselectRef = useRef(null);

  const toggleValue = (val) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  const removeValue = (val) => {
    onChange(values.filter((v) => v !== val));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        multiselectRef.current &&
        !multiselectRef.current.contains(e.target)
      ) {
        setOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onBlur]);

  return (
    <div ref={multiselectRef} className="w-full relative">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        onClick={() => setOpen(!open)}
        className={`min-h-[42px] border rounded-lg px-2 py-1 flex flex-wrap justify-between gap-2 items-center cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-bg-primary ${
          error ? "border-red-500" : ""
        }`}
      >
        {values.length === 0 && (
          <span className="text-gray-400 text-sm">{placeholder}</span>
        )}

        <div className="flex gap-2">
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
                values.includes(option.value) ? "bg-blue-100 font-medium" : ""
              }`}
            >
              {option.label}
              {values.includes(option.value) && <span>✓</span>}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
