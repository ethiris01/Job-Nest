import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  // Search function
  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  return (
  <div class="container mx-auto px-4 py-12 bg-slate-100">
   <div class="text-center">
    <h4 class="text-2xl lg:text-3xl font-bold mb-4 capitalize">
      Join our world-class team <br /> of creators & dreamers
    </h4>
    <p class="text-slate-400 tracking-wide text-lg max-w-2xl mx-auto">
      Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.
    </p>
  </div>


  <div class="mt-8 max-w-2xl mx-auto">
    <div class="bg-slate-100 rounded-md p-4 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
   
      <div class="flex-1 relative">
        <label for="" class="sr-only">Search Keywords</label>
        <input
          type="text"
          placeholder="Search For Job"
          ref={titleRef}
          class="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:shadow-lg"
        />
        <img src={assets.search_icon} alt="Job Icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
      </div>
      <div class="flex-1 relative">
        <label for="" class="sr-only">Location</label>
        <input
          type="text"
          ref={locationRef}
          placeholder="Location"
          class="w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 hover:shadow-lg"
        />
       
        <img src={assets.location_icon} alt="Location Icon" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
      </div>
      <div>
        <button
        onClick={() => onSearch()}
          class="w-full bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg">
          Search
        </button>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap justify-center items-center mt-4 px-20 text-center text-slate-400">
    <span class="text-slate-900 mr-2 font-medium">Popular Searches:</span>
    Designer, Developer, Web, iOS, PHP Senior Engineer
  </div>
</div>


  
  );
};

export default Hero;
