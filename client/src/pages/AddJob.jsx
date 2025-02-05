import Quill from "quill";
import { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css"; // Ensure Quill's styles are imported
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Chennai");
  const [category, setCategory] = useState("Programming");
  const [type, setType] = useState("Full Time");
  const [exp, setExp] = useState("Fresher");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write job details here...",
      });

      quillRef.current.on("text-change", () => {
        setDescription(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      location,
      category,
      type,
      exp,
      salary,
      description,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Job</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Job Title</label>
          <input
            type="text"
            placeholder="Enter job title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Job Description</label>
          <div ref={editorRef} className="border border-gray-300 rounded-lg p-2 min-h-[150px]"></div>
        </div>

        {/* Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Job Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {JobCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              {JobLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Job Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Experience</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setExp(e.target.value)}
              value={exp}
            >
              <option value="Fresher">Fresher</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-7 Years">3-7 Years</option>
              <option value="7+ Years">7+ Years</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Salary</label>
            <input
              type="number"
              min="0"
              placeholder="25000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-48 bg-black text-white font-semibold py-3 rounded-lg transition"
        >
          Add Job
        </button>
      </form>
    </div> 
  );
};

export default AddJob;
