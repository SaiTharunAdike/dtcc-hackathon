"use client";

import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { handleFileUpload } from "../actions";

const FileUpload = ({
  setProgress,
  setGotResults,
}: {
  setProgress: Dispatch<SetStateAction<boolean>>;
  setGotResults: Dispatch<SetStateAction<boolean>>;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        handleFileUpload(acceptedFiles, setProgress, setGotResults);
      }
    },
    [setProgress, setGotResults],
  );

  const dropZoneAccept = {
    "text/csv": [".csv"],
    "image/jpeg": [".jpg", ".jpeg"],
    "application/pdf": [".pdf"],
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: dropZoneAccept,
    multiple: false,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Your File</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition duration-300 ease-in-out ${
          isDragActive ? "border-blue-500 bg-blue-50" : "hover:border-gray-400"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the file here...</p>
        ) : (
          <>
            <p>Drag and drop your file here or</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">
              Click to browse
            </button>
          </>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-600">
        {`Supported file types: ${Object.values(dropZoneAccept)
          .flatMap((map) => map)
          .join(", ")}`}
      </p>
    </div>
  );
};

export default FileUpload;
