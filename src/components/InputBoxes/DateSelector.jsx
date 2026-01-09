import { Controller } from "react-hook-form";

export default function DateSelector({
  name,
  control,
  label,
  rules = {},
  minDate = new Date(),
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
          validate: (value) => {
            if (!value) return "Date is required";

            const selected = new Date(value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selected < today) {
              return "Date cannot be in the past";
            }

            return true;
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              type="date"
              {...field}
              min={minDate.toISOString().split("T")[0]}
              value={field.value ?? ""}
              className={`border rounded-lg px-3 py-2 text-sm focus:outline-none
                ${
                  error
                    ? "border-red-500"
                    : "border-gray-300 focus:border-blue-500"
                }`}
            />

            {error && (
              <p className="text-xs text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
