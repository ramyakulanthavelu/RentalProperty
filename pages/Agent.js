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

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-blue-600 focus:outline-none my-1"
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
  )
}

export default Agent