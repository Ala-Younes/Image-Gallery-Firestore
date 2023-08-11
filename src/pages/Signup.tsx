import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Success Signing Up");
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast.error("Error Signing Up");
    }
  };

  const handleSignin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Success Signing Up");
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast.error("Error Signing Up");
    }
  };

  return (
    <form>
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Image Pro!</h1>
            <p className="py-6">Signup to share your photos</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center text-red-500">{error && error}</div>
              <div className="flex items-center justify-center gap-12 mt-6">
                <button onClick={handleSignup} className="btn btn-accent">
                  Signup
                </button>
                <button onClick={handleSignin} className="btn btn-secondary">
                  SignIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
