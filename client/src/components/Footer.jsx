import { assets } from "../assets/assets";

const Footer = () => {
  return (
<footer className="bg-white">
    <div className="mt-10 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src={assets.logo} className="h-8" alt="main_logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-600 capitalize">About Us</h2>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-600 capitalize">Services</h2>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-600 capitalize">Contact Us</h2>
              </div>
          </div>
      </div>
      <hr className="my-3 border-gray-300 sm:mx-auto lg:my-5" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">JobNest™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 <img src={assets.facebook_icon} className="w-8 h-8" alt="" />
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <img src={assets.twitter_icon} className="w-8 h-8" alt="" />
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <img src={assets.instagram_icon} className="w-8 h-8" alt="" />
                  <span className="sr-only">Instagram community</span>
              </a>    
          </div>
      </div>
    </div>
</footer>



  );
};

export default Footer;
