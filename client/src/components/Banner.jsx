import { assets } from "../assets/assets"

const Banner = () => {
  return (
   <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
  {/* <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ ---> */}
  <div className="flex items-stretch justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
    <div className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-lg">
      <div className="flex flex-col justify-center md:w-1/2">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Download Mobile App for Better Experience</h1>
        <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2 font-light">Available on<span className="font-bold"> Google Play Store</span> And<span className="font-bold"> Apple App Store</span></p>
        <div className="flex flex-wrap gap-3 py-3">  
        <img src={assets.play_store} className="h-10" alt="" />
        <img src={assets.app_store}  className="h-10"alt="" />
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img src={assets.app_main_img} alt="" className="h-30" />
      </div>
    </div>
    </div>
  </div>
  )
}
export default Banner