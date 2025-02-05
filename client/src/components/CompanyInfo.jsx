import { assets } from "../assets/assets"

const CompanyInfo = () => {
  return (
    <div className="bg-white mt-8">
      {/* Trusted By Section */}
      <p className="text-center text-xl text-black font-bold">
        Trusted By <span className="text-blue-400">100+</span> companies
      </p>

      {/* Logos Section */}
      <div className="border border-gray-400 mx-auto mt-5 p-5 rounded-lg shadow-sm shadow-gray-400 max-w-screen-lg">
        <div className="flex gap-4 sm:gap-10 flex-nowrap justify-start items-center overflow-x-auto whitespace-nowrap scroll-smooth py-4 ">
          <img src={assets.microsoft_logo} alt="Microsoft" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.walmart_logo} alt="Walmart" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.accenture_logo} alt="Accenture" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.samsung_logo} alt="Samsung" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.microsoft_logo} alt="Microsoft" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.amazon_logo} alt="Amazon" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.accenture_logo} alt="Accenture" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
          <img src={assets.adobe_logo} alt="Adobe" className="h-8 w-auto transition-transform duration-300 hover:scale-110" />
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo;
