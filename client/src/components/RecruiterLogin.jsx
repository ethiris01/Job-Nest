import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);

  const [isTetDataSubmitted, setIsTetDataSubmitted] = useState(false);

  const {setShowRecruiterLogin} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTetDataSubmitted) {
      setIsTetDataSubmitted(true); // Move to the next step
    }
  };

  // useEffect not scrolling 
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
          document.body.style.overflow = "unset"
    }
  },[])

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
      <div className="flex items-center justify-center ml-10 ">
        <img src={assets.logo} className="w-40 mb-1" alt="" />
      </div>
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm text-center mt-2">
          {isTetDataSubmitted
            ? "Upload Company Logo"
            : `Welcome back! Please ${state} to continue.`}
        </p>
        {state === "Sign Up" && isTetDataSubmitted ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={
                   image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input type="file" id="image" 
                onChange={e => setImage(e.target.files[0])}
                hidden />
              </label>
              <p className="font-semibold text-l">
               {name}
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 mt-5 rounded-full">
                <img src={assets.person_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 mt-5 rounded-full">
              <img src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 mt-5 rounded-full">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
            </div>
          </>
        )}

        { state === "Login" && 
          <p className="text-sm text-blue-600 my-4 cursor-pointer mt-2">
            Forget Password?
          </p>
}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-5"
        >
          {state === "Login"
            ? "Login"
            : isTetDataSubmitted
            ? "Create Account"
            : "Next"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img src={assets.cross_icon}
        onClick={e => setShowRecruiterLogin(false)}
        className="absolute w-3.5 top-5 right-5 cursor-pointer"
         alt="" />
      </form>
    </div>
  );
};

export default RecruiterLogin;
