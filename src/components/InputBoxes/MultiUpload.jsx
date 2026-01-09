import React, { useRef, useState } from "react";

const MultiFileUpload = ({
  label = "Upload files",
  accept = "image/*",
  onChange,
  maxSizeMB = 2,
}) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles).map((file) => ({
      file,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));

    const updatedFiles = [...files, ...fileArray];
    setFiles(updatedFiles);
    onChange?.(updatedFiles.map((f) => f.file));
  };

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onChange?.(updated.map((f) => f.file));
  };

  return (
    <div className="w-full space-y-4">
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Upload Box */}
      <div
        onClick={() => inputRef.current.click()}
        className="flex items-center justify-center w-full h-32 cursor-pointer rounded-xl border-2 border-dashed border-gray-300 hover:border-bg-primary bg-gray-50 transition"
      >
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

          <p className="text-xs text-gray-400">PNG, JPG up to {maxSizeMB}MB</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Preview List */}
      <div className="space-y-3">
        {files.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 border rounded-xl bg-white shadow-sm"
          >
            {/* Image Preview */}
            {item.preview ? (
              <img
                src={item.preview}
                alt="preview"
                className="w-16 h-16 rounded-lg object-cover border"
              />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center rounded-lg border bg-gray-100 text-xs text-gray-500">
                FILE
              </div>
            )}

            {/* File Name */}
            <div className="flex-1 truncate">
              <p className="text-sm font-medium truncate">{item.file.name}</p>
              <p className="text-xs text-gray-500">
                {(item.file.size / 1024).toFixed(1)} KB
              </p>
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => removeFile(index)}
              className="w-12 text-red-500 hover:text-red-700 transition"
            >
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiFileUpload;
