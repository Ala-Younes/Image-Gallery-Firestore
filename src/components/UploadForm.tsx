import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  const { uploadAndAddToFirestore, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const targetFile = files[0];
    const fileType = targetFile?.type.split("/")[1];

    if (fileType?.includes("jpeg")) {
      setSelectedFile(targetFile);
      setSelectedSrc(URL.createObjectURL(targetFile));
    } else {
      console.error("File Type not supported");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      // Upload Image
      uploadAndAddToFirestore(selectedFile);
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

        {selectedSrc && <img className="h-36 w-36" src={selectedSrc} alt="" />}
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
