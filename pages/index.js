import React from "react";
import ReactDOM from "react-dom/client";
import Section from "@/components/Section";


function index() {
  return (
    <div className="flex min-h-fit min-w-fit flex-col ">
      <div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/img1.jpg" alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">About</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>

          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/img2.jpg" alt="River" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Products</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>


          </div>

          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/img3.jpg" alt="Forest" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Login</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div classNameName="min-h-screen">

        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
          <div className="relative m-3 flex flex-wrap mx-auto justify-center">
            <div className="min-w-[340px]flex flex-col group">
              <div
                className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                <img src="/img3.jpg"
                  className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                  alt="" />

                <div
                  className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                </div>

              </div>
              <a href="./single_post.html"
                className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                Wild West Hoodie</a>


              <p className="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">Lorem ipsum dolor
                sit
                amet, consectetur adipisicing.</p>

              <div className="flex justify-center gap-x-3">
                <a href=""
                  className=" px-5 py-2 border border-primary text-primary hover:bg-primary  transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold">
                  Add</a>
                <a href=""
                  className="px-5 py-2 border border-primary text-primary hover:bg-primary ahover:text-white transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold">
                  View</a>
              </div>

            </div>
          </div>

        </div>
        
<div className="flex flex-col">

  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">574 Messages</h2>
        <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
      </div>
    </div>

    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">1823 Users</h2>
        <p className="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
      </div>
    </div>
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">548 Posts</h2>
        <p className="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
      </div>
    </div>
    
  </div>
</div>
      </div>
    </div>


  )
}

export default index;
