import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

const IntakeForm = () => {
  const [files, setFiles] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleAnalyze = () => {
    if (files.length === 0) {
      toast.error("Please upload at least one file.");
      return;
    }
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      toast.success("Analysis complete!");
    }, 2000);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl mb-4">Upload Your Intake Form</h1>
      <div
        {...getRootProps()}
        className="w-full max-w-lg p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer mb-4"
      >
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
        <em>(Only PDFs and images will be accepted)</em>
      </div>
      <Button onClick={handleAnalyze} disabled={analyzing}>
        {analyzing ? "Analyzing..." : "Analyze"}
      </Button>
      {!analyzing && files.length > 0 && (
        <Button onClick={() => navigate("/chat")} className="mt-4">
          Start Chatting
        </Button>
      )}
    </div>
  );
};

export default IntakeForm;