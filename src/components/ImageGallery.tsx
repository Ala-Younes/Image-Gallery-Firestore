import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore("images");

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-3 justify-center gap-4 p-8">
      {images.map((image) => {
        return (
          <div key={image.imageUrl}>
            <div className="card bg-base-100 shadow-xl ring ring-purple-300 rounded-2xl">
              <div className="card-body">
                <h2 className="card-title w-[15rem]">
                  User : {image.userEmail}
                </h2>
                <p>createdAt : {image.createdAt.toLocaleDateString()}</p>
              </div>
              <div className="border-2 border-purple-200"></div>
              <figure className="max-h-[15rem] m-2 border border-black rounded-md">
                <img src={image.imageUrl} alt="Shoes" />
              </figure>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
