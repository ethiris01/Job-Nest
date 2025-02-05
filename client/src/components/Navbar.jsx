import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user,isLoaded } = useUser();
    const navigate = useNavigate()
  // recruiter Login
  const {setShowRecruiterLogin} = useContext(AppContext)
  if(!isLoaded) {
    return (
       <header className="top-0 z-50 border-b border-slate-300 bg-white/80">
        <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton width={100} height={30} />
          </div>
          <div className="flex gap-4 items-center">
            <Skeleton width={120} height={20} />
            <Skeleton width={80} height={20} />
             {/* <Skeleton circle={true} width={40} height={40} /> */}
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="top-0 z-50 border-b border-slate-300 bg-white/80">
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
            <img 
            onClick={() => navigate("/")}
            src={assets.logo} alt="Logo" className=" cursor-pointer w-30 h-auto" />
        </div>

        {/* Conditional Rendering */}
        {user ? (
          <div className="flex items-center gap-3">
            <Link
              className="font-medium text-slate-700 hover:text-gray-400 transition"
              to="/applications"
            >
              Your Applications
            </Link>
            <p className="max-sm:hidden font-bold text-slate-900">
              Hi, {user.firstName} {user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              className="text-sm font-medium text-gray-500 border border-gray-300 rounded-lg px-4 py-2 transform transition duration-200 hover:scale-105 hover:text-gray-600 hover:border-gray-500"
             
              onClick={e => setShowRecruiterLogin(true)}
            >
              Post a Job
            </button>
            <button
              onClick={() => openSignIn()}
              className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 px-5 py-2 text-sm font-medium text-white shadow-md shadow-blue-400/50 transform transition duration-200 hover:scale-105"
            >
              Apply a Job
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
