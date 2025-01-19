import React from 'react'

const SearchMovie = () => {
  return (
    <div className='w-full flex items-center justify-center h-[100vh]'>
        <form className='w-1/2'>
            <div className='flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%] p-2'>
            <input className='w-full outline-none rounded-lg text-lg px-4 py-2' type="text" placeholder='Search Movies...' />
            <button className='bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2 text-xl'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default SearchMovie