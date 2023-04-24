import React from 'react'

function Agent() {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Upload Your Property Here</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="propertyname"
              placeholder="Property Name" />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="address"
              placeholder="Address" />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="price"
              placeholder="Price" />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="description"
              placeholder="Description" />
            <div class="flex justify-center mt-8">
              <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                <div class="m-4">
                  <label class="inline-block mb-2 text-gray-500">File Upload</label>
                  <div class="flex items-center justify-center w-full">
                    <label
                      class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Attach a file</p>
                      </div>
                      <input type="file" class="opacity-0" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-600 focus:outline-none my-5"
            >Submit</button>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to Swipe Right
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Terms of Service
              </a> and
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Privacy Policy
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agent