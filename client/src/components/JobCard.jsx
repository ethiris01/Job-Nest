import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-lg border bg-white p-4 shadow hover:shadow-lg transition duration-300">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={assets.company_icon}
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="text-md font-semibold text-gray-800">{job.title}</h3>
            {/* <p className="text-sm text-gray-500">{job.company}</p> */}
          </div>
        </div>
        <p className="flex items-center text-xs text-emerald-500 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a7.5 7.5 0 00-7.5 7.5c0 4.602 6.123 11.329 6.404 11.638a.75.75 0 001.192 0c.281-.309 6.404-7.036 6.404-11.638a7.5 7.5 0 00-7.5-7.5zm0 10.125a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"
              clipRule="evenodd"
            />
          </svg>
          {job.location}
        </p>
      </div>

      {/* Job Details */}
      <div className=" mb-4">
        <div className="flex gap-3 flex-wrap">
          <p className="text-gray-500 text-sm font-medium mb-2 bg-slate-100 px-2 py-2 rounded-md shadow-sm border border-gray-300">
            {job.type}
          </p>
          <p className="text-gray-500 text-sm font-medium mb-2  bg-yellow-100 px-2 py-2 rounded-md shadow-sm border border-gray-200 ">
            {job.exp}
          </p>
        </div>

        <p
          dangerouslySetInnerHTML={{
            __html: job.description.slice(0, 125),
          }}
          className="text-gray-600 text-sm"
        ></p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="w-full sm:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Apply
        </button>
        {/* <button className="w-full sm:w-auto border border-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default JobCard;
