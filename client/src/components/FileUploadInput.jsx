import React, { useState } from "react";

const FileUploadInput = ({ label, placeholder, onChange, multiple = true }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onChange(selectedFiles);
  };

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-400 transition-colors duration-200">
        <input
          type="file"
          multiple={multiple}
          className="hidden"
          id={label.replace(/\s+/g, '-').toLowerCase()}
          onChange={handleFileChange}
          accept={
            label.toLowerCase().includes("image")
              ? "image/*"
              : label.toLowerCase().includes("document")
              ? ".pdf,.doc,.docx,.txt"
              : "*"
          }
        />
        <label
          htmlFor={label.replace(/\s+/g, '-').toLowerCase()}
          className="cursor-pointer text-gray-600"
        >
          {files.length > 0 ? "Files Selected" : placeholder}
        </label>
      </div>

      {/* Preview Section */}
      <div className="mt-3 space-y-2">
        {files.length > 0 &&
          files.map((file, index) => (
            <div key={index} className="flex items-center space-x-3">
              {file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-16 h-16 object-cover rounded-md border"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md text-sm text-gray-700">
                  📄
                </div>
              )}
              <p className="text-gray-800 text-sm truncate w-60">{file.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileUploadInput;
