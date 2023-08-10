import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { startUpload, progress } = useStorage();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      // Upload Image
      startUpload(selectedFile);
      console.log(selectedFile);
    } else {
      setSelectedFile(null);
    }
  };
  return (
    <div className="text-center mt-10 ring ring-purple-300 p-6 rounded-xl m-8">
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col gap-8"
      >
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className={`btn btn-neutral ${progress && "loading"}`}
          disabled={!selectedFile}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
