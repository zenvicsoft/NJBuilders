import React from "react";
import { DateRangePicker } from "rsuite";

const DateRangeSelector = ({
  label,
  value, // { startDate, endDate }
  onChange,
  onBlur,
  error,
  placeholder = "Select date range",
  disabledPast = true,
}) => {
  const convertToDate = (str) => (str ? new Date(str) : null);

  const pickerValue =
    value?.startDate && value?.endDate
      ? [convertToDate(value.startDate), convertToDate(value.endDate)]
      : null;

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (range) => {
    if (!range) {
      onChange({ startDate: "", endDate: "" });
      return;
    }

    const [start, end] = range;

    onChange({
      startDate: formatDate(start),
      endDate: formatDate(end),
    });
  };

  return (
    <div>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <DateRangePicker
        style={{ width: "200px" }}
        showOneCalendar
        size="lg"
        format="dd-MM-yyyy"
        placeholder={placeholder}
        value={pickerValue}
        onChange={handleDateChange}
        onBlur={onBlur}
        shouldDisableDate={
          disabledPast
            ? (date) => date < new Date().setHours(0, 0, 0, 0)
            : undefined
        }
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default DateRangeSelector;
