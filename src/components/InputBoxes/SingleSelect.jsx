import { useEffect, useRef, useState } from "react";

export default function SingleSelect({
  label,
  options = [],
  value,
  onChange,
  onBlur,
  placeholder = "Select an option",
  error,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onBlur]);

  return (
    <div ref={wrapperRef} className="w-full relative">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`min-h-[42px] w-full flex justify-between items-center border rounded-lg px-3 py-2 bg-white
          ${error ? "border-red-500 focus:ring-red-300" : "focus:ring-bg-primary"}
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
                onChange(option.value);
                setOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer hover:bg-bg-secondary ${
                option.value === value ? "bg-blue-100 font-medium" : ""
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
