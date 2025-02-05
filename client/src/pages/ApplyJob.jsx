import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/Navbar"
import { assets } from "../assets/assets"
import kconvert from "k-convert"
import moment from 'moment'
import { Footer, JobCard } from "../components"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
// import { useUser } from "@clerk/clerk-react"

const ApplyJob = () => {
  // const {user}  = useUser()
  // const userEmail = user?.emailAddresses[0]?.emailAddress
  // console.log(userEmail);
  
  // id for user
  const {id} = useParams()
  // jobs data 
  const [jobData,setJobData] = useState(null)
  // jobs from app context
  const {jobs} =useContext(AppContext)
  // function to fetch jobs
  const fetchJobs = async () => {
    const data = jobs.filter(job => job._id === id)
    if(data.length !== 0) {
      setJobData(data[0])
      console.log(data[0])
    }
  }
  // useEffect to call function when renders
  useEffect(() => {
    if(jobs.length > 0){
      fetchJobs()
    }
  },[id,jobs])
  return jobData ? (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col py-10 container px-4 mx-auto">
      <div className="bg-white text-black rounded-lg w-full">
        <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-300 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <img 
            className="h-24 bg-white rounded-full p-4 mr-4 max-md:mb-4 border"
            src={jobData.companyId.image} alt="icons" />
            <div className="text-center md:text-left text-neutral-700">
              <h1 className="text-2xl sm:text-4xl font-medium mt-1">{jobData.title}</h1>
              <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-500 mt-2">
                <span className="flex items-center gap-2 mt-2">
                  <img src={assets.building} className="h-4" alt="" />
                  {jobData.companyId.name}
                </span>
                <span className="flex items-center gap-2 mt-2">
                  <img src={assets.location_icon} alt="" />
                  {jobData.location}
                </span>
                <span className="flex items-center gap-2 mt-2">
                  <img src={assets.person_icon} alt="" />
                  {jobData.type}
                </span>
                <span className="flex items-center gap-2 mt-2">
                  <img src={assets.search_icon} alt="" />
                  {jobData.exp}
                </span>
                <span className="flex items-center gap-2 mt-2">
                  <img src={assets.money_icon} alt="" />
                 CTC  {kconvert.convertTo(jobData.salary)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
            <button className="bg-blue-600 p-3 px-10 text-white rounded-lg">Apply Now</button>
            <p className="font-medium mt-2 text-gray-500">Posted {moment(jobData.date).fromNow()}</p>
          </div>
        </div>

        {/* description */}
        <div className="flex flex-col lg:flex-row  justify-between items-start">
          <div className="w-full lg:w:2/3">
            <h2 className="font-bold text-2xl mb-4">Job Description</h2>
            <div className="rich-text mt-6  leading-relaxed space-y-4" dangerouslySetInnerHTML={{__html:jobData.description}}>
            </div>
            <div className="flex justify-center items-center">
             <button className="bg-blue-600 p-3 px-10 text-white rounded-lg mt-8">Apply Now</button>
            </div>
          </div>
          {/* right section more jobs */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
          <h2  className="text-xl font-semibold">More Jobs from {jobData?.companyId?.name}</h2>
        {jobs
          .filter(job => job._id !== jobData._id && job.companyId._id === jobData.companyId._id) 
          .slice(0, 3)
          .map((job,index) => <JobCard key={index} job={job} />)} 

          </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  ) : (
  <>
    <Navbar />
  <div className="min-h-screen flex flex-col py-10 container px-4 mx-auto">
    <div className="bg-white text-black rounded-lg w-full">
      <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-300 rounded-xl">
        <div className="flex flex-col md:flex-row items-center">
          <Skeleton circle={true} height={96} width={96} className="mr-1" />
          <div className="text-center mt-3 md:text-left text-neutral-700">
            <Skeleton width={200} height={30} className="mb-4 ml-2" />
            <div className="flex flex-wrap gap-y-2 ml-10 gap-6">
              <Skeleton width={120} height={20} />
              <Skeleton width={120} height={20} />
              <Skeleton width={120} height={20} />
              <Skeleton width={120} height={20} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-end text-sm">
          <Skeleton width={120} height={40} className="mb-2" />
          <Skeleton width={80} height={20} className="mt-1 mr-6" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="w-full lg:w:2/3">
          <Skeleton width={150} height={30} className="mb-4" />
          <Skeleton count={5} height={20} className="mb-4" />
          <Skeleton width={120} height={40} className="mt-8" />
        </div>
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5  py-5">
          <Skeleton width={150} height={30} />
          <Skeleton count={3} height={80} />
        </div>
      </div>
       <Footer />
    </div>
  </div>
  </>

  )
}
export default ApplyJob

