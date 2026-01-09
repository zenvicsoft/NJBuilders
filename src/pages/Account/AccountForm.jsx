import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import DateSelector from "@/components/InputBoxes/DateSelector";

const todayDate = new Date().toISOString().split("T")[0];

const AccountForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            date: todayDate,
            staff: "",
            site: "",
            amount: 0,
            received: 0,
            balance: 0,
            payment: 0,
            description: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset({
            date: todayDate,
            staff: "",
            site: "",
            amount: 0,
            received: 0,
            balance: 0,
            payment: 0,
            description: "",
        });
    };

    /** BLOCK minus, e, + keys */
    const blockInvalidChar = (e) => {
        if (["-", "e", "E", "+"].includes(e.key)) {
            e.preventDefault();
        }
    };

    /** Ensure value never goes below 0 (paste / scroll safe) */
    const preventNegative = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* HEADER */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">Add Account</h2>
                <p className="text-sm text-gray-500 mt-1">
                    Enter account details below
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* FORM GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DateSelector
                        name="date"
                        label="Report Date"
                        control={control}
                    />

                    <SingleSelect
                        name="staff"
                        label="Staff"
                        control={control}
                        rules={{ required: "Staff is required" }}
                        options={[
                            { label: "Staff 1", value: "staff1" },
                            { label: "Staff 2", value: "staff2" },
                            { label: "Staff 3", value: "staff3" },
                        ]}
                    />

                    <SingleSelect
                        name="site"
                        label="Site"
                        control={control}
                        rules={{ required: "Site is required" }}
                        options={[
                            { label: "Site A", value: "siteA" },
                            { label: "Site B", value: "siteB" },
                            { label: "Site C", value: "siteC" },
                        ]}
                    />

                    {/* AMOUNT */}
                    <TextInput
                        name="amount"
                        label="Amount"
                        type="number"
                        register={register}
                        rules={{ min: 0 }}
                        error={errors.amount}
                        onKeyDown={blockInvalidChar}
                        onInput={preventNegative}
                    />
<TextInput
    name="received"
    label="Received"
    type="number"
    register={register}
    rules={{ min: 0 }}
    error={errors.received}
    onKeyDown={blockInvalidChar}
    onInput={preventNegative}
/>

<TextInput
    name="balance"
    label="Balance"
    type="number"
    register={register}
    rules={{ min: 0 }}
    error={errors.balance}
    onKeyDown={blockInvalidChar}
    onInput={preventNegative}
/>

<TextInput
    name="payment"
    label="Payment"
    type="number"
    register={register}
    rules={{ min: 0 }}
    error={errors.payment}
    onKeyDown={blockInvalidChar}
    onInput={preventNegative}
/>
                </div>

                {/* DESCRIPTION */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        {...register("description", {
                            required: "Description is required",
                        })}
                        rows={4}
                        placeholder="Enter description"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                        focus:border-blue-500 resize-none"
                    />
                    {errors.description && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() =>
                            reset({
                                date: todayDate,
                                staff: "",
                                site: "",
                                amount: 0,
                                received: 0,
                                balance: 0,
                                payment: 0,
                                description: "",
                            })
                        }
                        className="px-6 py-2.5 rounded-lg border border-gray-300 text-sm
                        bg-white hover:bg-gray-50 transition"
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        className="px-7 py-2.5 rounded-lg text-sm font-medium text-white
                        bg-blue-600 hover:bg-blue-700 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AccountForm;
