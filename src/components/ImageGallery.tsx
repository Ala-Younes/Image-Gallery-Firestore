import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useFirestore from "../hooks/useFirestore";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./common/Modal";
import { toast } from "react-hot-toast";

const ImageGallery = () => {
  const { docs: images, isLoading, deleteADoc } = useFirestore("images");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAuth();

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async (imageId: string, imageUser: string) => {
    await deleteADoc(imageId, imageUser)
      .then(() => {
        toast.success("Success Deleting Image");
      })
      .catch(() => {
        toast.error("Error Deleting Image");
      });
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 p-8">
      {images.map(({ imageUrl, userEmail, createdAt, imageId }) => {
        return (
          <div
            key={imageUrl}
            className="flex flex-col max-w-sm bg-base-100 shadow-xl ring ring-purple-300 rounded-2xl"
          >
            <div className="flex-grow flex flex-col">
              <div className="card-body flex-grow">
                <h2 className="card-title">User: {userEmail}</h2>
                <p>createdAt: {createdAt.toLocaleDateString()}</p>
              </div>
              <div className="border-2 border-purple-200"></div>
              <figure className="relative m-2 border border-black rounded-md flex-grow">
                <img
                  src={imageUrl}
                  alt="Shoes"
                  className="max-h-[15rem] w-full"
                />
                <div className="absolute top-0 right-0">
                  {user?.email === userEmail && (
                    <>
                      <MdDeleteForever
                        className={
                          "cursor-pointer hover:opacity-50 hover:scale-125"
                        }
                        color={"red"}
                        size={33}
                        onClick={handleDeleteClick}
                      />
                      <Modal
                        title="Delete Image"
                        isOpen={isModalOpen}
                        onClose={handleModalClose}
                        onConfirm={() => handleDelete(imageId, userEmail)}
                      />
                    </>
                  )}
                </div>
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
