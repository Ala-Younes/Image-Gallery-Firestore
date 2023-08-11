import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const handleClickLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error :", error);
    }
  };
  return (
    <div className="flex justify-between navbar bg-base-200 rounded-lg px-12">
      <a className="font-bold underline normal-case text-xl">GalleryPro📸📸</a>
      <button className="btn" onClick={handleClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
