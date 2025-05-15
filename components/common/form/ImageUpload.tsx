"use client";
import React, { useState } from "react";
import { Upload, X } from "lucide-react";

interface ImageUploadProps {
  label?: string;
  description?: string;
  onImageChange?: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label = "Upload Profile Image",
  description = "Image should be below 4mb",
  onImageChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 4 * 1024 * 1024) {
        alert("File size should be below 4MB");
        return;
      }
      setSelectedFile(file);
      if (onImageChange) onImageChange(file);
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    if (onImageChange) onImageChange(null);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`w-24 h-24 rounded-full border-2 border-dashed ${
            selectedFile ? "border-gray-300" : "border-gray-400"
          } flex items-center justify-center overflow-hidden relative`}
        >
          {selectedFile ? (
            <>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Profile preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={handleCancelUpload}
                className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-sm transform translate-x-1/4 -translate-y-1/4"
              >
                <X className="h-3 w-3 text-gray-600" />
              </button>
            </>
          ) : (
            <Upload className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-sm font-medium text-gray-700 mb-1">{label}</h2>
        <p className="text-xs text-gray-500 mb-3">{description}</p>
        <div className="flex gap-3">
          <label className="px-4 py-2 bg-[#f26522] text-white rounded text-xs font-medium hover:bg-[#e05b1a] transition-colors cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            Upload
          </label>
          <button
            type="button"
            onClick={handleCancelUpload}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-xs font-medium hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;