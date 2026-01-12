import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "@/components/InputBoxes/TextInput";
import SingleSelect from "@/components/InputBoxes/SingleSelect";
import DateSelector from "@/components/InputBoxes/DateSelector";
import TextFieldBox from "@/components/InputBoxes/TextFieldBox";

const todayDate = new Date().toISOString().split("T")[0];

const AccountForm = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
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

    /** 🚫 UNIVERSAL NEGATIVE BLOCKER */
    const blockNegativeInput = (e, field) => {
        // Block -, +, e, E while typing
        if (e.type === "keydown" && ["-", "+", "e", "E"].includes(e.key)) {
            e.preventDefault();
            return;
        }

        // Block paste of negative values
        if (e.type === "paste") {
            const pastedText = e.clipboardData.getData("text");
            if (pastedText.includes("-")) {
                e.preventDefault();
                return;
            }
        }

        // Final safety: force value >= 0
        const value = Number(e.target.value);
        if (value < 0) {
            setValue(field, 0);
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
                        name="received"
                        label="Received"
                        type="number"
                        register={register}
                        rules={{
                            required: "Received amount is required",
                            min: { value: 0, message: "Negative value not allowed" },
                        }}
                        error={errors.received}
                        placeholder="Enter received amount"
                        min={0}
                        step="1"
                    />

                    <TextInput
                        name="balance"
                        label="Balance"
                        type="number"
                        register={register}
                        rules={{
                            required: "Balance is required",
                            min: { value: 0, message: "Negative value not allowed" },
                        }}
                        error={errors.balance}
                        placeholder="Enter balance"
                        min={0}
                        step="1"
                    />

                    <TextInput
                        name="payment"
                        label="Payment"
                        type="number"
                        register={register}
                        rules={{
                            required: "Payment amount is required",
                            min: { value: 0, message: "Negative value not allowed" },
                        }}
                        error={errors.payment}
                        placeholder="Enter payment amount"
                        min={0}
                        step="1"
                    />
                </div>

                {/* DESCRIPTION */}
                <TextFieldBox
                    name="description"
                    label="Description"
                    register={register}
                    rules={{ required: "Description is required" }}
                    error={errors.description}
                    placeholder="Enter description"
                />

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
