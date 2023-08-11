import ImageGallery from "../components/ImageGallery";
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <UploadForm />
      <ImageGallery />
    </div>
  );
};

export default Home;
