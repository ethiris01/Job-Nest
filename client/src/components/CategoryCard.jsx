const CategoryCard = ({ logo, desc, title }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-12 h-12"
          src={logo}
          alt="Category Logo"
        />
        <h5 className="mt-3 text-lg font-semibold text-gray-900">{title}</h5>
        <p className="text-sm text-gray-500 mt-2 mb-4 leading-relaxed line-clamp-3 text-center px-2 sm:px-4">
          {desc || "No description available."}
        </p>

        {/* <div className="mt-4">
          <a
            href="/"
            className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300"
          >
            Browse Categories
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryCard;
