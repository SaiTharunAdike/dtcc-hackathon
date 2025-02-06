"use client";

interface ResultDisplayProps {
  isProcessing: boolean;
  gotResults: boolean;
}

export default function ResultDisplay({
  isProcessing,
  gotResults,
}: ResultDisplayProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
      {isProcessing ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : gotResults ? (
        <p className="text-gray-600">Got result.</p>
      ) : (
        <p className="text-gray-600">
          No results to display. Please upload a file.
        </p>
      )}
    </div>
  );
}
