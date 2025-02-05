import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  // filter context
  const { isSearched, searchFilter, setSearchFilter,jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false); // button for smaller screens
  // pagination
  const [currentPage,setCurrentPage]= useState(1)
  // search to match 
  const[selectedCategories,setSelectedCategories]= useState([])
  const[selectedLocation,setSelectedLocation]= useState([])

  // filter jobs 
  const [filteredJobs,setFilteredJobs] =useState(jobs)
  // function for category and location change 
  const handleCategoryChange = (category) => {
    setSelectedCategories(
      prev => prev.includes(category ) ? prev.filter( c => c !== category) : [ ...prev,category]
    )
  }

  const handleLocationChange = (location) => {
    setSelectedLocation(
      prev => prev.includes(location ) ? prev.filter( c => c !== location) : [ ...prev,location]
    )
  }

  // useEffect for filtering jobs based on categories
  useEffect(() => {
    const matchedCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)
    const matchedLocation = job => selectedLocation.length === 0 || selectedLocation.includes(job.location)

    const matchedTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
    const matchedSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

    const newFilteredJobs = jobs.slice().reverse().filter(
      job =>matchedCategory(job) &&
      matchedLocation(job) &&
      matchedTitle(job) &&
      matchedSearchLocation(job) 
    )

    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1)
  },[jobs ,selectedCategories,selectedLocation,searchFilter])
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mt-5 lg:flex-row-reverse gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg" >
        {isSearched && (searchFilter.title || searchFilter.location) && (
          <>
            <h3 className="font-medium text-lg mt-4">Search Results</h3>
            <div className=" flex mt-4 text-gray-600">
              {searchFilter.title && (
                <span className="mr-2 inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-lg">
                  {searchFilter.title}
                  <img
                    onClick={(e) =>
                      setSearchFilter((prev) => ({ ...prev, title: "" }))
                    }
                    src={assets.cross_icon}
                    alt="Remove"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="inline-flex items-center gap-2 bg-red-100 border border-red-200 px-4 py-1.5 rounded-lg">
                  {searchFilter.location}
                  <img
                    onClick={(e) =>
                      setSearchFilter((prev) => ({ ...prev, location: "" }))
                    }
                    src={assets.cross_icon}
                    alt="Remove"
                  />
                </span>
              )}
            </div>
          </>
        )}

       {/* buttons for show filter */}
       <button onClick={e => setShowFilter(prev => !prev)} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden mt-4">
        {showFilter ? "Close" : "Filters"}
       </button>
<div
  className={`${
    showFilter
      ? "rounded-xl p-4 mt-4 px-4"
      : "max-lg:hidden rounded-xl p-3 mt-8"
  } bg-gray-50 max-w-lg mx-auto`}
>
          {/* Category Filter */}
          <h4 className="font-medium text-md mb-2">Search By Category</h4>
          <ul className="space-y-4 text-gray-500">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input type="checkbox" 
                onChange={() => handleCategoryChange(category)}
                checked = {selectedCategories.includes(category)}
               />
                {category}
              </li>
            ))}
          </ul>
        </div>

       <div
  className={`${
    showFilter
      ? "rounded-xl p-4 mt-4 px-4"
      : "max-lg:hidden rounded-xl p-3 mt-8"
  } bg-gray-50 max-w-lg mx-auto`}
>
          {/* Location Filter */}
          <h4 className="font-medium text-md mb-2">Search By Location</h4>
          <ul className="space-y-4 text-gray-500">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input type="checkbox" 
                onChange={() => handleLocationChange(location)}
                checked = {selectedLocation.includes(location)} />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
            
      {/* Job Listings */}
      <section className="w-full text-gray-800">
  <h3 className="font-medium text-2xl sm:text-3xl py-2" id="job-list">
    Latest Jobs
  </h3>
  <p className="mb-8">Get your desired job from top companies.</p>
  
  {filteredJobs.length === 0 ? (
    // Display a message when no jobs match
    <section className="container bg-white dark:bg-slate-100 rounded-lg">
    <div className="py-4 px-2 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">No Jobs Found !</p>
            <p className="mb-4 text-lg font-light text-gray-500">Try Changing Search Filters.</p>
        </div>   
    </div>
  </section>
  ) : (
    // Display job cards if there are matches
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
      {filteredJobs
        .slice((currentPage - 1) * 6, currentPage * 6)
        .map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
    </div>
  )}

  {/* Pagination */}
  {filteredJobs.length > 0 && (
    <div className="flex items-center justify-center space-x-3 mt-10">
      <a href="#job-list">
        <img
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          src={assets.left_arrow_icon}
          alt="Previous Page"
        />
      </a>
      {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
        <a href="#job-list" key={index}>
          <button
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded 
              ${currentPage === index + 1 ? "bg-blue-100 text-blue-500" : "text-gray-500"}`}
          >
            {index + 1}
          </button>
        </a>
      ))}
      <a href="#job-list">
        <img
          onClick={() =>
            setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))
          }
          src={assets.right_arrow_icon}
          alt="Next Page"
        />
      </a>
    </div>
  )}
</section>



    </div>
  );
};

export default JobListing;
