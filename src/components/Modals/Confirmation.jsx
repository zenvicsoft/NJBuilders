import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Confirmation = ({
  isOpen,
  onClose,
  title = "Confirm Action",
  description = "Are you sure you want to continue?",
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center"
      className="bg-white w-full max-w-md rounded-lg p-6 outline-none shadow-lg"
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600">
        {description}
      </p>

      {/* Actions */}
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="rounded-md border px-4 py-2 text-sm
                     text-gray-700 hover:bg-gray-50 transition"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            onConfirm?.();
            onClose();
          }}
          className="rounded-md bg-green-600 px-4 py-2 text-sm
                     text-white hover:bg-green-700 transition"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default Confirmation;
