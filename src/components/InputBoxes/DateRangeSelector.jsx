import React from "react";
import { Controller } from "react-hook-form";
import { DateRangePicker } from "rsuite";

const DateRangeSelector = ({
  label,
  name,
  control,
  placeholder = "Select date range",
  disabledPast = true,
  rules = {},
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formatDate = (date) => {
    if (!date) return "";
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => {
          const pickerValue =
            field.value?.startDate && field.value?.endDate
              ? [new Date(field.value.startDate), new Date(field.value.endDate)]
              : null;

          return (
            <>
              <DateRangePicker
                {...field}
                value={pickerValue}
                showOneCalendar
                size="lg"
                format="dd-MM-yyyy"
                placeholder={placeholder}
                style={{ width: 260 }}
                shouldDisableDate={
                  disabledPast ? (date) => date < today : undefined
                }
                onChange={(range) => {
                  if (!range) {
                    field.onChange({
                      startDate: "",
                      endDate: "",
                    });
                    return;
                  }

                  const [start, end] = range;

                  field.onChange({
                    startDate: formatDate(start),
                    endDate: formatDate(end),
                  });
                }}
              />

              {error && (
                <p className="text-xs text-red-500 mt-1">{error.message}</p>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default DateRangeSelector;
