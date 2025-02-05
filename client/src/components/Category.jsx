import { categoriesData } from "../assets/assets";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="container mx-auto px-6 py-6 max-w-screen-xl">
      <div className="flex items-center justify-center">
        <h2 className=" font-medium text-2xl sm:text-3xl text-center mb-6">Categories</h2>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesData.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
