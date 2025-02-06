"use client";

import { useState } from "react";
import FileUpload from "./FileUpload";
import ResultDisplay from "./ResultDisplay";

export default function HomePage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [gotResults, setGotResults] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <FileUpload setGotResults={setGotResults} setProgress={setIsProcessing} />
      <ResultDisplay gotResults={gotResults} isProcessing={isProcessing} />
    </div>
  );
}
