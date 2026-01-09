import React, { useRef, useState } from "react";

const SingleUpload = ({
  label = "Upload Image",
  accept = "image/*",
  maxSizeMB = 2,
  onChange,
}) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;

    // Validate type
    if (!file.type.startsWith("image/")) {
      setError("Only image files are allowed");
      return;
    }

    // Validate size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Image must be less than ${maxSizeMB}MB`);
      return;
    }

    setError("");
    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);
  };

  const handleInputChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <div
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`
          relative cursor-pointer rounded-xl border-2 border-dashed
          p-6 text-center transition bg-white
          ${
            isDragging
              ? "border-bg-primary bg-bg-primary/5"
              : "border-gray-300 hover:border-bg-primary"
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleInputChange}
        />

        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="preview"
              className="mx-auto max-h-48 rounded-lg object-cover"
            />
            <div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreview(null);
                  onChange?.(null);
                }}
                className="absolute -top-4 right-6 w-8 h-8 rounded-full bg-red-400 p-1 text-white hover:bg-black"
              >
                ✕
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();

                  // reset file input
                  if (inputRef.current) {
                    inputRef.current.value = "";
                    inputRef.current.click(); // reopen file picker
                  }
                }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-green-400 p-1 text-white hover:bg-black"
              >
                <i className="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>

            <p className="text-sm">
              <span className="font-semibold text-bg-primary">
                Click to upload
              </span>{" "}
              or drag & drop
            </p>

            <p className="text-xs text-gray-400">
              PNG, JPG up to {maxSizeMB}MB
            </p>
          </div>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default SingleUpload;
